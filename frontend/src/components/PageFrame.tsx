import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ContactDock from "@/components/ContactDock";
import AnalyticsUnavailable from "@/components/AnalyticsUnavailable";
import AnalyticsTracker from "@/components/AnalyticsTracker";

interface PageFrameProps {
  children: ReactNode;
}

export default function PageFrame({ children }: PageFrameProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <div className="site-canvas arcturus-commercial arcturus-luxury min-h-svh bg-transparent text-[#20242b]" data-testid="page-frame">
      <a href="#main-content" className="fixed left-4 top-0 z-[60] -translate-y-20 rounded-b-lg bg-[#0f2942] px-4 py-3 text-sm font-semibold text-white transition-transform duration-200 focus:translate-y-0" data-testid="skip-navigation-link">Skip to main content</a>
      <SiteHeader />
      <AnalyticsTracker />
      <main id="main-content" tabIndex={-1} className="page-enter">{children}</main>
      <AnalyticsUnavailable />
      <SiteFooter />
      <ContactDock />
    </div>
  );
}
