import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, getContactHref } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0b1320] text-[#e2e8f0]" data-testid="site-footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10 lg:py-20">
        <div>
          <div className="flex items-center gap-3" data-testid="footer-brand">
            <span className="grid size-9 place-items-center rounded-full border border-[#e2e8f0]/25 font-serif text-lg text-[#f5d783]">A</span>
            <span className="font-mono text-xs tracking-[0.2em] text-[#e2e8f0]">ARCTURUS</span>
          </div>
          <p className="mt-6 max-w-sm font-serif text-2xl leading-tight text-white" data-testid="footer-statement">Structured support for businesses that value clarity.</p>
          <p className="mt-5 max-w-md text-sm leading-6 text-[#94a3b8]" data-testid="footer-description">B2B outreach, operational support, and clear visual communication for European businesses and founders.</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c59b27]" data-testid="footer-services-label">Explore</p>
          <div className="mt-5 flex flex-col items-start gap-3 text-sm text-[#cbd5e1]">
            <Link to="/about" className="transition-colors duration-200 hover:text-white" data-testid="footer-about-link">About Arcturus</Link>
            <Link to="/services" className="transition-colors duration-200 hover:text-white" data-testid="footer-services-link">All services</Link>
            <Link to="/contact" className="transition-colors duration-200 hover:text-white" data-testid="footer-contact-link">Contact Khushboo</Link>
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c59b27]" data-testid="footer-connect-label">Start a conversation</p>
          <a href={getContactHref()} className="mt-5 flex items-start gap-2 text-sm leading-6 text-white transition-colors duration-200 hover:text-[#f5d783]" data-testid="footer-email-link">
            <Mail className="mt-1 size-4 shrink-0 text-[#c59b27]" />
            <span>{CONTACT_EMAIL}</span>
            <ArrowUpRight className="mt-1 size-4 shrink-0" />
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-6 text-xs text-[#64748b] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10" data-testid="footer-legal-row">
        <span data-testid="footer-copyright">© {new Date().getFullYear()} Arcturus Professional Services</span>
        <span data-testid="footer-note">Independent redesign preview · Written enquiries only</span>
      </div>
    </footer>
  );
}
