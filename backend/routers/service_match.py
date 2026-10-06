import asyncio

from fastapi import APIRouter, HTTPException
from typesafe_sdk import Choice, TypeSafeAPIError, TypeSafeError

from lib.jev import get_jev_client, jev_error_code
from models.service_match import ServiceMatchRequest, ServiceMatchResponse

router = APIRouter()
jev_semaphore = asyncio.Semaphore(1)

SERVICE_CRITERIA = {
    "linkedin-management": "Ongoing LinkedIn profile optimisation, posting, authority content, connection outreach, follow-ups, lead magnets or nurture.",
    "email-outreach": "Managed B2B cold email campaigns including copy, sending, domain warm-up, follow-ups, unsubscribe handling or reporting.",
    "business-support": "Remote research, administration, AI-assisted content, website or DNS support, LinkedIn posting, YouTube support without SEO, or ad management.",
    "lead-generation": "Building and verifying a targeted B2B contact list by company size, role, industry or location.",
    "ai-video-creation": "Basic or custom AI-generated videos and reels with a logo, business details, branding or end cards.",
    "email-setup": "Technical business email and DNS authentication setup, specifically SPF, DKIM, DMARC or sending-domain configuration.",
}

SERVICE_NAMES = {
    "linkedin-management": "LinkedIn Management",
    "email-outreach": "Email Outreach",
    "business-support": "Business Support",
    "lead-generation": "Lead Generation",
    "ai-video-creation": "AI Video Creation",
    "email-setup": "Email Setup",
}

RATIONALES = {
    "linkedin-management": "Your brief is mainly about LinkedIn presence, content, outreach or nurture.",
    "email-outreach": "Your brief is mainly about running a structured B2B email outreach campaign.",
    "business-support": "Your brief is mainly about practical remote business, content, website or administrative support.",
    "lead-generation": "Your brief is mainly about researching and verifying B2B contacts for a target market.",
    "ai-video-creation": "Your brief is mainly about creating branded AI-generated videos or reels.",
    "email-setup": "Your brief is mainly about business email, DNS authentication or deliverability setup.",
}


@router.post("/service-match", response_model=ServiceMatchResponse)
async def match_service(payload: ServiceMatchRequest) -> ServiceMatchResponse:
    try:
        async with jev_semaphore:
            response = await get_jev_client().system_one(
                model="jev-latest",
                state={"business_need": payload.brief.strip()},
                questions={
                    "service": Choice(
                        instructions="Choose the single Arcturus service that most directly matches this written business need. Use only the supplied criteria and do not infer an unlisted service.",
                        criteria=SERVICE_CRITERIA,
                    )
                },
            )
    except TypeSafeAPIError as exc:
        status = exc.status if exc.status in {400, 401, 403, 409, 429} else 502
        raise HTTPException(
            status_code=status,
            detail={"code": jev_error_code(exc), "message": str(exc)},
        ) from exc
    except TypeSafeError as exc:
        raise HTTPException(
            status_code=503,
            detail={
                "code": "jev_unavailable",
                "message": "Service matching is temporarily unavailable. Try again shortly.",
            },
        ) from exc

    decision = response.choices["service"]
    slug = decision.choice
    if slug not in SERVICE_NAMES:
        raise HTTPException(
            status_code=502,
            detail={"code": "invalid_jev_choice", "message": "The service matcher returned an unsupported choice."},
        )

    probabilities = {str(key): float(value) for key, value in decision.probabilities.items()}
    confidence = float(decision.confidence)
    return ServiceMatchResponse(
        service_slug=slug,
        service_name=SERVICE_NAMES[slug],
        rationale=RATIONALES[slug],
        confidence=confidence,
        probabilities=probabilities,
        needs_clarification=confidence < 0.55,
        ai_classified=True,
    )
