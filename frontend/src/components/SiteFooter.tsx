import { MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, orderedServices } from "@/lib/site";

const logoUrl = "https://customer-assets-wrfwihn1.emergentagent.net/job_khushboo-services/artifacts/0267e06d60c3c063_Arcturus%20Black%20Logo.jpg";

export default function SiteFooter() {
  return (
    <footer className="digital-footer commercial-footer pb-16 md:pb-0" data-testid="site-footer">
      <div className="commercial-container commercial-footer-grid">
        <div className="commercial-footer-brand">
          <img src={logoUrl} alt="Arcturus Professional Services logo" width="72" height="72" loading="lazy" decoding="async" />
          <p>Independent business support, handled personally.</p>
          <span>Based in New Delhi. Working with businesses in the UK, Ireland and Europe.</span>
        </div>
        <div>
          <p className="commercial-footer-label">Services</p>
          <div className="commercial-footer-links">
            {orderedServices.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} data-testid={`footer-service-${service.slug}`}>{service.title}</Link>)}
          </div>
        </div>
        <div>
          <p className="commercial-footer-label">Contact</p>
          <div className="commercial-footer-contact">
            <a href={`mailto:${CONTACT_EMAIL}`} data-testid="footer-email-link"><MdOutlineEmail />{CONTACT_EMAIL}</a>
            <a href="https://wa.me/919911284362" target="_blank" rel="noreferrer" data-testid="footer-whatsapp-link"><FaWhatsapp />+91 99112 84362</a>
            <p data-testid="footer-location"><MapPin />New Delhi, India</p>
          </div>
          <div className="commercial-socials">
            <a href="https://www.linkedin.com/in/khushboo-tomar" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="footer-linkedin-link"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/arcturusprofessional" target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="footer-instagram-link"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="commercial-footer-bottom">
        <div className="commercial-container">
          <span>© {new Date().getFullYear()} Arcturus Professional Services</span>
          <div><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
