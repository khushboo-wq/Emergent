import { ArrowRight, Check, Clock3, FileCheck2, MessageSquareText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";

const onboarding = [
  ["01", "Day 1–2", "Requirements, invoice, advance payment and access are confirmed."],
  ["02", "Day 3–5", "Setup and preparation for the agreed service are completed."],
  ["03", "Week 2 onward", "Regular work begins with written updates and reporting. Services with warm-up periods follow their own timelines."],
];

const process = [
  ["01", "Understand", "Share your requirements, goals, target audience and agreed scope."],
  ["02", "Plan", "I review the brief and create the practical approach for the work."],
  ["03", "Execute", "I carry out the agreed tasks, using the required tools and processes."],
  ["04", "Review", "Progress and results are reviewed, with updates where required."],
  ["05", "Deliver", "Completed work, content, data, reporting or handover is delivered in an organised format."],
];

const payments = [
  ["Monthly services", "Payment is made upfront at the start of each month."],
  ["One-time services", "Payment is made upfront before the work begins."],
  ["Business Support", "Billed according to actual time spent on agreed work, with hours and scope agreed in advance."],
  ["Lead Generation", "Payment is made before the completed verified contact list is delivered."],
];

export default function HowIWork() {
  return (
    <PageFrame>
      <Seo path="/how-i-work" />

      <section className="luxury-hero luxury-process-hero" data-testid="work-hero">
        <div className="luxury-shell luxury-hero-inner">
          <Reveal className="luxury-hero-copy">
            <p className="luxury-eyebrow"><span>02</span> Process · payment · communication</p>
            <h1 data-testid="work-heading">A clear process, <em>kept in writing.</em></h1>
            <p className="luxury-hero-lead" data-testid="work-intro">No complicated onboarding. No call-booking chain. You send the brief, I confirm the scope, payment and access, and the work starts.</p>
            <div className="luxury-hero-actions">
              <Link to="/contact" className="luxury-button luxury-button-dark">Send a written brief <ArrowRight size={16} /></Link>
              <Link to="/services" className="luxury-button luxury-button-ghost">View services</Link>
            </div>
          </Reveal>
          <Reveal className="luxury-hero-art-wrap" delay={140}>
            <div className="luxury-hero-art how-it-works-art">
              <div className="luxury-art-arch" />
              <div className="luxury-art-disc" />
              <div className="luxury-art-ring luxury-art-ring-one" />
              <div className="luxury-art-ring luxury-art-ring-two" />
              <div className="luxury-art-letter">W</div>
              <div className="luxury-art-word">WORKFLOW</div>
              <div className="luxury-art-caption">UNDERSTAND · PLAN · EXECUTE</div>
              <div className="luxury-art-side">WRITTEN · DIRECT · CLEAR</div>
              <div className="luxury-art-index">02 / 06</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="process-highlight-strip">
        <div className="luxury-shell process-highlight-grid">
          <div><strong>100%</strong><span>Upfront payment before work begins</span></div>
          <div><strong>01</strong><span>Point of contact from brief to delivery</span></div>
          <div><strong>UK · IE</strong><span>Working hours aligned to UK and Irish time</span></div>
          <div><strong>WRITTEN</strong><span>Email, WhatsApp and LinkedIn communication</span></div>
        </div>
      </section>

      <section className="luxury-process-section">
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

      <section className="process-method-section">
        <div className="luxury-shell">
          <Reveal className="luxury-section-heading">
            <div>
              <p className="luxury-section-kicker">How the work runs</p>
              <h2>A simple five-step working method.</h2>
            </div>
          </Reveal>
          <div className="method-grid">
            {process.map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 55}>
                <article className="method-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="payment-section">
        <div className="luxury-shell payment-layout">
          <Reveal>
            <p className="luxury-section-kicker">Payment</p>
            <h2>Clear before work begins.</h2>
            <p className="section-lead">Payment is arranged according to the agreed service and scope. Third-party subscriptions, platforms, domains, email accounts or paid tools are separate unless specifically stated otherwise.</p>
          </Reveal>
          <div className="payment-grid">
            {payments.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 55}>
                <article className="payment-card">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="communication-section">
        <div className="luxury-shell communication-grid">
          <Reveal className="communication-dark">
            <MessageSquareText />
            <p className="luxury-section-kicker luxury-kicker-light">Direct communication</p>
            <h2>Clear communication. Clear expectations.</h2>
            <p>Email is the primary written channel. LinkedIn can be used for professional project-related communication and WhatsApp is available when quick clarification or coordination is required.</p>
            <div className="communication-tags">
              <span>Email</span><span>LinkedIn</span><span>WhatsApp</span><span>Written updates</span>
            </div>
          </Reveal>
          <Reveal className="communication-light" delay={100}>
            <ShieldCheck />
            <p className="luxury-section-kicker">Responsible work</p>
            <h2>B2B, confidential and documented.</h2>
            <ul>
              <li><Check /> B2B communication only</li>
              <li><Check /> GDPR and PECR-aware approach</li>
              <li><Check /> Business-professional data</li>
              <li><Check /> Unsubscribe and opt-out handling</li>
              <li><Check /> Client data treated confidentially</li>
              <li><Check /> Client retains control of account access and settings</li>
            </ul>
            <p className="fine-print">This is not legal advice. Each client remains responsible for confirming the lawful basis and requirements that apply to their activity.</p>
          </Reveal>
        </div>
      </section>

      <section className="reporting-section">
        <div className="luxury-shell reporting-grid">
          <Reveal>
            <FileCheck2 />
            <p className="luxury-section-kicker">Reporting</p>
            <h2>Real numbers, reported honestly.</h2>
            <p>Reporting is specific to the selected service. Depending on the work, this can include open, reply and click-through rates, bounce rate and inbox-placement observations, LinkedIn connection acceptance, engagement growth, verified leads and qualified conversations.</p>
          </Reveal>
          <Reveal delay={110}>
            <div className="reporting-matrix">
              <span>Open %</span><span>Reply %</span><span>Click-through %</span><span>Bounce rate</span><span>LinkedIn acceptance %</span><span>Engagement growth</span><span>Verified leads delivered</span><span>Qualified conversations</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="why-work-section">
        <div className="luxury-shell">
          <Reveal>
            <p className="luxury-section-kicker">Why work with me</p>
            <h2>No agency layers. No account managers. Just direct, accountable work.</h2>
          </Reveal>
          <div className="why-work-grid">
            {[
              ["Direct freelancer support", "The person you brief is the person doing the work."],
              ["Independent & detail-focused", "Reliable delivery without unnecessary micro-management."],
              ["UK & Irish working hours", "Work aligned with UK and Irish time, Monday to Friday."],
              ["Clear written communication", "Email, WhatsApp and LinkedIn keep requirements, approvals and updates documented."],
              ["Confidential & responsible data handling", "Client data is treated as confidential and is not shared with third parties."],
              ["Personal attention & accountability", "One direct working relationship with clear ownership of delivery."],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 45}><article className="why-work-card"><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-contact-section">
        <div className="luxury-shell luxury-contact-inner">
          <Reveal>
            <div className="luxury-contact-overline"><MessageSquareText size={16} /> Ready to start?</div>
            <h2>Send me what you need. I’ll tell you the most practical way forward.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>Share the business, objective, service you have in mind and any important timeline. Written is enough.</p>
            <Link to="/contact" className="luxury-button luxury-button-light">Send written enquiry <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </PageFrame>
  );
}
