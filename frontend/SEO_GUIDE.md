# Arcturus SEO Update Guide

All editable technical SEO settings live in one file: `seo.config.json`.

## Update a page

1. Open `seo.config.json`.
2. Find the page by its `path`.
3. Update the title, description, H1 reference, canonical, schema types, last-modified date, change frequency, or sitemap priority.
4. Keep titles below 60 characters and descriptions between 150 and 160 characters.
5. Run `yarn seo:audit` from the frontend directory.

The audit regenerates:

- `public/sitemap.xml`
- `public/robots.txt`
- `public/seo-report.html`
- `SEO_REPORT.md`

The production build runs the same audit automatically and stops if a title, description, path, canonical, schema selection, or H1 reference is missing or duplicated.

## Add a page

Add one page object to `seo.config.json`, create its visible route, and link it from the normal website navigation. The sitemap, development SSR route list, prerender list, and SEO report are generated from the configuration.

Do not add `noindex` to a commercial or informational page that should appear in search. Set `indexable` to `false` only for utility pages that should not be indexed.
