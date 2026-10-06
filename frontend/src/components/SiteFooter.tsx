import { MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, orderedServices } from "@/lib/site";

const whiteLogoUrl = "https://customer-assets-wrfwihn1.emergentagent.net/job_khushboo-services/artifacts/0267e06d60c3c063_Arcturus%20Black%20Logo.jpg";

export default function SiteFooter() {
  return (
    <footer className="digital-footer pb-20 text-[#e2e8f0] md:pb-0" data-testid="site-footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_1fr_0.9fr] lg:px-10 lg:py-20">
        <div>
          <img src={whiteLogoUrl} alt="Arcturus Professional Services white logo" width="96" height="96" loading="lazy" decoding="async" className="size-24 rounded-2xl object-contain" data-testid="footer-logo-image" />
          <p className="mt-6 max-w-sm font-serif text-3xl leading-tight text-white" data-testid="footer-statement">Independent B2B support, handled personally.</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#9fb0c5]" data-testid="footer-description">I support businesses in Ireland, the UK, and Europe from New Delhi, India. Communication is written through email and WhatsApp.</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9bc8c0]" data-testid="footer-services-label">Services</p>
          <div className="mt-5 grid gap-3 text-sm text-[#cbd5e1]">
            {orderedServices.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} className="transition-[color,transform] duration-200 hover:translate-x-1 hover:text-white" data-testid={`footer-service-${service.slug}`}>{service.title}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9bc8c0]" data-testid="footer-connect-label">Contact</p>
          <div className="mt-5 space-y-3 text-sm text-[#cbd5e1]">
            <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-[background-color,color,transform] duration-200 hover:translate-x-1 hover:bg-white/10 hover:text-white" data-testid="footer-email-link"><MdOutlineEmail className="size-5 shrink-0" aria-hidden="true" /><span className="break-all">{CONTACT_EMAIL}</span></a>
            <a href="https://wa.me/919911284362" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-[background-color,color,transform] duration-200 hover:translate-x-1 hover:bg-white/10 hover:text-white" data-testid="footer-whatsapp-link"><FaWhatsapp className="size-5 shrink-0" aria-hidden="true" />+91 99112 84362</a>
            <p className="flex items-center gap-3 px-2 py-2" data-testid="footer-location"><MapPin className="size-5 shrink-0" aria-hidden="true" />New Delhi, India</p>
            <a href="https://www.linkedin.com/in/khushboo-tomar" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-[background-color,color,transform] duration-200 hover:translate-x-1 hover:bg-white/10 hover:text-white" data-testid="footer-linkedin-link"><FaLinkedinIn className="size-5 shrink-0" aria-hidden="true" />LinkedIn: Khushboo Tomar</a>
            <a href="https://www.instagram.com/arcturusprofessional" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-[background-color,color,transform] duration-200 hover:translate-x-1 hover:bg-white/10 hover:text-white" data-testid="footer-instagram-link"><FaInstagram className="size-5 shrink-0" aria-hidden="true" />Instagram: @arcturusprofessional</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-6 text-xs text-[#7f91a6] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10" data-testid="footer-legal-row"><span data-testid="footer-copyright">© {new Date().getFullYear()} Arcturus Professional Services</span><div className="flex gap-5"><Link to="/privacy-policy" className="transition-colors duration-200 hover:text-white" data-testid="footer-privacy-link">Privacy Policy</Link><Link to="/terms" className="transition-colors duration-200 hover:text-white" data-testid="footer-terms-link">Terms</Link></div></div>
    </footer>
  );
}
