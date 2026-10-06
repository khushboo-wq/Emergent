"""Criterion: Unknown routes return a real crawler-safe 404.

Verifies an unknown HTML route returns HTTP 404 with rendered "Page not found" content,
exactly one H1, Home/Services/Contact navigation links, a noindex,follow robots
directive, and no canonical/schema that would suggest it is actually the Home page.
"""

import os
import re

import httpx
import pytest

FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")


@pytest.fixture(scope="module")
def html_client():
    with httpx.Client(base_url=FRONTEND_URL, timeout=30.0, headers={"Accept": "text/html"}) as c:
        yield c


@pytest.fixture(scope="module")
def not_found_body(html_client):
    resp = html_client.get("/tscheck-unknown-route-xyz123")
    return resp


def test_unknown_route_returns_http_404(not_found_body):
    assert not_found_body.status_code == 404


def test_unknown_route_renders_page_not_found_content(not_found_body):
    html = not_found_body.text
    assert "Page not found" in html
    assert 'data-testid="not-found-page"' in html


def test_unknown_route_has_exactly_one_h1(not_found_body):
    html = not_found_body.text
    h1_matches = re.findall(r"<h1[\s>]", html)
    assert len(h1_matches) == 1, f"Expected exactly one <h1>, found {len(h1_matches)}"


def test_unknown_route_has_home_services_contact_links(not_found_body):
    html = not_found_body.text
    assert 'data-testid="not-found-home-link"' in html
    assert 'data-testid="not-found-services-link"' in html
    assert 'data-testid="not-found-contact-link"' in html


def test_unknown_route_has_noindex_follow_directive(not_found_body):
    html = not_found_body.text
    robots_match = re.search(r'<meta[^>]+name="robots"[^>]+content="([^"]+)"', html)
    assert robots_match, "robots meta tag not found"
    content = robots_match.group(1)
    assert "noindex" in content
    assert "follow" in content


def test_unknown_route_does_not_look_like_home_page(not_found_body):
    html = not_found_body.text
    canonical_match = re.search(r'rel="canonical"\s+href="([^"]+)"', html)
    assert canonical_match, "canonical tag not found"
    canonical_href = canonical_match.group(1)
    assert canonical_href.rstrip("/").endswith("/404"), f"canonical should point to /404, got {canonical_href}"
    assert '"@type":"Organization"' not in html.replace(" ", "")
    assert '"@type": "Organization"' not in html
