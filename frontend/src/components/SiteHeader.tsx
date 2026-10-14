import { ArrowUpRight, Mail, Menu, MessageCircle } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CONTACT_EMAIL, WHATSAPP_LINK } from "@/lib/site";
import ServiceTabs from "@/components/ServiceTabs";
import BrandLogo from "@/components/BrandLogo";


const mobileLinks: Array<[string, string]> = [
  ["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/pricing", "Pricing"], ["/contact", "Contact"],
];
const mobileMore: Array<[string, string]> = [
  ["/how-i-work", "How I work"], ["/reporting-compliance", "Reporting & Compliance"], ["/resources", "Resources"], ["/faq", "FAQ"],
];

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
          <BrandLogo size={46} />
        </Link>

        <nav className="luxury-desktop-nav" aria-label="Primary navigation" data-testid="desktop-navigation">
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
        </nav>

        <div className="luxury-header-actions">
          <a className="luxury-header-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <Link to="/contact" className="luxury-header-cta">Contact <MessageCircle size={15} /></Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="outline" size="icon" className="luxury-mobile-menu" />} data-testid="mobile-menu-button" aria-label="Open navigation">
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent side="right" className="luxury-mobile-sheet arc-menu" showCloseButton>
            <SheetHeader className="arc-menu-head">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Link to="/" onClick={() => setOpen(false)} className="arc-menu-logo" aria-label="Arcturus home"><BrandLogo size={40} light /></Link>
            </SheetHeader>
            <nav className="luxury-mobile-nav arc-menu-nav" aria-label="Mobile navigation" data-testid="mobile-navigation">
              {mobileLinks.map(([to, label], i) => (
                <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)} style={{ "--i": i } as CSSProperties}>
                  <span className="arc-menu-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="arc-menu-label">{label}</span>
                  <ArrowUpRight className="arc-menu-arrow" size={18} aria-hidden="true" />
                </NavLink>
              ))}
            </nav>
            <div className="arc-menu-more" style={{ "--i": mobileLinks.length } as CSSProperties}>
              {mobileMore.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
            </div>
            <div className="arc-menu-foot" style={{ "--i": mobileLinks.length + 1 } as CSSProperties}>
              <Link to="/contact" onClick={() => setOpen(false)} className="luxury-mobile-cta">Get in touch <MessageCircle size={16} /></Link>
              <div className="arc-menu-quick">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><FaWhatsapp size={18} aria-hidden="true" /> WhatsApp</a>
                <a href={`mailto:${CONTACT_EMAIL}`}><Mail size={18} aria-hidden="true" /> Email</a>
              </div>
              <p className="arc-menu-note">Independent solo freelancer<br />Written communication only</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="header-service-rail"><ServiceTabs /></div>
    </header>
  );
}
