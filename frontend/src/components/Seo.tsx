import { useEffect } from "react";
import { CANONICAL_BASE } from "@/lib/site";
import { getSeoForPath } from "@/lib/seoData";

interface SeoProps {
  path: string;
  title?: string;
  description?: string;
  structuredData?: Record<string, unknown>;
}

export default function Seo({ path }: SeoProps) {
  useEffect(() => {
    const seo = getSeoForPath(path);
    const canonicalUrl = `${CANONICAL_BASE}${seo.path === "/" ? "/" : seo.path}`;
    document.title = seo.title;

    const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setMeta('meta[name="description"]', "name", "description", seo.description);
    setMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    setMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    setMeta('meta[property="og:type"]', "property", "og:type", seo.type);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Arcturus Professional Services");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const scriptId = "arcturus-structured-data";
    document.getElementById(scriptId)?.remove();
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(seo.schema);
    document.head.appendChild(script);
  }, [path]);

  return null;
}
