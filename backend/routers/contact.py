from html import escape

from fastapi import APIRouter

from lib.email import send_email
from models.contact import ContactResponse, ContactSubmission

router = APIRouter()
CONTACT_RECIPIENT = "khushboo@arcturusprofessional.com"


def _contact_email_html(submission: ContactSubmission) -> str:
    name = escape(submission.name.strip())
    email = escape(str(submission.email))
    company = escape(submission.company.strip())
    service = escape(submission.service.strip())
    message = escape(submission.message.strip()).replace("\n", "<br>")
    return (
        '<table role="presentation" width="100%" style="border-collapse:collapse;background:#faf9f6;">'
        '<tr><td style="padding:32px;font-family:Arial,sans-serif;color:#0f2942;">'
        '<p style="margin:0 0 8px;color:#9a6f00;font-size:11px;letter-spacing:2px;text-transform:uppercase;">New website enquiry</p>'
        '<h1 style="margin:0 0 24px;font-size:26px;line-height:1.2;">Arcturus Professional Services</h1>'
        f'<p style="margin:0 0 8px;"><strong>Name:</strong> {name}</p>'
        f'<p style="margin:0 0 8px;"><strong>Email:</strong> {email}</p>'
        f'<p style="margin:0 0 8px;"><strong>Company:</strong> {company}</p>'
        f'<p style="margin:0 0 20px;"><strong>Service:</strong> {service}</p>'
        f'<p style="margin:0;padding:16px;background:#ffffff;border:1px solid #e2dfd8;line-height:1.6;">{message}</p>'
        '<p style="margin:24px 0 0;color:#64748b;font-size:12px;">Sent from the Arcturus Professional Services website.</p>'
        '</td></tr></table>'
    )


@router.post("/contact", response_model=ContactResponse, status_code=202)
async def submit_contact(submission: ContactSubmission) -> ContactResponse:
    subject = "New Arcturus website enquiry"
    await send_email(to=CONTACT_RECIPIENT, subject=subject, html=_contact_email_html(submission))
    return ContactResponse(status="success", message="Thank you. Your enquiry has been sent.")
