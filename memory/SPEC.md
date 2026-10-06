# Arcturus Professional Services

## What it does
Static, SEO-focused professional services website for European businesses. It explains four core service offerings plus two PDF-listed supporting services and turns visitors into written email enquiries. No accounts, payment processing, enquiry backend, analytics, cookies, or admin dashboard are part of the MVP.

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
- `/contact` direct `mailto:khushboo@arcturusprofessional.com` enquiry flow
- Common retained Wix paths redirect to the new clean URLs (`/about-us`, `/our-services`, `/contact-us`, legacy service paths, and `/home`).

## Content model
Service content is manually maintained in `frontend/src/lib/site.ts`. Each service has a slug, overview, audience, inclusions, exclusions, process, timeline, requirements, metadata, tools, and PDF-confirmed pricing. Confirmed figures are LinkedIn Management €400/month, Email Outreach €450/month, Lead Generation €0.80/verified business contact, Email Setup €80 one-time, Business Support €12/hour, and AI Video Creation €400/month. Legal/privacy copy remains neutral: the PDF states GDPR/PECR awareness and confidentiality, but the website does not claim certification or guaranteed compliance. Third-party tool costs are called out as separate where stated.

## Key flow
Visitor lands on Home → opens a service detail page or uses the Service Fit Guide on Services/Contact → reviews scope, inclusions, exclusions, process, timeline, requirements, and pricing → clicks a service-specific or general Contact Khushboo CTA → their email client opens a prefilled mailto draft.

## SEO
Dynamic document title, description, canonical, and JSON-LD are set by `Seo.tsx`; static `robots.txt` and `sitemap.xml` are in `frontend/public`. Canonical base is `https://arcturusprofessional.com`.

## Design
Premium, classy editorial theme inspired by the current Arcturus website. Headings use the live site Hemicube webfont and body copy uses the live site Alesand webfont via the Wix-hosted font assets, with local system fallbacks. Deep navy surfaces, amber details, and JetBrains Mono labels remain part of the visual system. The desktop header has separate tabs for About, Services, LinkedIn, Email, Business Support, AI Video, and Contact. Responsive navigation includes a mobile sheet menu. External editorial images have alt text and hide gracefully if unavailable.

## Source and deployment note
PDF-derived service copy is based on `APS.pdf`, including the confirmed prices and delivery details. The existing preview remains the development host. A custom domain is not made independent by code alone; it must be pointed at a deployed production build or hosting target so preview sleeping does not affect the live domain.