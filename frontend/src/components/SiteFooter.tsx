import { ArrowUpRight, Clock3, MapPin, MessageCircle, Mail, ShieldCheck } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, orderedServices, WHATSAPP_LINK } from "@/lib/site";
import BrandLogo from "@/components/BrandLogo";


export default function SiteFooter() {
  return (
    <footer className="digital-footer luxury-footer pb-16 md:pb-0" data-testid="site-footer">
      <section className="luxury-footer-cta">
        <div className="luxury-shell luxury-footer-cta-inner">
          <div>
            <p className="luxury-footer-kicker">ARCTURUS / DIRECT SUPPORT</p>
            <h2>Need practical work taken off your plate?</h2>
            <p>Send a written brief. Khushboo will review it and come back with the most practical starting point.</p>
          </div>
          <Link to="/contact" className="luxury-footer-cta-button">Start a written enquiry <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <div className="luxury-shell luxury-footer-top">
        <div className="luxury-footer-brand">
          <Link to="/" className="luxury-footer-logo">
            <BrandLogo size={60} light />
          </Link>
          <p>Independent B2B support, managed personally.</p>
          <span>Based in New Delhi, working directly with businesses across the UK, Ireland and Europe.</span><span className="footer-experience-line">12+ years across email marketing, B2B outreach, lead research and sales support.</span>
          <div className="luxury-footer-socials footer-socials-large">
            <a href="https://www.linkedin.com/in/khushboo-tomar" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/arcturusprofessional" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="luxury-footer-column">
          <p className="luxury-footer-label">Explore</p>
          <Link to="/">Home</Link>
          <Link to="/about">About Khushboo</Link>
          <Link to="/services">All services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <p className="luxury-footer-label footer-label-gap">Learn more</p>
          <Link to="/how-i-work">How I work</Link>
          <Link to="/reporting-compliance">Reporting & Compliance</Link>
          <Link to="/resources">Resources & guides</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="luxury-footer-column footer-services-column">
          <p className="luxury-footer-label">Every service</p>
          {orderedServices.map((service, index) => (
            <Link key={service.slug} to={"/services/" + service.slug}>
              <span className="footer-service-number">0{index + 1}</span>{service.title}
            </Link>
          ))}
        </div>

        <div className="luxury-footer-column footer-contact-column">
          <p className="luxury-footer-label">Contact</p>
          <a href={"mailto:" + CONTACT_EMAIL}><Mail size={14} />{CONTACT_EMAIL}</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><MessageCircle size={14} />+91 99112 84362</a>
          <span><MapPin size={14} />New Delhi, India</span>
          <span><Clock3 size={14} />UK & Irish working hours · Monday–Friday</span>
          <span><ShieldCheck size={14} />B2B · Confidential · Written</span>
          <span><ArrowUpRight size={14} />Direct freelancer support · no agency hand-offs</span>
        </div>
      </div>

      <div className="luxury-shell footer-top-row"><a href="#main-content" className="footer-to-top">Back to top <ArrowUpRight size={13} /></a></div>

      <div className="luxury-footer-word" aria-hidden="true"><svg viewBox="0 0 1000 150" preserveAspectRatio="xMidYMid meet"><defs><linearGradient id="arcFooterSheen" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stopColor="rgba(198,194,240,.10)" /><stop offset=".45" stopColor="rgba(198,194,240,.12)" /><stop offset=".5" stopColor="rgba(127,227,216,.55)" /><stop offset=".55" stopColor="rgba(198,194,240,.12)" /><stop offset="1" stopColor="rgba(198,194,240,.10)" /><animate attributeName="x1" values="-1;1" dur="7s" repeatCount="indefinite" /><animate attributeName="x2" values="0;2" dur="7s" repeatCount="indefinite" /></linearGradient></defs><text className="arc-footer-sheen" x="500" y="128" textAnchor="middle" textLength="980" lengthAdjust="spacingAndGlyphs">ARCTURUS</text></svg></div>

      <div className="luxury-footer-bottom">
        <div className="luxury-shell luxury-footer-bottom-inner">
          <span>© {new Date().getFullYear()} Arcturus Professional Services · New Delhi, India</span>
          <div><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  );
}
