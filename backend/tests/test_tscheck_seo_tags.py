"""Criterion: Every page has unique complete SEO tags.

For each of the 13 routes: one unique <title> under 60 chars, a 150-160 char meta
description, a canonical matching https://arcturusprofessional.com/<path>, Open Graph
tags, Twitter tags, and JSON-LD present in the served SSR HTML.
"""

import os
import re

import httpx
import pytest

FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")
CANONICAL_BASE = "https://arcturusprofessional.com"

ROUTES = [
    "/", "/services", "/services/linkedin-management", "/services/email-outreach",
    "/services/business-support", "/services/lead-generation", "/services/ai-video-creation",
    "/services/email-setup", "/about", "/how-i-work", "/contact", "/privacy-policy", "/terms",
]


@pytest.fixture(scope="module")
def pages():
    with httpx.Client(base_url=FRONTEND_URL, timeout=30.0, headers={"Accept": "text/html"}) as c:
        return {path: c.get(path).text for path in ROUTES}


def _canonical_path(path: str) -> str:
    return CANONICAL_BASE + path if path != "/" else CANONICAL_BASE + "/"


def test_titles_are_unique_and_under_60_chars(pages):
    titles = {}
    for path, html in pages.items():
        m = re.search(r"<title>(.*?)</title>", html, re.S)
        assert m, f"{path} missing <title>"
        title = re.sub(r"&amp;", "&", m.group(1)).strip()
        assert len(title) < 60, f"{path} title too long ({len(title)}): {title}"
        titles[path] = title
    assert len(set(titles.values())) == len(titles), f"Duplicate titles found: {titles}"


def test_meta_descriptions_length_window(pages):
    for path, html in pages.items():
        m = re.search(r'<meta name="description" content="(.*?)"', html, re.S)
        assert m, f"{path} missing meta description"
        desc = m.group(1)
        assert 150 <= len(desc) <= 160, f"{path} description length {len(desc)} out of 150-160 window: {desc!r}"


def test_canonical_matches_own_path(pages):
    for path, html in pages.items():
        m = re.search(r'<link rel="canonical" href="(.*?)"', html)
        assert m, f"{path} missing canonical"
        assert m.group(1) == _canonical_path(path), f"{path} canonical mismatch: {m.group(1)}"


def test_open_graph_and_twitter_tags_present(pages):
    for path, html in pages.items():
        for tag in ["og:title", "og:description", "og:type", "og:url", "twitter:card", "twitter:title", "twitter:description"]:
            assert f'property="{tag}"' in html or f'name="{tag}"' in html, f"{path} missing {tag}"


def test_json_ld_present(pages):
    for path, html in pages.items():
        assert re.search(r'<script[^>]*type="application/ld\+json"[^>]*>', html), f"{path} missing JSON-LD"
