import { Clock3, CreditCard, FileText, Globe2, MapPin, ShieldCheck } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, orderedServices } from "@/lib/site";

const logoUrl = "https://customer-assets-wrfwihn1.emergentagent.net/job_khushboo-services/artifacts/0267e06d60c3c063_Arcturus%20Black%20Logo.jpg";

export default function SiteFooter() {
  return (
    <footer className="digital-footer luxury-footer premium-footer" data-testid="site-footer">
      <div className="luxury-shell luxury-footer-top">
        <div className="luxury-footer-brand">
          <Link to="/" className="luxury-footer-logo">
            <img src={logoUrl} alt="Arcturus Professional Services logo" width="68" height="68" loading="lazy" decoding="async" />
          </Link>
          <p>Practical support. Professional execution.</p>
          <span>Independent freelancer based in New Delhi, working directly with businesses across the UK, Ireland and Europe.</span>
          <div className="footer-trust-line">
            <span>Independent</span>
            <span>Direct</span>
            <span>Written</span>
            <span>Personal</span>
          </div>
        </div>

        <div className="luxury-footer-column">
          <p className="luxury-footer-label">Explore</p>
          <Link to="/about">About Khushboo</Link>
          <Link to="/services">All Services</Link>
          <Link to="/how-i-work">How I Work</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="luxury-footer-column footer-services-column">
          <p className="luxury-footer-label">Services</p>
          {orderedServices.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}><span>{service.title}</span><small>{service.price}</small></Link>
          ))}
        </div>

        <div className="luxury-footer-column">
          <p className="luxury-footer-label">Working with Arcturus</p>
          <span><CreditCard /> Payment upfront before work begins</span>
          <span><FileText /> Written scope and updates</span>
          <span><Clock3 /> Mon–Fri · UK / Irish working hours</span>
          <span><ShieldCheck /> Confidential, B2B-first approach</span>
          <span>Third-party tools are separate unless stated otherwise.</span>
        </div>

        <div className="luxury-footer-column">
          <p className="luxury-footer-label">Contact</p>
          <a href={`mailto:${CONTACT_EMAIL}`}><MdOutlineEmail />{CONTACT_EMAIL}</a>
          <a href="https://wa.me/919911284362" target="_blank" rel="noreferrer"><FaWhatsapp />+91 99112 84362</a>
          <span><MapPin />New Delhi, India</span>
          <a href="https://arcturusprofessional.com"><Globe2 />www.arcturusprofessional.com</a>
          <div className="luxury-footer-socials">
            <a href="https://www.linkedin.com/in/khushboo-tomar" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/arcturusprofessional" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-terms-strip">
        <div className="luxury-shell">
          <span>Monthly services · one-time setup · hourly support · verified-contact lead generation</span>
          <span>No unnecessary calls or meetings. Clear written communication throughout.</span>
        </div>
      </div>

      <div className="luxury-footer-word">ARCTURUS</div>

      <div className="luxury-footer-bottom">
        <div className="luxury-shell">
          <span>© {new Date().getFullYear()} Arcturus Professional Services · Independent Freelancer</span>
          <div><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms</Link><Link to="/contact">Written enquiry</Link></div>
        </div>
      </div>
    </footer>
  );
}
