import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { classifyOutboundLink, getGtmId, loadGoogleTagManager, pushDataLayer, trackPageView } from "@/lib/tracking";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const gtmId = getGtmId();
    if (gtmId) loadGoogleTagManager(gtmId);

    trackPageView(`${location.pathname}${location.search}`, document.title);

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.href;
      const kind = classifyOutboundLink(href);
      const label = (anchor.getAttribute("aria-label") || anchor.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120);

      if (kind === "whatsapp") {
        pushDataLayer("whatsapp_click", { link_url: href, link_text: label });
      } else if (kind === "email") {
        pushDataLayer("email_click", { link_url: href, link_text: label });
      } else if (kind === "phone") {
        pushDataLayer("phone_click", { link_url: href, link_text: label });
      } else if (kind === "external") {
        pushDataLayer("outbound_click", { link_url: href, link_text: label });
      }

      if (anchor.dataset.serviceSlug) {
        pushDataLayer("service_click", {
          service_slug: anchor.dataset.serviceSlug,
          service_name: anchor.dataset.serviceName || label,
          page_location: window.location.href,
        });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [location.pathname, location.search]);

  return null;
}
