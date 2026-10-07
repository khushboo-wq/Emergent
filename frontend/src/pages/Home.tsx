import { ArrowRight, Check, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { orderedServices } from "@/lib/site";
import { resources } from "@/lib/resources";

const process = [
  ["01", "Tell me what you need", "Share the task, goal, audience, or problem in writing."],
  ["02", "I confirm the scope", "You get a clear outline of what I will handle and what I need from you."],
  ["03", "The work gets done", "I work through the agreed tasks and keep communication clear."],
  ["04", "You get the result", "Completed work, useful updates, and a written handover where needed."],
];

const heroServices = ["LinkedIn", "Email Outreach", "Business Support", "Lead Generation", "AI Video Creation", "Email Setup"];

export default function Home() {
  return (
    <PageFrame>
      <Seo
        path="/"
        title="Arcturus Professional Services | Independent Business Support"
        description="Independent LinkedIn management, email outreach, lead generation, business support, email setup and AI video creation for businesses."
      />

      <section className="luxury-hero" data-testid="home-hero">
        <div className="luxury-shell luxury-hero-inner">
          <Reveal className="luxury-hero-copy" delay={40}>
            <p className="luxury-eyebrow"><span>01</span> Independent freelancer · New Delhi</p>
            <h1 data-testid="home-hero-heading">
              B2B growth work,
              <em> handled personally.</em>
            </h1>
            <p className="luxury-hero-lead" data-testid="home-hero-description">
              LinkedIn management, email outreach, lead generation, business support, email setup and AI content for founders and small teams across the UK, Ireland and Europe. Managed directly by Khushboo.
            </p>
            <div className="luxury-hero-actions">
              <Link to="/services" className="luxury-button luxury-button-dark">Explore services <ArrowRight size={16} /></Link>
              <Link to="/contact" className="luxury-button luxury-button-ghost">Talk to Khushboo</Link>
            </div>
            <div className="luxury-proof-row">
              <span><Check size={14} /> Direct communication</span>
              <span><Check size={14} /> Written updates</span>
              <span><Check size={14} /> Personalised support</span>
            </div>
          </Reveal>

          <Reveal className="luxury-hero-art-wrap" delay={150}>
            <div className="luxury-hero-art" aria-label="Arcturus visual identity">
              <div className="luxury-art-arch" />
              <div className="luxury-art-disc" />
              <div className="luxury-art-ring luxury-art-ring-one" />
              <div className="luxury-art-ring luxury-art-ring-two" />
              <div className="luxury-art-letter">A</div>
              <div className="luxury-art-word">ARCTURUS</div>
              <div className="luxury-art-caption">PROFESSIONAL SERVICES</div>
              <div className="luxury-art-side">DIRECT · PERSONAL · WRITTEN</div>
              <div className="luxury-art-index">01 / 06</div>
              <span className="luxury-art-dot luxury-art-dot-one" />
              <span className="luxury-art-dot luxury-art-dot-two" />
            </div>
            <div className="luxury-art-note">A direct, considered way to keep the work behind your business moving.</div>
          </Reveal>
        </div>
      </section>

      <div className="luxury-marquee" aria-hidden="true">
        <div className="luxury-marquee-track">
          {[...heroServices, ...heroServices].map((service, index) => (
            <span key={`${service}-${index}`}>{service} <b>•</b></span>
          ))}
        </div>
      </div>

      <section className="luxury-intro-section">
        <div className="luxury-shell luxury-two-col">
          <Reveal>
            <p className="luxury-section-kicker">What I do</p>
            <h2>One person. One point of contact. Less chasing, more finished work.</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="luxury-intro-copy">
              <p>I work directly with founders and small businesses on the practical work that keeps growth moving: outreach, research, admin, content and the tasks that otherwise stay on the list.</p>
              <p>You do not get passed around a team. You get a clear written scope, direct communication and the person doing the work from brief to delivery.</p>
              <Link to="/about" className="luxury-inline-link">More about how I work <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="luxury-facts-section" aria-label="Arcturus at a glance">
        <div className="luxury-shell luxury-facts-grid">
          <div><strong>12+</strong><span>years across email marketing, B2B outreach and lead research</span></div>
          <div><strong>06</strong><span>focused services with published pricing</span></div>
          <div><strong>UK · IE · EU</strong><span>businesses supported directly from New Delhi</span></div>
          <div><strong>01</strong><span>person from brief to delivery</span></div>
        </div>
      </section>

      <section className="luxury-services-section">
        <div className="luxury-shell">
          <Reveal className="luxury-section-heading">
            <div>
              <p className="luxury-section-kicker">Services</p>
              <h2>Services that fit the work you actually need done.</h2>
            </div>
            <Link to="/services" className="luxury-inline-link">View all services <ArrowRight size={16} /></Link>
          </Reveal>

          <div className="luxury-service-list">
            {orderedServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 45}>
                <Link to={`/services/${service.slug}`} className="luxury-service-row" data-service-slug={service.slug} data-service-name={service.title}>
                  <span className="luxury-service-number">0{index + 1}</span>
                  <div className="luxury-service-main">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="luxury-service-price service-card-price">{service.price}</span>
                  <span className="luxury-service-arrow"><ArrowRight size={20} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-statement-section">
        <div className="luxury-shell luxury-statement-grid">
          <Reveal>
            <p className="luxury-section-kicker luxury-kicker-light">Why Arcturus</p>
            <p className="luxury-statement-index">02 / 04</p>
          </Reveal>
          <Reveal delay={120}>
            <h2>The best support is <em>clear.</em></h2>
            <div className="luxury-statement-points">
              <p><b>01</b> One point of contact from brief to delivery.</p>
              <p><b>02</b> Written communication that keeps the work clear.</p>
              <p><b>03</b> A practical scope agreed before work begins.</p>
              <p><b>04</b> No agency layers, hand-offs or unnecessary meetings.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="luxury-process-section">
        <div className="luxury-shell">
          <Reveal className="luxury-section-heading">
            <div>
              <p className="luxury-section-kicker">How I work</p>
              <h2>A simple process, kept in writing.</h2>
            </div>
            <p className="luxury-heading-note">No long onboarding. We start with the brief.</p>
          </Reveal>

          <div className="luxury-process-grid">
            {process.map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 70} className="luxury-process-item">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-resources-section">
        <div className="luxury-shell">
          <Reveal className="luxury-section-heading">
            <div>
              <p className="luxury-section-kicker">Resources</p>
              <h2>Practical guidance for the work behind your growth.</h2>
            </div>
            <Link to="/resources" className="luxury-inline-link">View all resources <ArrowRight size={16} /></Link>
          </Reveal>
          <div className="resource-home-grid">
            {resources.filter((resource) => ["linkedin-management-services-guide", "b2b-email-outreach-guide", "b2b-lead-generation-guide"].includes(resource.slug)).map((resource, index) => (
              <Reveal key={resource.slug} delay={index * 55}>
                <Link to={`/resources/${resource.slug}`} className="resource-home-card">
                  <span>{resource.category}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.excerpt}</p>
                  <span className="resource-home-link">Read guide <ArrowRight size={15} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-about-section">
        <div className="luxury-shell luxury-about-grid">
          <Reveal className="luxury-about-visual">
            <div className="luxury-about-monogram">K</div>
            <div className="luxury-about-meta">
              <span>KHUSHBOO</span>
              <small>Independent Freelancer · New Delhi</small>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <p className="luxury-section-kicker">About me</p>
            <h2>You deal with the person doing the work.</h2>
            <p className="luxury-about-copy">
              Based in New Delhi, I support businesses across the UK, Ireland and Europe. I bring 12+ years of experience across email marketing, B2B outreach, lead research and sales support, with a simple working style: understand the brief, do the agreed work properly, and keep communication clear.
            </p>
            <Link to="/about" className="luxury-button luxury-button-dark">More about Khushboo <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="luxury-contact-section">
        <div className="luxury-shell luxury-contact-inner">
          <Reveal>
            <div className="luxury-contact-overline"><Mail size={16} /> Start a conversation</div>
            <h2>Tell me what you need help with.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>Send a written enquiry with your business, requirements and timeline. I will review it and get back to you.</p>
            <Link to="/contact" className="luxury-button luxury-button-light">Get in touch <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </PageFrame>
  );
}
