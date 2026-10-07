import { ArrowUpRight, Clock3, MapPin, MessageCircle, Mail, ShieldCheck } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, orderedServices } from "@/lib/site";

const logoUrl = "https://customer-assets-wrfwihn1.emergentagent.net/job_khushboo-services/artifacts/0267e06d60c3c063_Arcturus%20Black%20Logo.jpg";

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
            <img src={logoUrl} alt="Arcturus Professional Services logo" width="68" height="68" loading="lazy" decoding="async" />
          </Link>
          <p>Independent B2B support, handled personally.</p>
          <span>Based in New Delhi, working directly with businesses across the UK, Ireland and Europe.</span><span className="footer-experience-line">12+ years across email marketing, B2B outreach, lead research and sales support.</span>
          <div className="luxury-footer-socials footer-socials-large">
            <a href="https://www.linkedin.com/in/khushboo-tomar" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/arcturusprofessional" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/919911284362" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="luxury-footer-column">
          <p className="luxury-footer-label">Explore</p>
          <Link to="/">Home</Link>
          <Link to="/about">About Khushboo</Link>
          <Link to="/services">All services</Link>
          <Link to="/how-i-work">How I work</Link>
          <Link to="/reporting-compliance">Reporting & Compliance</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
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
          <a href="https://wa.me/919911284362" target="_blank" rel="noreferrer"><MessageCircle size={14} />+91 99112 84362</a>
          <span><MapPin size={14} />New Delhi, India</span>
          <span><Clock3 size={14} />UK & Irish working hours · Monday–Friday</span>
          <span><ShieldCheck size={14} />B2B · Confidential · Written</span>
          <span><ArrowUpRight size={14} />Direct freelancer support · no agency hand-offs</span>
        </div>
      </div>

      <div className="luxury-footer-information">
        <div className="luxury-shell footer-info-grid">
          <div>
            <p className="luxury-footer-label">Payment</p>
            <strong>50% advance, 50% on delivery.</strong>
            <span>Work starts after the 50% advance. Monthly services: 50% at the start and 50% at the end of the month. One-time work, Lead Generation and Business Support: the remaining 50% is paid on delivery. Payments via Wise.</span>
          </div>
          <div>
            <p className="luxury-footer-label">Third-party costs</p>
            <strong>Subscriptions stay with the client.</strong>
            <span>Sales Navigator, Hootsuite, domains, email accounts, hosting and other paid platforms are separate unless specifically stated otherwise.</span>
          </div>
          <div>
            <p className="luxury-footer-label">Communication</p>
            <strong>Written, direct, documented.</strong>
            <span>Email, LinkedIn and WhatsApp are used to keep requirements, approvals, updates and deliveries easy to reference.</span>
          </div>
        </div>
      </div>

      <div className="luxury-shell footer-top-row"><a href="#main-content" className="footer-to-top">Back to top <ArrowUpRight size={13} /></a></div>

      <div className="luxury-footer-word">ARCTURUS</div>

      <div className="luxury-footer-bottom">
        <div className="luxury-shell luxury-footer-bottom-inner">
          <span>© {new Date().getFullYear()} Arcturus Professional Services · New Delhi, India</span>
          <div><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  );
}
