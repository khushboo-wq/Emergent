import { ArrowRight, Clock3, MessageSquareText } from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import AmbientScene from "@/components/AmbientScene";

const onboarding = [
  ["01", "Day 1–2", "Requirements, invoice, advance payment and access are confirmed."],
  ["02", "Day 3–5", "Setup and preparation for the agreed service are completed."],
  ["03", "Week 2 onward", "Regular work begins with written updates and reporting."],
];



export default function HowIWork() {
  return (
    <PageFrame>
      <Seo path="/how-i-work" />

      <section className="luxury-hero luxury-process-hero work-hero-rich" data-testid="work-hero">
        <AmbientScene type="workflow" className="work-ambient-scene" />
        <div className="luxury-shell luxury-hero-inner">
          <Reveal className="luxury-hero-copy">
            <p className="luxury-eyebrow"><span>02</span> Process · communication</p>
            <h1 data-testid="work-heading">A clear process, <em>kept in writing.</em></h1>
            <p className="luxury-hero-lead" data-testid="work-intro">No complicated onboarding and no call-booking chain. Here is exactly what happens after you get in touch.</p>
            <div className="luxury-hero-actions">
              <Link to="/contact" className="luxury-button luxury-button-dark">Send a written brief <ArrowRight size={16} /></Link>
              <Link to="/services" className="luxury-button luxury-button-ghost">View services</Link>
            </div>
          </Reveal>
          <Reveal className="luxury-hero-art-wrap" delay={140}>
            <HeroShowcase kicker="Workflow" index="02 / 06" title="Understand · Plan · Execute · Review · Deliver" subtitle="Every step agreed and documented in writing." slug="email-outreach" chips={["Written brief","Scope agreed","Advance payment","Work begins","Delivery"]} />
          </Reveal>
        </div>
      </section>

      <nav className="work-section-tabs" aria-label="How I work sections">
        <a href="#starting-project">01 Starting a project</a>
        <a href="#onboarding-timeline">02 Onboarding</a>
        <a href="#communication">03 Communication</a>
        <a href="#why-me">04 Why work with me</a>
      </nav>

      <section className="process-start-section" id="starting-project" data-testid="starting-project">
        <div className="luxury-shell">
          <Reveal className="luxury-section-heading">
            <div>
              <p className="luxury-section-kicker">Starting a project</p>
              <h2>From a short brief to an agreed scope.</h2>
            </div>
            <p className="luxury-heading-note">Written is enough. The aim is to make the next step obvious before work begins.</p>
          </Reveal>
          <div className="start-project-grid">
            {[
              ["01", "Tell me what you need", "Share the task, goal, audience, business context or problem in writing."],
              ["02", "Share the information", "Send the files, access, examples, instructions or source material needed for the agreed work."],
              ["03", "Agree the scope", "I confirm what I will handle, what I need from you, the payment arrangement and any relevant timing."],
            ].map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 60}>
                <article className="start-project-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-process-section" id="onboarding-timeline">
        <div className="luxury-shell">
          <Reveal className="luxury-section-heading">
            <div>
              <p className="luxury-section-kicker">Client journey</p>
              <h2>From “yes” to “under way” in a clear sequence.</h2>
            </div>
            <p className="luxury-heading-note">The exact timing depends on the selected service and any platform warm-up period.</p>
          </Reveal>

          <div className="onboarding-grid">
            {onboarding.map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 80} className="onboarding-card">
                <span>{number}</span>
                <Clock3 size={18} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="communication-section" id="communication">
        <div className="luxury-shell communication-grid">
          <Reveal className="communication-dark">
            <MessageSquareText />
            <p className="luxury-section-kicker luxury-kicker-light">Direct communication</p>
            <h2>How we stay in touch.</h2>
            <p>Email is the primary written channel. LinkedIn can be used for professional project-related communication and WhatsApp is available when quick clarification or coordination is required. No unnecessary meetings or long meetings are needed because requirements, approvals, updates and deliveries remain documented in writing.</p>
          </Reveal>
          <Reveal className="communication-light" delay={100}>
            <p className="luxury-section-kicker">More detail</p>
            <h2>Where to find the rest.</h2>
            <ul className="work-more-links">
              <li><Link to="/pricing">Prices and payment terms</Link></li>
              <li><Link to="/reporting-compliance">Reports, data handling and tools</Link></li>
              <li><Link to="/faq">Common questions</Link></li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="why-work-section" id="why-me">
        <div className="luxury-shell">
          <Reveal>
            <p className="luxury-section-kicker">Why work with me</p>
            <h2>No agency layers. No account managers. Just direct, accountable work.</h2>
          </Reveal>
          <div className="why-work-grid">
            {[
              ["Independent & detail-focused", "Reliable delivery without unnecessary micro-management."],
              ["UK & Irish working hours", "Work aligned with UK and Irish time, Monday to Friday."],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 45}><article className="why-work-card"><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

    </PageFrame>
  );
}
