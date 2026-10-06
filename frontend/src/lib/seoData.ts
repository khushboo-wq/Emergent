import { CANONICAL_BASE, CONTACT_EMAIL, getService, orderedServices, servicePageExtras } from "@/lib/site";

export interface SeoData {
  path: string;
  title: string;
  description: string;
  type: "website" | "article";
  schema: Record<string, unknown>;
}

const sameAs = ["https://www.linkedin.com/in/khushboo-tomar", "https://www.instagram.com/arcturusprofessional"];
const person = { "@type": "Person", name: "Khushboo Tomar", jobTitle: "Independent Freelancer", email: CONTACT_EMAIL, address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" }, areaServed: ["Ireland", "United Kingdom", "Europe"], sameAs };
const organization = { "@type": "Organization", name: "Arcturus Professional Services", url: CANONICAL_BASE, founder: person, email: CONTACT_EMAIL, sameAs };

const staticSeo: Record<string, Omit<SeoData, "path">> = {
  "/": { title: "Freelance LinkedIn & Email Outreach Support | Arcturus", description: "Independent freelancer helping Irish and UK businesses with LinkedIn management, email outreach, lead generation and AI videos. Written-only communication.", type: "website", schema: { "@context": "https://schema.org", "@graph": [organization, person, { "@type": "WebSite", name: "Arcturus Professional Services", url: CANONICAL_BASE }] } },
  "/services": { title: "Freelance B2B Support Services | Arcturus", description: "Explore six freelance services for Irish and UK businesses: LinkedIn management, email outreach, business support, lead research, AI video and email setup.", type: "website", schema: { "@context": "https://schema.org", "@type": "ItemList", name: "Arcturus Professional Services", itemListElement: orderedServices.map((service, index) => ({ "@type": "ListItem", position: index + 1, url: `${CANONICAL_BASE}/services/${service.slug}`, name: service.title })) } },
  "/about": { title: "About Khushboo Tomar | Independent Freelancer", description: "Meet Khushboo Tomar, a New Delhi freelancer with 12 years in B2B outreach, lead generation and email deliverability for UK, Irish and European businesses.", type: "website", schema: { "@context": "https://schema.org", "@graph": [organization, person, { "@type": "AboutPage", name: "About Khushboo Tomar", url: `${CANONICAL_BASE}/about`, mainEntity: person }] } },
  "/how-i-work": { title: "How I Work | Process, Payment & Communication", description: "A clear freelance process with 100% upfront payment, written communication, documented onboarding and regular reporting for every agreed service in writing.", type: "article", schema: { "@context": "https://schema.org", "@type": "WebPage", name: "How I Work", url: `${CANONICAL_BASE}/how-i-work`, about: person } },
  "/contact": { title: "Contact Arcturus | Written Enquiries Only", description: "Send Khushboo Tomar a written enquiry by secure contact form, email or WhatsApp. I reply in writing and do not offer phone or call-booking appointments.", type: "website", schema: { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact Arcturus Professional Services", url: `${CANONICAL_BASE}/contact`, mainEntity: person } },
  "/privacy-policy": { title: "Privacy Policy | Arcturus Professional Services", description: "Read how Arcturus Professional Services handles contact enquiries, business information and website data for visitors in Ireland, the UK and Europe clearly.", type: "article", schema: { "@context": "https://schema.org", "@type": "WebPage", name: "Privacy Policy", url: `${CANONICAL_BASE}/privacy-policy` } },
  "/terms": { title: "Terms of Service | Arcturus Professional Services", description: "Read the standard service terms for Arcturus Professional Services, including written scope, payment, client responsibilities, delivery and limitations.", type: "article", schema: { "@context": "https://schema.org", "@type": "WebPage", name: "Terms of Service", url: `${CANONICAL_BASE}/terms` } },
};

export const PRERENDER_ROUTES = ["/", "/services", ...orderedServices.map((service) => `/services/${service.slug}`), "/about", "/how-i-work", "/contact", "/privacy-policy", "/terms"];

export function getSeoForPath(path: string): SeoData {
  const cleanPath = path !== "/" ? path.replace(/\/$/, "") : path;
  const service = cleanPath.startsWith("/services/") ? getService(cleanPath.split("/").pop()) : undefined;
  if (service) {
    const extras = servicePageExtras[service.slug];
    const priceValue = service.price.match(/[\d.]+/)?.[0] ?? "0";
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Service", name: service.title, description: service.metaDescription, url: `${CANONICAL_BASE}${cleanPath}`, provider: organization, areaServed: ["Ireland", "United Kingdom", "Europe"], offers: { "@type": "Offer", price: priceValue, priceCurrency: "EUR", description: service.price } },
        { "@type": "FAQPage", mainEntity: extras.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      ],
    };
    return { path: cleanPath, title: service.metaTitle, description: service.metaDescription, type: "website", schema };
  }
  const entry = staticSeo[cleanPath] ?? staticSeo["/"];
  return { path: cleanPath, ...entry };
}

export function renderSeoHead(seo: SeoData): string {
  const canonical = `${CANONICAL_BASE}${seo.path === "/" ? "/" : seo.path}`;
  const escapedSchema = JSON.stringify(seo.schema).replace(/</g, "\\u003c");
  const attr = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  return [
    `<title>${attr(seo.title)}</title>`,
    `<meta name="description" content="${attr(seo.description)}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:title" content="${attr(seo.title)}">`,
    `<meta property="og:description" content="${attr(seo.description)}">`,
    `<meta property="og:type" content="${seo.type}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:site_name" content="Arcturus Professional Services">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${attr(seo.title)}">`,
    `<meta name="twitter:description" content="${attr(seo.description)}">`,
    `<script id="arcturus-structured-data" type="application/ld+json">${escapedSchema}</script>`,
  ].join("\n    ");
}