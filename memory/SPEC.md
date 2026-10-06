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
Every route has unique metadata in `frontend/src/lib/seoData.ts`. Vite serves route-specific SSR HTML in development, and the production build prerenders 13 route documents through `entry-server.tsx` and `scripts/prerender.mjs`. Each document includes its own title, 150–160 character description, canonical, Open Graph, Twitter tags, JSON-LD, and full visible page content before hydration. Service schema includes EUR offers, area served, and FAQPage data. Home/About include Organization and Person; Contact includes ContactPage. `robots.txt` explicitly allows named AI/search crawlers, `llms.txt` gives a citation-ready business summary, and the build generates `sitemap.xml` from the route list.

## Design
Premium, classy editorial theme inspired by the current Arcturus website. Headings use the live site Hemicube webfont and body copy uses the live site Alesand webfont via the Wix-hosted font assets, with local system fallbacks. Deep navy surfaces, amber details, and JetBrains Mono labels remain part of the visual system. The desktop header has separate tabs for About, Services, LinkedIn, Email, Business Support, AI Video, and Contact. Responsive navigation includes a mobile sheet menu. External editorial images have alt text and hide gracefully if unavailable.

## Source and deployment note
PDF-derived service copy is based on `APS.pdf`, including the confirmed prices and delivery details. The existing preview remains the development host. A custom domain is not made independent by code alone; it must be pointed at a deployed production build or hosting target so preview sleeping does not affect the live domain.