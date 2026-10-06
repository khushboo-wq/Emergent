"""Criterion: Service pages provide factual citation-ready content and schema.

Each service page: two-sentence summary, plain-text EUR price, last-updated date,
What's included / Who it's for / How it works / Pricing / Reporting sections, 5-6
visible FAQs, breadcrumbs, related links, Service schema with priceCurrency/areaServed,
and FAQPage schema.
"""

import os
import re

import httpx
import pytest

FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")

SERVICE_SLUGS = [
    "linkedin-management", "email-outreach", "business-support",
    "lead-generation", "ai-video-creation", "email-setup",
]


@pytest.fixture(scope="module")
def service_pages():
    with httpx.Client(base_url=FRONTEND_URL, timeout=30.0, headers={"Accept": "text/html"}) as c:
        return {slug: c.get(f"/services/{slug}").text for slug in SERVICE_SLUGS}


@pytest.mark.parametrize("slug", SERVICE_SLUGS)
def test_service_page_sections_present(service_pages, slug):
    html = service_pages[slug]
    for testid in [
        "service-summary", "service-last-updated", "service-pricing",
        "service-inclusions-heading", "service-audience-heading",
        "service-process-heading", "service-pricing-heading",
        "service-reporting-heading", "service-faq-heading",
        "service-breadcrumbs", "service-related-section",
    ]:
        assert f'data-testid="{testid}"' in html, f"/services/{slug} missing {testid}"
    assert "EUR" in html or "\u20ac" in html, f"/services/{slug} missing plain-text price currency"


@pytest.mark.parametrize("slug", SERVICE_SLUGS)
def test_service_page_has_5_to_6_faqs(service_pages, slug):
    html = service_pages[slug]
    faq_ids = set(re.findall(r'data-testid="service-faq-(\d+)"', html))
    assert 5 <= len(faq_ids) <= 6, f"/services/{slug} has {len(faq_ids)} FAQs, expected 5-6"


@pytest.mark.parametrize("slug", SERVICE_SLUGS)
def test_service_schema_and_faqpage_schema(service_pages, slug):
    html = service_pages[slug]
    m = re.search(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S)
    assert m, f"/services/{slug} missing JSON-LD"
    payload = m.group(1)
    assert '"@type":"Service"' in payload, f"/services/{slug} missing Service schema"
    assert '"priceCurrency":"EUR"' in payload, f"/services/{slug} missing priceCurrency"
    assert '"areaServed"' in payload, f"/services/{slug} missing areaServed"
    assert '"@type":"FAQPage"' in payload, f"/services/{slug} missing FAQPage schema"
