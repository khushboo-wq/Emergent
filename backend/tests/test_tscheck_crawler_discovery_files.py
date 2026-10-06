"""Criterion: AI and search crawler discovery files are complete.

robots.txt allows named AI/search crawlers + Googlebot and links the sitemap;
sitemap lists all 13 pages; llms.txt states identity, region, every service, ASCII
EUR price, URL, and contact details.
"""

import os

import httpx
import pytest

FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")

REQUIRED_CRAWLERS = [
    "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot",
    "Google-Extended", "Googlebot",
]

SITEMAP_PATHS = [
    "/", "/services", "/services/linkedin-management", "/services/email-outreach",
    "/services/business-support", "/services/lead-generation", "/services/ai-video-creation",
    "/services/email-setup", "/about", "/how-i-work", "/contact", "/privacy-policy", "/terms",
]

SERVICE_TITLES = [
    "LinkedIn Management", "Email Outreach", "Business Support",
    "Lead Generation", "AI Video Creation", "Email Setup",
]


@pytest.fixture(scope="module")
def client():
    with httpx.Client(base_url=FRONTEND_URL, timeout=30.0) as c:
        yield c


def test_robots_txt_allows_crawlers_and_links_sitemap(client):
    resp = client.get("/robots.txt")
    assert resp.status_code == 200
    body = resp.text
    for crawler in REQUIRED_CRAWLERS:
        assert crawler in body, f"robots.txt missing {crawler}"
    assert "Sitemap: https://arcturusprofessional.com/sitemap.xml" in body


def test_sitemap_lists_all_13_pages(client):
    resp = client.get("/sitemap.xml")
    assert resp.status_code == 200
    body = resp.text
    for path in SITEMAP_PATHS:
        loc = f"https://arcturusprofessional.com{path}" if path != "/" else "https://arcturusprofessional.com/"
        assert loc in body, f"sitemap.xml missing {loc}"


def test_llms_txt_complete(client):
    resp = client.get("/llms.txt")
    assert resp.status_code == 200
    body = resp.text
    assert "Khushboo Tomar" in body
    assert "New Delhi" in body
    assert "Ireland" in body and "United Kingdom" in body and "Europe" in body
    for title in SERVICE_TITLES:
        assert title in body, f"llms.txt missing service {title}"
    assert "EUR" in body
    assert "\u20ac" not in body, "llms.txt should use ASCII EUR, not the euro symbol"
    assert "khushboo@arcturusprofessional.com" in body
    assert "https://arcturusprofessional.com/services/linkedin-management" in body
