import { ArrowRight, Check, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import { orderedServices } from "@/lib/site";

const process = [
  ["01", "Tell me what you need", "Share the task, goal, audience, or problem in writing."],
  ["02", "I confirm the scope", "You get a clear outline of what I will handle and what I need from you."],
  ["03", "The work gets done", "I work through the agreed tasks and keep communication clear."],
  ["04", "You get the result", "Completed work, useful updates, and a written handover where needed."],
];

export default function Home() {
  return (
    <PageFrame>
      <Seo path="/" title="Arcturus Professional Services | Independent Business Support" description="Independent LinkedIn management, email outreach, lead generation, business support, email setup and AI video creation for businesses." />
      <section className="commercial-hero" data-testid="home-hero">
        <div className="commercial-container commercial-hero-grid">
          <div className="commercial-hero-copy">
            <div className="commercial-kicker"><span /> Independent Freelancer</div>
            <h1 data-testid="home-hero-heading">Practical support for the work behind your business.</h1>
            <p data-testid="home-hero-description">LinkedIn, email outreach, lead generation, business support and more, handled personally by Khushboo.</p>
            <div className="commercial-actions">
              <Link to="/contact" className="commercial-btn commercial-btn-primary">Get in touch <ArrowRight size={17} /></Link>
              <Link to="/services" className="commercial-btn commercial-btn-secondary">View services</Link>
            </div>
            <div className="commercial-trust-row"><span><Check size={16} /> Direct communication</span><span><Check size={16} /> Written updates</span><span><Check size={16} /> Personalised support</span></div>
          </div>
          <div className="commercial-hero-card motion-stage" aria-label="Arcturus service overview">
            <div className="motion-grid" />
            <div className="motion-orbit motion-orbit-one" />
            <div className="motion-orbit motion-orbit-two" />
            <div className="motion-glow motion-glow-one" />
            <div className="motion-glow motion-glow-two" />
            <span className="motion-dot motion-dot-one" /><span className="motion-dot motion-dot-two" /><span className="motion-dot motion-dot-three" />
            <div className="hero-floating-card hero-floating-card-top"><span className="floating-icon">↗</span><div><small>BUSINESS VISIBILITY</small><strong>Growing steadily</strong></div></div>
            <div className="hero-floating-card hero-floating-card-bottom"><span className="floating-icon">✓</span><div><small>WORKFLOW</small><strong>Clear & organised</strong></div></div>
            <div className="hero-core">
              <div className="hero-core-ring" />
              <div className="hero-core-logo">A</div>
              <div className="hero-core-copy"><span>ARCTURUS</span><strong>Professional<br />Services</strong></div>
            </div>
            <div className="hero-card-mini-label">INDEPENDENT · PERSONAL · DIRECT</div>
          </div>
        </div>
      </section>
      <section className="commercial-intro"><div className="commercial-container commercial-intro-grid"><div><p className="commercial-section-label">What I do</p><h2>Reliable help without the agency layers.</h2></div><div><p>I work directly with founders and small businesses on the practical tasks that are easy to postpone and difficult to keep on top of.</p><p>You get one point of contact, clear written communication, and support built around the actual work you need done.</p><Link to="/about" className="commercial-text-link">More about how I work <ArrowRight size={16} /></Link></div></div></section>
      <section className="commercial-services"><div className="commercial-container"><div className="commercial-section-heading"><div><p className="commercial-section-label">Services</p><h2>Choose the support you need.</h2></div><Link to="/services" className="commercial-text-link">View all services <ArrowRight size={16} /></Link></div><div className="commercial-service-grid">{orderedServices.map((service, index) => <Link key={service.slug} to={`/services/${service.slug}`} className="commercial-service-card"><div className="commercial-service-number">0{index + 1}</div><div className="commercial-service-content"><h3>{service.title}</h3><p>{service.description}</p></div><div className="commercial-card-link">Explore <ArrowRight size={16} /></div></Link>)}</div></div></section>
      <section className="commercial-feature-band"><div className="commercial-container commercial-feature-grid"><div><p className="commercial-section-label light">Why Arcturus</p><h2>Simple, personal and clear from the start.</h2></div><div className="commercial-feature-points"><div><strong>01</strong><span><b>One point of contact</b> You work directly with the person handling your work.</span></div><div><strong>02</strong><span><b>Written communication</b> Instructions, questions and updates stay documented.</span></div><div><strong>03</strong><span><b>Clear scope</b> You know what is included before the work begins.</span></div><div><strong>04</strong><span><b>Practical delivery</b> The focus stays on completing useful work, not adding layers.</span></div></div></div></section>
      <section className="commercial-process"><div className="commercial-container"><div className="commercial-section-heading"><div><p className="commercial-section-label">How I work</p><h2>A straightforward process.</h2></div><p className="commercial-heading-note">No complicated onboarding. We start with the work.</p></div><div className="commercial-process-grid">{process.map(([number, title, copy]) => <div key={number} className="commercial-process-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
      <section className="commercial-about"><div className="commercial-container commercial-about-grid"><div className="commercial-about-panel"><div className="commercial-about-badge">KHUSHBOO</div><div className="commercial-about-stat"><strong>Independent Freelancer</strong><span>New Delhi, India</span></div></div><div><p className="commercial-section-label">About me</p><h2>You deal with the person doing the work.</h2><p>I support businesses in Ireland, the UK and Europe from New Delhi. My approach is simple: understand the brief, do the agreed work properly, and keep communication clear.</p><Link to="/about" className="commercial-btn commercial-btn-secondary">Read more <ArrowRight size={17} /></Link></div></div></section>
      <section className="commercial-contact"><div className="commercial-container commercial-contact-inner"><div><div className="commercial-contact-icon"><Mail size={21} /></div><p className="commercial-section-label">Have something in mind?</p><h2>Tell me what you need help with.</h2><p>Send a written enquiry with your business, requirements and timeline. I will review it and get back to you.</p></div><Link to="/contact" className="commercial-btn commercial-btn-primary">Start a conversation <ArrowRight size={17} /></Link></div></section>
    </PageFrame>
  );
}
