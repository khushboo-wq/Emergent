"""Criterion: Business identity and schemas stay consistent.

Home/About contain Organization + Person schema for Khushboo Tomar (New Delhi,
serving Ireland/UK/Europe, LinkedIn + Instagram sameAs). Contact contains ContactPage
schema and visible email, WhatsApp, location, LinkedIn, Instagram.
"""

import os
import re

import httpx
import pytest

FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")


@pytest.fixture(scope="module")
def pages():
    with httpx.Client(base_url=FRONTEND_URL, timeout=30.0, headers={"Accept": "text/html"}) as c:
        return {
            "/": c.get("/").text,
            "/about": c.get("/about").text,
            "/contact": c.get("/contact").text,
        }


@pytest.mark.parametrize("path", ["/", "/about"])
def test_organization_and_person_schema(pages, path):
    html = pages[path]
    m = re.search(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S)
    assert m, f"{path} missing JSON-LD"
    payload = m.group(1)
    has_org = '"@type":"Organization"' in payload or bool(re.search(r'"@type":\[[^\]]*"Organization"[^\]]*\]', payload))
    assert has_org, f"{path} missing Organization schema: {payload[:300]}"
    has_person = '"@type":"Person"' in payload or bool(re.search(r'"@type":\[[^\]]*"Person"[^\]]*\]', payload))
    assert has_person, f"{path} missing Person schema: {payload[:300]}"
    assert "Khushboo Tomar" in payload
    assert "New Delhi" in payload
    assert '"Ireland"' in payload and '"United Kingdom"' in payload and '"Europe"' in payload
    assert "linkedin.com/in/khushboo-tomar" in payload
    assert "instagram.com/arcturusprofessional" in payload


def test_contact_page_schema_and_visible_details(pages):
    html = pages["/contact"]
    m = re.search(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S)
    assert m, "/contact missing JSON-LD"
    assert '"@type":"ContactPage"' in m.group(1), "/contact missing ContactPage schema"
    for testid in ["contact-email-link", "contact-whatsapp-link", "contact-location", "contact-linkedin-link", "contact-instagram-link"]:
        assert f'data-testid="{testid}"' in html, f"/contact missing visible {testid}"
    assert "khushboo@arcturusprofessional.com" in html
