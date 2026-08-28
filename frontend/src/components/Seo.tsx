import { useEffect } from "react";
import { CANONICAL_BASE, SITE_NAME } from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  structuredData?: Record<string, unknown>;
}

export default function Seo({ title, description, path, structuredData }: SeoProps) {
  useEffect(() => {
    document.title = title;
    const canonicalUrl = `${CANONICAL_BASE}${path}`;
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setMeta("description", description);
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:type", "website");
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const jsonLdId = "arcturus-structured-data";
    document.getElementById(jsonLdId)?.remove();
    const script = document.createElement("script");
    script.id = jsonLdId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(
      structuredData ?? {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: SITE_NAME,
        email: "khushboo@arcturusprofessional.com",
        areaServed: "Europe",
        url: canonicalUrl,
        description,
      },
    );
    document.head.appendChild(script);
    return () => document.getElementById(jsonLdId)?.remove();
  }, [description, path, structuredData, title]);

  return null;
}
