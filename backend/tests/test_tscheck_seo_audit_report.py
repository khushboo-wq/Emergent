"""Criterion: Editable SEO configuration and reports work.

`frontend/seo.config.json` is the single metadata route source; `yarn seo:audit`
succeeds with zero missing items and (re)generates `frontend/SEO_REPORT.md` plus
`public/seo-report.html` listing every page, title, description, H1, canonical,
indexability, schema and missing items. The report page itself is intentionally
noindex and omitted from the sitemap (utility report, not a customer page).
"""

import json
import os
import re
import subprocess

import httpx
import pytest

FRONTEND_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "frontend")
FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")

EXPECTED_FIELDS = ["title", "description", "canonical", "indexable", "schemaTypes", "path", "h1"]


@pytest.fixture(scope="module")
def seo_config():
    with open(os.path.join(FRONTEND_DIR, "seo.config.json")) as f:
        return json.load(f)


def test_seo_config_is_single_source_with_13_unique_pages(seo_config):
    pages = seo_config["pages"]
    assert len(pages) == 13, f"expected 13 configured pages, got {len(pages)}"
    for field in EXPECTED_FIELDS:
        for page in pages:
            assert field in page, f"page {page.get('path')} missing required field '{field}'"
    paths = [p["path"] for p in pages]
    titles = [p["title"] for p in pages]
    descriptions = [p["description"] for p in pages]
    assert len(set(paths)) == 13, "page paths must be unique"
    assert len(set(titles)) == 13, "titles must be unique"
    assert len(set(descriptions)) == 13, "descriptions must be unique"


def test_yarn_seo_audit_runs_clean_with_zero_missing_items():
    result = subprocess.run(
        ["yarn", "seo:audit"],
        cwd=FRONTEND_DIR,
        capture_output=True,
        text=True,
        timeout=120,
    )
    assert result.returncode == 0, f"yarn seo:audit failed: {result.stdout[-2000:]} {result.stderr[-2000:]}"

    report_md_path = os.path.join(FRONTEND_DIR, "SEO_REPORT.md")
    assert os.path.exists(report_md_path), "SEO_REPORT.md was not generated"
    with open(report_md_path) as f:
        report_md = f.read()
    assert "Missing SEO items: 0" in report_md, f"SEO_REPORT.md reports missing items: {report_md[:500]}"
    assert "Pages created: 13" in report_md

    report_html_path = os.path.join(FRONTEND_DIR, "public", "seo-report.html")
    assert os.path.exists(report_html_path), "public/seo-report.html was not generated"
    with open(report_html_path) as f:
        report_html = f.read()
    assert re.search(r"<strong>0</strong>\s*Missing SEO items", report_html), "report html does not show 0 missing items"
    # Every page path appears in the report table (HTML-escape ampersands to match rendering).
    for page in json.load(open(os.path.join(FRONTEND_DIR, "seo.config.json")))["pages"]:
        escaped_title = page["title"].replace("&", "&amp;")
        assert escaped_title in report_html, f"report html missing title for {page['path']}"


def test_seo_report_html_served_noindex_and_not_in_sitemap():
    with httpx.Client(base_url=FRONTEND_URL, timeout=30.0) as c:
        resp = c.get("/seo-report.html")
        assert resp.status_code == 200
        assert 'name="robots" content="noindex' in resp.text, "seo-report.html must be noindex"

        sitemap = c.get("/sitemap.xml")
        assert sitemap.status_code == 200
        assert "seo-report.html" not in sitemap.text, "utility report must not be listed in the sitemap"
