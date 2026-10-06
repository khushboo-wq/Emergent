import { ChevronDown, Menu, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CONTACT_EMAIL, orderedServices } from "@/lib/site";

const logoUrl = "https://customer-assets-wrfwihn1.emergentagent.net/job_khushboo-services/artifacts/60370bb24cb213f1_Arcturus%20White%20Logo.jpg";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `commercial-nav-link ${isActive ? "is-active" : ""}`;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header commercial-header" data-testid="site-header">
      <div className="commercial-container commercial-header-inner">
        <Link to="/" className="commercial-brand" data-testid="nav-logo-link">
          <span className="commercial-logo-wrap">
            <img src={logoUrl} alt="Arcturus Professional Services logo" width="52" height="52" fetchPriority="high" decoding="async" />
          </span>
          <span className="commercial-brand-text">
            <strong>ARCTURUS</strong>
            <small>Professional Services</small>
          </span>
        </Link>

        <nav className="commercial-desktop-nav" aria-label="Primary navigation" data-testid="desktop-navigation">
          <NavLink to="/" className={navLinkClass} data-testid="nav-link-home">Home</NavLink>
          <div className="commercial-services-nav">
            <NavLink to="/services" className={navLinkClass} data-testid="nav-link-services">Services <ChevronDown size={14} /></NavLink>
            <div className="commercial-services-dropdown">
              {orderedServices.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} data-testid={`nav-service-${service.slug}`}>
                  <span>{service.title}</span><small>{service.price}</small>
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/about" className={navLinkClass} data-testid="nav-link-about">About</NavLink>
          <NavLink to="/how-i-work" className={navLinkClass} data-testid="nav-link-how-i-work">How I Work</NavLink>
          <NavLink to="/contact" className={navLinkClass} data-testid="nav-link-contact">Contact</NavLink>
        </nav>

        <Link to="/contact" className="commercial-header-cta" data-testid="header-contact-button">Get in touch <MessageCircle size={16} /></Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="outline" size="icon" className="commercial-mobile-menu" />} data-testid="mobile-menu-button" aria-label="Open navigation">
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent side="right" className="commercial-mobile-sheet">
            <SheetHeader>
              <SheetTitle>Arcturus</SheetTitle>
              <p>{CONTACT_EMAIL}</p>
            </SheetHeader>
            <nav className="commercial-mobile-nav" aria-label="Mobile navigation" data-testid="mobile-navigation">
              <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
              <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
              <div className="commercial-mobile-services">
                {orderedServices.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} onClick={() => setOpen(false)}>{service.title}</Link>)}
              </div>
              <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/how-i-work" onClick={() => setOpen(false)}>How I Work</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
            </nav>
            <Link to="/contact" onClick={() => setOpen(false)} className="commercial-mobile-cta">Get in touch</Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
