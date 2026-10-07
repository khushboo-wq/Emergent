import { Menu, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CONTACT_EMAIL } from "@/lib/site";
import ServiceTabs from "@/components/ServiceTabs";

const logoUrl = "https://customer-assets-wrfwihn1.emergentagent.net/job_khushboo-services/artifacts/0267e06d60c3c063_Arcturus%20Black%20Logo.jpg";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `luxury-nav-link ${isActive ? "is-active" : ""}`;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header luxury-site-header ${scrolled ? "is-scrolled" : ""}`} data-testid="site-header">
      <div className="luxury-shell luxury-header-inner">
        <Link to="/" className="luxury-brand" data-testid="nav-logo-link">
          <img src={logoUrl} alt="Arcturus Professional Services logo" width="44" height="44" fetchPriority="high" decoding="async" />
          <span><strong>ARCTURUS</strong><small>Professional Services</small></span>
        </Link>

        <nav className="luxury-desktop-nav" aria-label="Primary navigation" data-testid="desktop-navigation">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/how-i-work" className={navLinkClass}>How I work</NavLink>
          <NavLink to="/reporting-compliance" className={navLinkClass}>Reporting & Compliance</NavLink>
          <NavLink to="/resources" className={navLinkClass}>Resources</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        <div className="luxury-header-actions">
          <a className="luxury-header-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <Link to="/contact" className="luxury-header-cta">Get in touch <MessageCircle size={15} /></Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="outline" size="icon" className="luxury-mobile-menu" />} data-testid="mobile-menu-button" aria-label="Open navigation">
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent side="right" className="luxury-mobile-sheet">
            <SheetHeader>
              <SheetTitle>Arcturus</SheetTitle>
              <p>{CONTACT_EMAIL}</p>
            </SheetHeader>
            <nav className="luxury-mobile-nav" aria-label="Mobile navigation" data-testid="mobile-navigation">
              <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
              <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
              <NavLink to="/how-i-work" onClick={() => setOpen(false)}>How I work</NavLink>
              <NavLink to="/reporting-compliance" onClick={() => setOpen(false)}>Reporting & Compliance</NavLink>
              <NavLink to="/resources" onClick={() => setOpen(false)}>Resources</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
            </nav>
            <Link to="/contact" onClick={() => setOpen(false)} className="luxury-mobile-cta">Get in touch</Link>
          </SheetContent>
        </Sheet>
      </div>
      <div className="header-service-rail"><ServiceTabs /></div>
    </header>
  );
}
