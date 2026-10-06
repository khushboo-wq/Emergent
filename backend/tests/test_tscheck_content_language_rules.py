"""Criterion: Content follows the owner's language rules.

Visible copy uses first-person singular, contains no first-person plural voice and
no em dashes, and Business Support does not mention CRM as something offered.
"""

import os
import re

import httpx
import pytest

FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")

ROUTES = [
    "/", "/services", "/services/linkedin-management", "/services/email-outreach",
    "/services/business-support", "/services/lead-generation", "/services/ai-video-creation",
    "/services/email-setup", "/about", "/how-i-work", "/contact", "/privacy-policy", "/terms",
]

PLURAL_PRONOUNS = [r"\bwe\b", r"\bwe're\b", r"\bwe'll\b", r"\bour\b", r"\bours\b", r"\bus\b", r"\bourselves\b"]


def _visible_text(html: str) -> str:
    html = re.sub(r"<!--.*?-->", " ", html, flags=re.S)
    html = re.sub(r"<script.*?</script>", " ", html, flags=re.S)
    html = re.sub(r"<style.*?</style>", " ", html, flags=re.S)
    return re.sub(r"<[^>]+>", " ", html)


@pytest.fixture(scope="module")
def pages():
    with httpx.Client(base_url=FRONTEND_URL, timeout=30.0, headers={"Accept": "text/html"}) as c:
        return {path: _visible_text(c.get(path).text) for path in ROUTES}


@pytest.mark.parametrize("path", ROUTES)
def test_no_first_person_plural_voice(pages, path):
    text = pages[path]
    for pattern in PLURAL_PRONOUNS:
        matches = re.findall(pattern, text, re.I)
        assert not matches, f"{path} contains first-person plural voice ({pattern}): {matches}"


@pytest.mark.parametrize("path", ROUTES)
def test_no_em_dash_in_visible_copy(pages, path):
    assert "\u2014" not in pages[path], f"{path} contains an em dash in visible copy"


def test_business_support_does_not_offer_crm_management(pages):
    text = pages["/services/business-support"]
    if "CRM" in text:
        # Explicit statements that CRM management is NOT offered are acceptable.
        assert (
            "do not offer CRM management" in text
            or "does not offer CRM management" in text
            or "don't offer CRM management" in text
            or "don&#x27;t offer CRM management" in text
            or "don&#39;t offer CRM management" in text
        ), f"Business Support page mentions CRM without disclaiming it as unoffered: {text[text.find('CRM')-80:text.find('CRM')+80]}"
