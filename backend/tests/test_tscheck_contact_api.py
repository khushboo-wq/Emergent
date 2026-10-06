"""Criterion: Contact form sends a written enquiry through the backend (validation lane).

Invalid input (bad email) must receive validation feedback (4xx) and never be
forwarded to the email sender. The happy-path submission is covered by the
contact-form-submission browser check to avoid sending a duplicate owner-facing
test enquiry.
"""

def test_contact_rejects_invalid_email(client):
    payload = {
        "name": "Tscheck Validation",
        "email": "not-an-email",
        "company": "Tscheck Co",
        "service": "LinkedIn Management",
        "message": "tscheck-contact-validation enquiry body long enough to pass length rule.",
    }
    resp = client.post("/contact", json=payload)
    assert resp.status_code == 422, f"expected 422, got {resp.status_code}: {resp.text}"
    body = resp.json()
    assert "detail" in body


def test_contact_rejects_short_message(client):
    payload = {
        "name": "Tscheck Validation",
        "email": "tscheck-validation@example.com",
        "company": "Tscheck Co",
        "service": "LinkedIn Management",
        "message": "short",
    }
    resp = client.post("/contact", json=payload)
    assert resp.status_code == 422, f"expected 422, got {resp.status_code}: {resp.text}"
