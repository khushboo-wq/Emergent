import { MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, orderedServices } from "@/lib/site";

const logoUrl = "https://customer-assets-wrfwihn1.emergentagent.net/job_khushboo-services/artifacts/0267e06d60c3c063_Arcturus%20Black%20Logo.jpg";

export default function SiteFooter() {
  return (
    <footer className="digital-footer bg-[#20242b] pb-20 text-white md:pb-0" data-testid="site-footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr_0.8fr_1fr] lg:px-10 lg:py-16">
        <div>
          <div className="inline-flex rounded-lg bg-white p-2"><img src={logoUrl} alt="Arcturus Professional Services logo" width="82" height="82" loading="lazy" decoding="async" className="size-[82px] object-contain" data-testid="footer-logo-image" /></div>
          <p className="mt-6 max-w-sm font-hemicube text-2xl leading-tight text-white" data-testid="footer-statement">Independent B2B support, handled personally.</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#c2c7ce]" data-testid="footer-description">I support businesses in Ireland, the UK, and Europe from New Delhi, India. Communication is written through email and WhatsApp.</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f58220]">Services</p>
          <div className="mt-5 grid gap-3 text-sm text-[#d8dce1]">
            {orderedServices.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} className="transition-colors duration-200 hover:text-[#f58220]" data-testid={`footer-service-${service.slug}`}>{service.title}</Link>)}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f58220]">Contact</p>
          <div className="mt-5 space-y-2 text-sm text-[#d8dce1]">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 rounded-md py-2 transition-colors hover:text-white" data-testid="footer-email-link"><MdOutlineEmail className="size-5 text-[#f58220]" aria-hidden="true" /><span className="break-all">{CONTACT_EMAIL}</span></a>
            <a href="https://wa.me/919911284362" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md py-2 transition-colors hover:text-white" data-testid="footer-whatsapp-link"><FaWhatsapp className="size-5 text-[#25d366]" aria-hidden="true" />+91 99112 84362</a>
            <p className="flex items-center gap-3 py-2" data-testid="footer-location"><MapPin className="size-5 text-[#f58220]" aria-hidden="true" />New Delhi, India</p>
            <a href="https://www.linkedin.com/in/khushboo-tomar" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md py-2 transition-colors hover:text-white" data-testid="footer-linkedin-link"><FaLinkedinIn className="size-5 text-[#6fa9ff]" aria-hidden="true" />LinkedIn: Khushboo Tomar</a>
            <a href="https://www.instagram.com/arcturusprofessional" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md py-2 transition-colors hover:text-white" data-testid="footer-instagram-link"><FaInstagram className="size-5 text-[#ef79b1]" aria-hidden="true" />Instagram: @arcturusprofessional</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-5 text-xs text-[#aeb5be] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10" data-testid="footer-legal-row"><span>© {new Date().getFullYear()} Arcturus Professional Services</span><div className="flex gap-5"><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link to="/terms" className="hover:text-white">Terms</Link></div></div>
    </footer>
  );
}
