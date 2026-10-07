export interface ArcturusDataLayerEvent {
  event: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer?: ArcturusDataLayerEvent[];
  }
}

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function pushDataLayer(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  ensureDataLayer().push({ event, ...params });
}

export function trackPageView(path: string, title: string) {
  pushDataLayer("page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

const DEFAULT_GTM_ID = "GTM-56HXSJD6";

export function getGtmId() {
  const configured = import.meta.env.VITE_GTM_ID?.trim();
  const id = configured || DEFAULT_GTM_ID;
  return /^GTM-[A-Z0-9]+$/i.test(id) ? id : null;
}

export function loadGoogleTagManager(containerId: string) {
  if (typeof window === "undefined" || document.getElementById("arcturus-gtm-script")) return;

  const dataLayer = ensureDataLayer();
  dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = "arcturus-gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`;
  document.head.appendChild(script);
}

export function classifyOutboundLink(url: string) {
  try {
    const parsed = new URL(url, window.location.href);
    if (parsed.protocol === "mailto:") return "email";
    if (parsed.protocol === "tel:") return "phone";
    if (parsed.hostname === "wa.me" || parsed.hostname.endsWith("whatsapp.com")) return "whatsapp";
    if (parsed.origin !== window.location.origin) return "external";
    return "internal";
  } catch {
    return "unknown";
  }
}
