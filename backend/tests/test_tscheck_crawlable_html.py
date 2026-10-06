"""Criterion: Every public page is a separate route with crawler-readable HTML.

Verifies GET with Accept: text/html returns SSR HTML containing the page's H1 and
body content before any client JS executes (the Vite dev SSR middleware path).
"""

import os
import re

import httpx
import pytest

FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")

ROUTES_AND_H1 = [
    ("/", "Make the work behind your growth feel"),
    ("/services", None),
    ("/services/linkedin-management", "LinkedIn Management"),
    ("/services/email-outreach", "Email Outreach"),
    ("/services/business-support", "Business Support"),
    ("/services/lead-generation", "Lead Generation"),
    ("/services/ai-video-creation", "AI Video Creation"),
    ("/services/email-setup", "Email Setup"),
    ("/about", None),
    ("/how-i-work", None),
    ("/contact", "Tell me what you need to move forward."),
    ("/privacy-policy", None),
    ("/terms", None),
]


@pytest.fixture(scope="module")
def html_client():
    with httpx.Client(base_url=FRONTEND_URL, timeout=30.0, headers={"Accept": "text/html"}) as c:
        yield c


@pytest.mark.parametrize("path,expected_fragment", ROUTES_AND_H1)
def test_route_returns_crawlable_html(html_client, path, expected_fragment):
    resp = html_client.get(path)
    assert resp.status_code == 200, f"{path} -> {resp.status_code}"
    body = resp.text
    assert "<!--app-html-->" not in body, f"{path} was not SSR-filled (placeholder still present)"
    match = re.search(r"<h1[^>]*>(.*?)</h1>", body, re.S)
    assert match, f"{path} missing an <h1> in the SSR payload"
    h1_text = re.sub(r"<[^>]+>", "", match.group(1))
    assert h1_text.strip(), f"{path} <h1> is empty"
    if expected_fragment:
        assert expected_fragment in body, f"{path} missing expected visible fragment {expected_fragment!r}"
    # Body content beyond the header shell must exist before hydration.
    assert 'data-testid="page-frame"' in body
