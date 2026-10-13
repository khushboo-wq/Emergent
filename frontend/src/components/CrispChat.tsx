import { useEffect } from "react";

const CRISP_WEBSITE_ID = "634c8719-3a82-4359-82af-a70ee129a30f";

type CrispQueue = unknown[][];
declare global {
  interface Window { $crisp?: CrispQueue; CRISP_WEBSITE_ID?: string }
}

/**
 * Crisp live chat. Loaded only in the browser, a few seconds after the page has
 * finished loading, so it never slows down the first paint or the SEO prerender.
 * Visitor messages arrive in the Crisp app on Khushboo's phone; replies go back
 * into the visitor's website chat (and by email if the visitor left one).
 */
export default function CrispChat() {
  useEffect(() => {
    if (typeof window === "undefined" || window.CRISP_WEBSITE_ID) return;
    const start = () => {
      if (window.CRISP_WEBSITE_ID) return;
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;
      window.$crisp.push(["safe", true]);
      window.$crisp.push(["set", "session:segments", [["website"]]]);
      const s = document.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      document.head.appendChild(s);
    };
    const schedule = () => window.setTimeout(start, 3500);
    if (document.readyState === "complete") { const t = schedule(); return () => window.clearTimeout(t); }
    const onLoad = () => schedule();
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return null;
}
