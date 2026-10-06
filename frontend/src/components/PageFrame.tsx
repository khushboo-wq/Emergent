import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

interface PageFrameProps {
  children: ReactNode;
}

export default function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="min-h-svh bg-[#faf9f6] text-[#0f172a]" data-testid="page-frame">
      <SiteHeader />
      <main className="page-enter">{children}</main>
      <SiteFooter />
    </div>
  );
}
