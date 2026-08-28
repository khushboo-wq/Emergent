# Arcturus Professional Services

## What it does
Static, SEO-focused professional services website for European businesses. It explains four service offerings and turns visitors into written email enquiries. No accounts, payments, enquiry backend, analytics, cookies, or admin dashboard are part of the MVP.

## Routes
- `/` home value proposition, service pillars, principles, process, and Contact Khushboo CTA
- `/about` positioning, Khushboo introduction, communication standards, and working expectations
- `/services` service catalogue
- `/services/linkedin-management`
- `/services/email-outreach`
- `/services/business-support`
- `/services/ai-video-creation`
- `/contact` direct `mailto:khushboo@arcturusprofessional.com` enquiry flow

## Content model
Service content is manually maintained in `frontend/src/lib/site.ts`. Each service has a slug, overview, audience, inclusions, exclusions, process, timeline, requirements, metadata, and pricing label. Pricing is currently `Pricing on request`; exact PDF-derived prices, currency, availability, and legal/privacy wording need owner approval because the supplied PDF was unavailable in this run.

## Key flow
Visitor lands on Home → opens a service detail page → reviews scope, inclusions, exclusions, process, timeline, and requirements → clicks a service-specific or general Contact Khushboo CTA → their email client opens a prefilled mailto draft.

## SEO
Dynamic document title, description, canonical, and JSON-LD are set by `Seo.tsx`; static `robots.txt` and `sitemap.xml` are in `frontend/public`. Canonical base is `https://arcturusprofessional.com`.

## Design
Warm architectural light theme with deep navy surfaces, amber details, Lora headings, Plus Jakarta Sans body text, and JetBrains Mono labels. Responsive sticky navigation includes a mobile sheet menu. External editorial images have alt text and hide gracefully if unavailable.