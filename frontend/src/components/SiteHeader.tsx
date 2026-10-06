import { ChevronDown, Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CONTACT_EMAIL, orderedServices } from "@/lib/site";

const logoUrl = "https://customer-assets-wrfwihn1.emergentagent.net/job_khushboo-services/artifacts/60370bb24cb213f1_Arcturus%20White%20Logo.jpg";
const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative whitespace-nowrap py-2 text-[13px] font-semibold transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-1 after:h-[3px] after:rounded-full after:bg-[#f58220] after:transition-transform after:duration-200 ${isActive ? "text-[#20242b] after:scale-x-100" : "text-[#59616d] after:scale-x-0 hover:text-[#20242b] hover:after:scale-x-100"}`;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header sticky top-0 z-50 bg-white/95 shadow-[0_2px_16px_rgba(32,36,43,0.08)] backdrop-blur-md" data-testid="site-header">
      <div className="site-header-inner mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link to="/" className="group flex shrink-0 items-center gap-3" data-testid="nav-logo-link">
          <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-lg border border-[#e7e8ea] bg-white shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5">
            <img src={logoUrl} alt="Arcturus Professional Services logo" width="56" height="56" fetchPriority="high" decoding="async" className="size-full object-contain" data-testid="nav-logo-image" />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-hemicube text-[15px] tracking-[0.1em] text-[#20242b]">ARCTURUS</span>
            <span className="mt-1 text-[10px] font-medium text-[#777f8a]">Professional Services</span>
          </span>
        </Link>

        <nav className="site-desktop-nav hidden items-center gap-7 md:flex" aria-label="Primary navigation" data-testid="desktop-navigation">
          <NavLink to="/" className={navLinkClass} data-testid="nav-link-home">Home</NavLink>
          <div className="group relative" data-testid="services-dropdown">
            <div className="flex items-center gap-1">
              <NavLink to="/services" className={navLinkClass} data-testid="nav-link-services">Services</NavLink>
              <ChevronDown className="size-3 text-[#777f8a] transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <div className="services-menu-panel invisible absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-xl border border-[#e1e4e8] bg-white p-2 shadow-[0_20px_50px_-20px_rgba(32,36,43,0.28)]">
                {orderedServices.map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`} className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-[#59616d] transition-colors duration-200 hover:bg-[#fff3e9] hover:text-[#20242b]" data-testid={`nav-service-${service.slug}`}>
                    <span>{service.title}</span><span className="font-mono text-[9px] font-bold text-[#f58220]">{service.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <NavLink to="/about" className={navLinkClass} data-testid="nav-link-about">About</NavLink>
          <NavLink to="/how-i-work" className={navLinkClass} data-testid="nav-link-how-i-work">How I Work</NavLink>
          <NavLink to="/contact" className={navLinkClass} data-testid="nav-link-contact">Contact</NavLink>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://wa.me/919911284362" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-[#59616d] transition-colors hover:text-[#20242b]" aria-label="WhatsApp Arcturus">
            <Phone className="size-4 text-[#25d366]" /> WhatsApp
          </a>
          <Link to="/contact" className="site-contact-button inline-flex h-11 items-center rounded-md bg-[#f58220] px-6 text-xs font-bold text-white shadow-[0_8px_20px_-12px_rgba(245,130,32,0.9)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#dc6f0c]" data-testid="header-contact-button">Get in touch</Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="outline" size="icon" className="size-10 border-[#dfe2e6] bg-white md:hidden" />} data-testid="mobile-menu-button" aria-label="Open navigation"><Menu className="size-5 text-[#20242b]" /></SheetTrigger>
          <SheetContent side="right" className="w-[min(90vw,390px)] overflow-y-auto border-l-[#e1e4e8] bg-white px-6">
            <SheetHeader className="border-b border-[#e1e4e8] pb-5 text-left">
              <SheetTitle className="font-hemicube text-xl text-[#20242b]">ARCTURUS</SheetTitle>
              <p className="text-[11px] text-[#777f8a]">{CONTACT_EMAIL}</p>
            </SheetHeader>
            <nav className="mt-6 flex flex-col" aria-label="Mobile navigation" data-testid="mobile-navigation">
              <NavLink to="/" onClick={() => setOpen(false)} className="border-b border-[#e7e8ea] py-4 text-lg font-bold text-[#20242b]">Home</NavLink>
              <Link to="/services" onClick={() => setOpen(false)} className="border-b border-[#e7e8ea] py-4 text-lg font-bold text-[#20242b]">Services</Link>
              <div className="grid gap-1 border-b border-[#e7e8ea] pb-3 pl-3">
                {orderedServices.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} onClick={() => setOpen(false)} className="py-2 text-sm text-[#59616d]">{service.title}</Link>)}
              </div>
              <NavLink to="/about" onClick={() => setOpen(false)} className="border-b border-[#e7e8ea] py-4 text-lg font-bold text-[#20242b]">About</NavLink>
              <NavLink to="/how-i-work" onClick={() => setOpen(false)} className="border-b border-[#e7e8ea] py-4 text-lg font-bold text-[#20242b]">How I Work</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className="border-b border-[#e7e8ea] py-4 text-lg font-bold text-[#20242b]">Contact</NavLink>
            </nav>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-md bg-[#f58220] text-sm font-bold text-white">Get in touch</Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
