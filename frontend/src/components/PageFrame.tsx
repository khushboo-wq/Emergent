import type { ReactNode } from "react";
import { useEffect } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ContactDock from "@/components/ContactDock";
import AnalyticsUnavailable from "@/components/AnalyticsUnavailable";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import RouteScrollManager from "@/components/RouteScrollManager";

interface PageFrameProps {
  children: ReactNode;
}

export default function PageFrame({ children }: PageFrameProps) {
  useEffect(() => {
    const root = document.getElementById("main-content");
    if (!root) return;
    const nodes = Array.from(root.children).filter((node): node is HTMLElement =>
      node instanceof HTMLElement && ["SECTION", "ARTICLE", "DIV"].includes(node.tagName)
    );
    nodes.forEach((node) => node.classList.add("scroll-section"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      nodes.forEach((node) => node.classList.add("is-inview"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-inview");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-canvas arcturus-commercial arcturus-luxury min-h-svh bg-transparent text-[#20242b]" data-testid="page-frame">
      <a href="#main-content" className="fixed left-4 top-0 z-[60] -translate-y-20 rounded-b-lg bg-[#0f2942] px-4 py-3 text-sm font-semibold text-white transition-transform duration-200 focus:translate-y-0" data-testid="skip-navigation-link">Skip to main content</a>
      <SiteHeader />
      <RouteScrollManager />
      <AnalyticsTracker />
      <main id="main-content" tabIndex={-1} className="page-enter">{children}</main>
      <AnalyticsUnavailable />
      <SiteFooter />
      <ContactDock />
    </div>
  );
}
