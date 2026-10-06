"""Criterion: Images, favicon and mobile performance foundations are present.

Verifies against the production build (`frontend/dist`, produced by `yarn build`'s
prerender step) that: visible images carry descriptive alt text; the home hero image
and header logo include width/height and a high fetchPriority hint; the approved
logo supplies favicon/apple-touch-icon/manifest metadata; external asset origins are
preconnected; and no important route is marked noindex.
"""

import os
import re

import pytest

DIST_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "dist")

IMPORTANT_ROUTES_TO_FILE = {
    "/": "index.html",
    "/services": "services/index.html",
    "/services/linkedin-management": "services/linkedin-management/index.html",
    "/services/email-outreach": "services/email-outreach/index.html",
    "/services/business-support": "services/business-support/index.html",
    "/services/lead-generation": "services/lead-generation/index.html",
    "/services/ai-video-creation": "services/ai-video-creation/index.html",
    "/services/email-setup": "services/email-setup/index.html",
    "/about": "about/index.html",
    "/how-i-work": "how-i-work/index.html",
    "/contact": "contact/index.html",
    "/privacy-policy": "privacy-policy/index.html",
    "/terms": "terms/index.html",
}


@pytest.fixture(scope="module")
def dist_available():
    if not os.path.isdir(DIST_DIR):
        pytest.skip(f"production build not present at {DIST_DIR}; run `yarn build` first")
    return True


@pytest.fixture(scope="module")
def home_html(dist_available):
    with open(os.path.join(DIST_DIR, "index.html")) as f:
        return f.read()


def test_favicon_apple_icon_and_manifest_use_approved_logo(home_html):
    assert re.search(r'<link rel="icon"[^>]*href="https://[^"]+\.jpg"', home_html), "favicon icon link missing"
    assert re.search(r'<link rel="apple-touch-icon"[^>]*href="https://[^"]+\.jpg"', home_html), "apple-touch-icon missing"
    assert '<link rel="manifest" href="/site.webmanifest"' in home_html, "web manifest link missing"
    manifest_path = os.path.join(DIST_DIR, "..", "public", "site.webmanifest")
    assert os.path.exists(os.path.abspath(manifest_path)) or os.path.exists(os.path.join(DIST_DIR, "site.webmanifest"))


def test_external_asset_origins_are_preconnected(home_html):
    preconnects = re.findall(r'<link rel="preconnect" href="(https://[^"]+)"', home_html)
    assert any("emergentagent" in p for p in preconnects), f"expected preconnect to asset host, got {preconnects}"
    assert len(preconnects) >= 1


def test_home_hero_and_logo_images_have_dimensions_priority_and_alt(home_html):
    hero = re.search(r'<img[^>]*data-testid="home-hero-image"[^>]*>', home_html)
    assert hero, "home hero image not found"
    hero_tag = hero.group(0)
    assert re.search(r'width="\d+"', hero_tag) and re.search(r'height="\d+"', hero_tag), f"hero missing dimensions: {hero_tag}"
    assert "fetchPriority=\"high\"" in hero_tag, f"hero missing high fetchPriority hint: {hero_tag}"
    assert re.search(r'alt="[^"]{10,}"', hero_tag), f"hero missing descriptive alt text: {hero_tag}"

    logo = re.search(r'<img[^>]*data-testid="nav-logo-image"[^>]*>', home_html)
    assert logo, "header logo image not found"
    logo_tag = logo.group(0)
    assert re.search(r'width="\d+"', logo_tag) and re.search(r'height="\d+"', logo_tag), f"logo missing dimensions: {logo_tag}"
    assert re.search(r'alt="[^"]{5,}"', logo_tag), f"logo missing descriptive alt text: {logo_tag}"


@pytest.mark.parametrize("route,filename", IMPORTANT_ROUTES_TO_FILE.items())
def test_important_routes_are_prerendered_and_not_noindex(dist_available, route, filename):
    path = os.path.join(DIST_DIR, filename)
    assert os.path.exists(path), f"prerendered file missing for {route}: {path}"
    with open(path) as f:
        html = f.read()
    assert "<h1" in html, f"{route} prerendered HTML has no H1"
    robots_match = re.search(r'<meta name="robots" content="([^"]+)"', html)
    assert robots_match, f"{route} missing robots meta tag"
    assert "noindex" not in robots_match.group(1), f"important route {route} must not be noindex: {robots_match.group(1)}"
    assert "index" in robots_match.group(1)


def test_seo_report_utility_page_is_noindex_in_build(dist_available):
    report_path = os.path.join(DIST_DIR, "seo-report.html")
    assert os.path.exists(report_path), "seo-report.html missing from production build"
    with open(report_path) as f:
        html = f.read()
    assert 'content="noindex' in html, "seo-report.html must remain noindex in the production build"
