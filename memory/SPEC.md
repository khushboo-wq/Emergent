# Arcturus Professional Services

## What it does
Static-prerendered, SEO-focused professional services website for Irish, UK, and European businesses. It presents six services in Khushboo Tomar's first-person voice and turns visitors into written enquiries. No accounts, payment processing, analytics, cookies, admin dashboard, phone calls, or call-booking flows are part of the site.

## Routes
- `/` home value proposition, service pillars, principles, process, and Contact Khushboo CTA
- `/about` positioning, Khushboo introduction, communication standards, and working expectations
- `/services` service catalogue
- `/services/linkedin-management`
- `/services/email-outreach`
- `/services/business-support`
- `/services/ai-video-creation`
- `/services/lead-generation`
- `/services/email-setup`
- `/how-i-work` onboarding, upfront payment, written communication, reporting, and B2B data approach
- `/contact` managed contact form plus email, WhatsApp, LinkedIn, and Instagram details
- `/privacy-policy` standard enquiry and website data policy
- `/terms` standard service, payment, delivery, responsibility, and limitation terms
- Common retained Wix paths redirect to the new clean URLs (`/about-us`, `/our-services`, `/contact-us`, legacy service paths, and `/home`).

## Content model
Service content is manually maintained in `frontend/src/lib/site.ts`. Each service has a slug, overview, audience, inclusions, exclusions, process, timeline, requirements, metadata, tools, and PDF-confirmed pricing. Confirmed figures are LinkedIn Management €400/month, Email Outreach €450/month, Lead Generation €0.80/verified business contact, Email Setup €80 one-time, Business Support €12/hour, and AI Video Creation €400/month. Legal/privacy copy remains neutral: the PDF states GDPR/PECR awareness and confidentiality, but the website does not claim certification or guaranteed compliance. Third-party tool costs are called out as separate where stated.

## Key flow
Visitor lands on Home → opens a service detail page or uses the Service Fit Guide → reviews the summary, inclusions, audience, process, plain-text pricing, reporting, FAQ, and related services → opens Contact → sends a written form enquiry or uses email/WhatsApp.

## Contact delivery
`POST /api/contact` accepts name, email, company, service, and message through matching Pydantic and TypeScript interfaces. It uses Emergent's managed Resend proxy with a fixed owner recipient (`khushboo@arcturusprofessional.com`), fixed subject, escaped server-side HTML template, Arcturus sender display name, and owner reply-to. No request can choose the recipient, subject, or email HTML.

## SEO
All editable technical SEO settings now live in `frontend/seo.config.json`, including page paths, titles, 150–160 character descriptions, H1 references, canonicals, indexability, schema selections, sitemap dates, change frequency, and priority. `frontend/SEO_GUIDE.md` explains the no-code configuration workflow.

Vite serves route-specific SSR HTML in development, and the production build prerenders every indexable route through `entry-server.tsx` and `scripts/prerender.mjs`. Each document includes its own title, description, index/follow robots directive, canonical, English and x-default alternates, Open Graph image metadata, Twitter/X image metadata, JSON-LD, and full visible page content before hydration. Service schema includes an EUR Offer, area served, FAQPage, and BreadcrumbList. Home and About include Organization/ProfessionalService and Person data; Contact includes ContactPage.

`yarn seo:audit` runs `scripts/generate-seo.mjs`, validates unique paths, titles and descriptions, title and description lengths, H1 references, canonicals, indexability, and schema selection, then regenerates `public/sitemap.xml`, `public/robots.txt`, `public/seo-report.html`, and `frontend/SEO_REPORT.md`. The production build runs this audit first and then verifies the rendered H1/H2 structure, image alt attributes, canonical, indexability, social metadata, and JSON-LD for every prerendered page. `llms.txt` remains the citation-ready AI summary.

The browser-readable SEO checklist is available at `/seo-report.html` and is intentionally noindex because it is a utility report, not a customer page. Important public pages remain indexable and are generated into the sitemap automatically.

## Completion additions
Every public page includes a fixed accessible quick-contact dock with official WhatsApp, email, LinkedIn, and Instagram icons. On desktop each solid-colour button expands on hover or keyboard focus to reveal its label; on mobile the controls remain compact and include accessible labels. The footer uses the same recognisable social icons with targeted hover feedback. No tracking is attached to these links.

PageFrame includes a keyboard-accessible skip-to-content link. Unknown HTML routes now return a rendered, noindex 404 page with useful navigation rather than a soft-404 blank shell. The editable `redirects` object in `frontend/seo.config.json` drives HTTP 301 responses in the Vite server and generates `public/_redirects` for supported static hosts, while the existing client redirects remain as a fallback.

## Design
Premium editorial corporate design with warm ivory and cream surfaces, deep navy authority panels, cobalt, muted lavender, and muted teal accents. The design uses only solid colours, layered rounded panels, arches, asymmetric grids, realistic soft shadows, and generous whitespace. Hemicube is reserved for prominent headings, Alesand Extra Bold for prices and short labels, and Plus Jakarta Sans for readable paragraphs and forms. Motion uses short page, panel, dropdown, hover, and button transitions with a reduced-motion override.

The approved black logo asset is used unchanged on the light header and the approved white logo asset is used unchanged on the navy footer. Neither asset is filtered, recoloured, distorted, or internally animated. External editorial images have descriptive alt text and hide gracefully if unavailable.

The About page publishes the approved first-person Khushboo Tomar story, background since 2014, six-service summary, written-only working model, data and compliance approach, service boundaries, modern AI tools, and Contact me CTA. Service FAQs match the approved wording and continue to feed both visible page text and FAQPage JSON-LD.

## Source and deployment note
PDF-derived service copy is based on `APS.pdf`, including the confirmed prices and delivery details. The existing preview remains the development host. A custom domain is not made independent by code alone; it must be pointed at a deployed production build or hosting target so preview sleeping does not affect the live domain.