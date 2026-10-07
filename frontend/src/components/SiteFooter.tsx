import { MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, orderedServices } from "@/lib/site";

const logoUrl = "https://customer-assets-wrfwihn1.emergentagent.net/job_khushboo-services/artifacts/0267e06d60c3c063_Arcturus%20Black%20Logo.jpg";

export default function SiteFooter() {
  return (
    <footer className="digital-footer luxury-footer pb-16 md:pb-0" data-testid="site-footer">
      <div className="luxury-shell luxury-footer-top">
        <div className="luxury-footer-brand">
          <Link to="/" className="luxury-footer-logo">
            <img src={logoUrl} alt="Arcturus Professional Services logo" width="68" height="68" loading="lazy" decoding="async" />
          </Link>
          <p>Independent support for the work behind your business.</p>
          <span>Based in New Delhi. Working with businesses in the UK, Ireland and Europe.</span>
        </div>

        <div className="luxury-footer-column">
          <p className="luxury-footer-label">Explore</p>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/how-i-work">How I work</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="luxury-footer-column">
          <p className="luxury-footer-label">Services</p>
          {orderedServices.slice(0, 4).map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>
          ))}
        </div>

        <div className="luxury-footer-column">
          <p className="luxury-footer-label">Contact</p>
          <a href={`mailto:${CONTACT_EMAIL}`}><MdOutlineEmail />{CONTACT_EMAIL}</a>
          <a href="https://wa.me/919911284362" target="_blank" rel="noreferrer"><FaWhatsapp />+91 99112 84362</a>
          <span><MapPin />New Delhi, India</span>
          <div className="luxury-footer-socials">
            <a href="https://www.linkedin.com/in/khushboo-tomar" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/arcturusprofessional" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="luxury-footer-word">ARCTURUS</div>

      <div className="luxury-footer-bottom">
        <div className="luxury-shell">
          <span>© {new Date().getFullYear()} Arcturus Professional Services</span>
          <div><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
