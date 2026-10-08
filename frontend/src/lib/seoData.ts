import seoConfigJson from "../../seo.config.json";
import { CONTACT_EMAIL, getService, orderedServices, servicePageExtras } from "@/lib/site";
import { getResource, resources } from "@/lib/resources";

interface SeoPageConfig {
  path: string;
  title: string;
  description: string;
  h1: string;
  canonical: string;
  indexable: boolean;
  ogType: "website" | "article" | "profile";
  schemaTypes: string[];
  serviceSlug?: string;
  resourceSlug?: string;
  changeFrequency: string;
  priority: number;
  lastModified: string;
}

interface SeoConfig {
  site: {
    name: string;
    baseUrl: string;
    language: string;
    locale: string;
    author: string;
    email: string;
    socialImage: string;
    socialImageAlt: string;
    allowedBots: string[];
  };
  redirects: Record<string, string>;
  pages: SeoPageConfig[];
}

export interface SeoData extends SeoPageConfig {
  type: "website" | "article" | "profile";
  schema: Record<string, unknown>;
  socialImage: string;
  socialImageAlt: string;
}

export const seoConfig = seoConfigJson as SeoConfig;
const { site } = seoConfig;
const sameAs = ["https://www.linkedin.com/in/khushboo-tomar", "https://www.instagram.com/arcturusprofessional"];
const serviceTypes = ["LinkedIn Management", "Email Outreach", "Lead Generation", "Business Support", "Email Setup", "AI Video Creation"];
const personId = `${site.baseUrl}/#khushboo-tomar`;
const businessId = `${site.baseUrl}/#professional-service`;
const person = { "@type": "Person", "@id": personId, name: "Khushboo Tomar", jobTitle: "Independent Freelancer", email: CONTACT_EMAIL, address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" }, areaServed: ["Ireland", "United Kingdom", "Europe"], sameAs, knowsAbout: ["LinkedIn management", "B2B email outreach", "B2B lead generation", "business support", "business email setup", "AI video creation"] };
const professionalService = { "@type": ["Organization", "ProfessionalService"], "@id": businessId, name: site.name, url: site.baseUrl, logo: site.socialImage, image: site.socialImage, founder: { "@id": personId }, email: CONTACT_EMAIL, address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" }, areaServed: ["Ireland", "United Kingdom", "Europe"], sameAs, contactPoint: { "@type": "ContactPoint", email: CONTACT_EMAIL, telephone: "+91 99112 84362", contactType: "customer enquiries", availableLanguage: "English" }, serviceType: serviceTypes, hasOfferCatalog: { "@type": "OfferCatalog", name: "Arcturus Services", itemListElement: orderedServices.map((entry, index) => ({ "@type": "Offer", position: index + 1, name: entry.title, url: `${site.baseUrl}/services/${entry.slug}`, price: entry.price.match(/[0-9.]+/)?.[0] ?? undefined, priceCurrency: "EUR" })) } };

export const PRERENDER_ROUTES = seoConfig.pages.map((page) => page.path);

function schemaForPage(page: SeoPageConfig): Record<string, unknown> {
  const service = page.serviceSlug ? getService(page.serviceSlug) : undefined;
  const resource = page.resourceSlug ? getResource(page.resourceSlug) : undefined;
  if (resource) {
    const article = {
      "@type": "Article",
      "@id": `${page.canonical}#article`,
      headline: resource.title,
      description: page.description,
      url: page.canonical,
      datePublished: resource.published,
      dateModified: resource.updated,
      author: { "@id": personId },
      publisher: { "@id": businessId },
      articleSection: resource.category,
      keywords: resource.keywords,
      mainEntityOfPage: { "@id": `${page.canonical}#webpage` }
    };
    return {
      "@context": "https://schema.org",
      "@graph": [
        professionalService,
        article,
        { "@type": "WebPage", "@id": `${page.canonical}#webpage`, url: page.canonical, name: page.title, description: page.description, isPartOf: { "@id": `${site.baseUrl}/#website` } },
        { "@type": "BreadcrumbList", "@id": `${page.canonical}#breadcrumbs`, itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${site.baseUrl}/resources` },
          { "@type": "ListItem", position: 3, name: resource.title, item: page.canonical }
        ] }
      ]
    };
  }
  if (service) {
    const extras = servicePageExtras[service.slug];
    const priceValue = service.price.match(/[\d.]+/)?.[0] ?? "0";
    return {
      "@context": "https://schema.org",
      "@graph": [
        professionalService,
        { "@type": "Service", "@id": `${page.canonical}#service`, name: service.slug === "linkedin-management" ? "LinkedIn Management Services" : service.title, description: page.description, url: page.canonical, provider: { "@id": businessId }, areaServed: ["Ireland", "United Kingdom", "Europe"], mainEntityOfPage: { "@id": `${page.canonical}#webpage` }, offers: { "@type": "Offer", price: priceValue, priceCurrency: "EUR", priceSpecification: { "@type": "UnitPriceSpecification", price: priceValue, priceCurrency: "EUR", unitText: service.price.replace(/^€\s?[\d.,]+\s*\/?\s*/, "") || "service" }, description: service.price, url: page.canonical, availability: "https://schema.org/InStock" } },
        { "@type": "FAQPage", "@id": `${page.canonical}#faq`, mainEntity: extras.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
        { "@type": "BreadcrumbList", "@id": `${page.canonical}#breadcrumbs`, itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.baseUrl}/services` },
          { "@type": "ListItem", position: 3, name: service.title, item: page.canonical },
        ] },
      ],
    };
  }

  const webPage = { "@type": page.path === "/about" ? "AboutPage" : page.path === "/contact" ? "ContactPage" : page.path === "/services" || page.path === "/resources" ? "CollectionPage" : "WebPage", "@id": `${page.canonical}#webpage`, url: page.canonical, name: page.title, description: page.description, isPartOf: { "@id": `${site.baseUrl}/#website` } };
  const graph: Record<string, unknown>[] = [webPage];
  if (page.schemaTypes.includes("ProfessionalService")) graph.unshift(professionalService);
  if (page.schemaTypes.includes("Person")) graph.push(person);
  if (page.path === "/") graph.push({ "@type": "WebSite", "@id": `${site.baseUrl}/#website`, name: site.name, alternateName: "Arcturus", url: `${site.baseUrl}/`, publisher: { "@id": businessId }, inLanguage: site.language });
  if (page.path === "/services") graph.push({ "@type": "ItemList", name: "Arcturus Professional Services", itemListElement: orderedServices.map((entry, index) => ({ "@type": "ListItem", position: index + 1, url: `${site.baseUrl}/services/${entry.slug}`, name: entry.title })) });
  if (page.path === "/resources") graph.push({ "@type": "ItemList", name: "LinkedIn Management Resources", itemListElement: resources.map((entry, index) => ({ "@type": "ListItem", position: index + 1, url: `${site.baseUrl}/resources/${entry.slug}`, name: entry.title })) });
  return { "@context": "https://schema.org", "@graph": graph };
}

export function getSeoForPath(path: string): SeoData {
  const cleanPath = path !== "/" ? path.replace(/\/$/, "") : path;
  const page = seoConfig.pages.find((entry) => entry.path === cleanPath) ?? seoConfig.pages.find((entry) => entry.path === "/404") ?? seoConfig.pages[0];
  return { ...page, type: page.ogType, schema: schemaForPage(page), socialImage: site.socialImage, socialImageAlt: site.socialImageAlt };
}

export function renderSeoHead(seo: SeoData): string {
  const escapedSchema = JSON.stringify(seo.schema).replace(/</g, "\\u003c");
  const attr = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  return [
    `<title>${attr(seo.title)}</title>`,
    `<meta name="description" content="${attr(seo.description)}">`,
    `<meta name="author" content="${attr(site.author)}">`,
    `<meta name="robots" content="${seo.indexable ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" : "noindex, follow"}">`,
    `<link rel="canonical" href="${seo.canonical}">`,
    `<link rel="alternate" hreflang="en" href="${seo.canonical}">`,
    `<link rel="alternate" hreflang="x-default" href="${seo.canonical}">`,
    `<meta property="og:title" content="${attr(seo.title)}">`,
    `<meta property="og:description" content="${attr(seo.description)}">`,
    `<meta property="og:type" content="${seo.type}">`,
    `<meta property="og:url" content="${seo.canonical}">`,
    `<meta property="og:site_name" content="${attr(site.name)}">`,
    `<meta property="og:locale" content="${site.locale}">`,
    `<meta property="og:image" content="${seo.socialImage}">`,
    `<meta property="og:image:width" content="1024">`,
    `<meta property="og:image:height" content="1024">`,
    `<meta property="og:image:alt" content="${attr(seo.socialImageAlt)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${attr(seo.title)}">`,
    `<meta name="twitter:description" content="${attr(seo.description)}">`,
    `<meta name="twitter:image" content="${seo.socialImage}">`,
    `<meta name="twitter:image:alt" content="${attr(seo.socialImageAlt)}">`,
    `<script id="arcturus-structured-data" type="application/ld+json">${escapedSchema}</script>`,
  ].join("\n    ");
}
