import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CONTACT_EMAIL, getContactHref } from "@/lib/site";

const navItems = [
  { label: "About", to: "/about", testId: "nav-link-about" },
  { label: "Services", to: "/services", testId: "nav-link-services" },
  { label: "LinkedIn", to: "/services/linkedin-management", testId: "nav-link-linkedin" },
  { label: "Email", to: "/services/email-outreach", testId: "nav-link-email" },
  { label: "Business Support", to: "/services/business-support", testId: "nav-link-business-support" },
  { label: "AI Video", to: "/services/ai-video-creation", testId: "nav-link-ai-video" },
  { label: "Contact", to: "/contact", testId: "nav-link-contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#e2dfd8]/85 bg-[#faf9f6]/90 backdrop-blur-xl" data-testid="site-header">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" data-testid="nav-logo-link">
          <span className="grid size-9 place-items-center rounded-full bg-[#0f2942] text-sm font-semibold text-white transition-transform duration-200 group-hover:rotate-6" aria-hidden="true">A</span>
          <span className="flex flex-col leading-none" data-testid="nav-brand-name">
            <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-[#c59b27]">ARCTURUS</span>
            <span className="mt-1 font-sans text-[11px] text-[#475569]">Professional Services</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:gap-5 md:flex" aria-label="Primary navigation" data-testid="desktop-navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={item.testId}
              className={({ isActive }) => `relative whitespace-nowrap py-2 text-xs font-semibold transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-[#c59b27] after:transition-transform after:duration-200 ${isActive ? "text-[#0f2942] after:scale-x-100" : "text-[#475569] after:scale-x-0 hover:text-[#0f2942] hover:after:scale-x-100"}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button render={<a href={getContactHref()} />} size="lg" className="h-10 rounded-md bg-[#0f2942] px-4 text-xs font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-[#1e3a5f]" data-testid="header-contact-button">
            Contact Khushboo <ArrowUpRight className="ml-1 size-4" />
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="outline" size="icon" className="size-10 border-[#e2dfd8] md:hidden" />} data-testid="mobile-menu-button" aria-label="Open navigation">
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(88vw,360px)] border-l-[#e2dfd8] bg-[#faf9f6] px-6">
            <SheetHeader className="border-b border-[#e2dfd8] pb-5 text-left">
              <SheetTitle className="font-serif text-2xl font-medium text-[#0f172a]" data-testid="mobile-menu-title">Arcturus</SheetTitle>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748b]" data-testid="mobile-menu-email">{CONTACT_EMAIL}</p>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile navigation" data-testid="mobile-navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-${item.testId}`}
                  className="border-b border-[#e2dfd8] py-4 font-serif text-2xl text-[#0f2942] transition-colors duration-200 hover:text-[#c59b27]"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <Button render={<a href={getContactHref()} />} className="mt-8 h-12 w-full bg-[#0f2942] text-white hover:bg-[#1e3a5f]" data-testid="mobile-contact-button">
              Contact Khushboo <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
