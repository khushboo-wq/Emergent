from typing import Dict, Literal

from pydantic import BaseModel, Field

ServiceSlug = Literal[
    "linkedin-management",
    "email-outreach",
    "business-support",
    "lead-generation",
    "ai-video-creation",
    "email-setup",
]


class ServiceMatchRequest(BaseModel):
    brief: str = Field(min_length=10, max_length=1200)


class ServiceMatchResponse(BaseModel):
    service_slug: ServiceSlug
    service_name: str
    rationale: str
    confidence: float = Field(ge=0, le=1)
    probabilities: Dict[str, float]
    needs_clarification: bool
    ai_classified: Literal[True]
