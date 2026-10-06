"""Criterion: Legacy URLs return permanent redirects.

Verifies the Vite dev server's SSR middleware maps every seo.config.json `redirects`
entry to an HTTP 301 with the correct Location header (mirrors real browser requests,
which always send Accept: text/html), and that public/_redirects (used by static hosts)
contains the same rules.
"""

import json
import os
import pathlib

import httpx
import pytest

FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")
SEO_CONFIG_PATH = pathlib.Path(__file__).resolve().parents[2] / "frontend" / "seo.config.json"
REDIRECTS_FILE_PATH = pathlib.Path(__file__).resolve().parents[2] / "frontend" / "public" / "_redirects"


def _load_redirects() -> dict:
    with open(SEO_CONFIG_PATH, "r", encoding="utf-8") as f:
        config = json.load(f)
    return config["redirects"]


@pytest.fixture(scope="module")
def html_client():
    with httpx.Client(
        base_url=FRONTEND_URL, timeout=30.0, headers={"Accept": "text/html"}, follow_redirects=False
    ) as c:
        yield c


def test_seo_config_has_at_least_ten_redirect_rules():
    redirects = _load_redirects()
    assert len(redirects) >= 10, f"Expected >=10 redirect rules, found {len(redirects)}"


@pytest.mark.parametrize("legacy_path", ["/about-us", "/our-services", "/contact-us"])
def test_named_legacy_paths_return_301(html_client, legacy_path):
    redirects = _load_redirects()
    expected_target = redirects[legacy_path]
    resp = html_client.get(legacy_path)
    assert resp.status_code == 301, f"{legacy_path} -> expected 301, got {resp.status_code}"
    assert resp.headers.get("location") == expected_target


def test_all_configured_redirects_return_301_with_correct_location(html_client):
    redirects = _load_redirects()
    failures = []
    for legacy_path, target in redirects.items():
        resp = html_client.get(legacy_path)
        if resp.status_code != 301 or resp.headers.get("location") != target:
            failures.append((legacy_path, resp.status_code, resp.headers.get("location"), target))
    assert not failures, f"Redirect mismatches: {failures}"


def test_root_level_service_url_redirects_to_services_route(html_client):
    resp = html_client.get("/linkedin-management")
    assert resp.status_code == 301
    assert resp.headers.get("location") == "/services/linkedin-management"


def test_public_redirects_file_generated_from_seo_config():
    redirects = _load_redirects()
    content = REDIRECTS_FILE_PATH.read_text(encoding="utf-8")
    for legacy_path, target in redirects.items():
        assert legacy_path in content, f"{legacy_path} missing from public/_redirects"
        assert target in content, f"{target} missing from public/_redirects"
