from typing import Literal

from pydantic import BaseModel, EmailStr, Field


class ContactSubmission(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    company: str = Field(min_length=1, max_length=160)
    service: str = Field(min_length=2, max_length=100)
    message: str = Field(min_length=10, max_length=5000)


class ContactResponse(BaseModel):
    status: Literal["success"]
    message: str
