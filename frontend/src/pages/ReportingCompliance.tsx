import { ArrowRight, Check, FileCheck2, MessageSquareText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import AmbientScene from "@/components/AmbientScene";

const reporting = [
  ["Email", "Open %, reply %, click-through %, bounce rate, plus inbox-placement observations where available."],
  ["LinkedIn", "Connection acceptance %, engagement growth and qualified conversations created through outreach."],
  ["Lead Generation", "Verified leads delivered, source fields and delivery against the agreed target profile."],
];

const compliance = [
  "B2B communication only",
  "GDPR and PECR-aware approach",
  "Business-professional data",
  "Unsubscribe and opt-out handling",
  "Client data treated as confidential",
  "Client retains control of account access and settings",
];

const tools = [
  ["LinkedIn Management", "LinkedIn · LinkedIn Sales Navigator · Hootsuite"],
  ["Email Outreach", "Instantly.ai"],
  ["Lead Generation", "LinkedIn Sales Navigator · Apollo · UseBouncer"],
  ["AI Video Creation", "Google Gemini · Google Flow · Google Veo 3 · Hootsuite"],
  ["Email Setup", "DNS provider · Email provider"],
];

export default function ReportingCompliance() {
  return (
    <PageFrame>
      <Seo path="/reporting-compliance" />
      <section className="luxury-hero reporting-hero-rich" data-testid="reporting-hero">
        <AmbientScene type="analytics" className="reporting-ambient-scene" />
        <div className="luxury-shell luxury-hero-inner">
          <Reveal className="luxury-hero-copy">
            <p className="luxury-eyebrow"><span>05</span> Reporting · compliance · tools</p>
            <h1>Work you can <em>see, understand and review.</em></h1>
            <p className="luxury-hero-lead">
              Reporting is matched to the service. Communication stays documented. Client accounts and settings remain under the client&apos;s control.
            </p>
            <div className="luxury-hero-actions">
              <Link to="/how-i-work" className="luxury-button luxury-button-dark">How I work <ArrowRight size={16} /></Link>
              <Link to="/contact" className="luxury-button luxury-button-ghost">Ask a question</Link>
            </div>
          </Reveal>
          <Reveal className="luxury-hero-art-wrap" delay={120}>
            <div className="luxury-hero-art">
              <div className="luxury-art-arch" />
              <div className="luxury-art-disc" />
              <div className="luxury-art-ring luxury-art-ring-one" />
              <div className="luxury-art-ring luxury-art-ring-two" />
              <div className="luxury-art-letter">R</div>
              <div className="luxury-art-word">REPORT</div>
              <div className="luxury-art-caption">CLEAR · HONEST · DOCUMENTED</div>
              <div className="luxury-art-side">DATA · PROCESS · CONTROL</div>
              <div className="luxury-art-index">05 / 06</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="process-highlight-strip">
        <div className="luxury-shell process-highlight-grid">
          <div><strong>01</strong><span>Report for each selected service</span></div>
          <div><strong>100%</strong><span>Written communication and documented scope</span></div>
          <div><strong>CLIENT</strong><span>Control of account access and settings</span></div>
          <div><strong>B2B</strong><span>Professional data and responsible outreach</span></div>
        </div>
      </section>

      <section className="reporting-section">
        <div className="luxury-shell reporting-grid">
          <Reveal>
            <FileCheck2 />
            <p className="luxury-section-kicker">Reporting</p>
            <h2>Numbers that lead to useful decisions.</h2>
            <p>Reporting depends on the service and focuses on the activity and signals that help decide what to continue, change or review.</p>
          </Reveal>
          <div className="reporting-matrix">
            {reporting.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 70}>
                <article className="reporting-detail-card">
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
            <p>Email is the primary written channel. LinkedIn can be used for professional project communication, and WhatsApp is available for quick clarification or coordination.</p>
            <div className="communication-tags">
              <span>Email</span><span>LinkedIn</span><span>WhatsApp</span><span>Written updates</span>
            </div>
          </Reveal>
          <Reveal className="communication-light" delay={100}>
            <ShieldCheck />
            <p className="luxury-section-kicker">Compliance</p>
            <h2>Responsible B2B handling.</h2>
            <ul>
              {compliance.map((item) => <li key={item}><Check /> {item}</li>)}
            </ul>
            <p className="fine-print">This is not legal advice. Each client remains responsible for confirming the lawful basis and requirements that apply to their activity.</p>
          </Reveal>
        </div>
      </section>

      <section className="tools-platforms-section" data-testid="reporting-tools">
        <div className="luxury-shell">
          <Reveal className="luxury-section-heading">
            <div>
              <p className="luxury-section-kicker">Tools & platforms</p>
              <h2>Each service has its own working stack.</h2>
            </div>
            <p className="luxury-heading-note">Paid subscriptions remain separate and under the client&apos;s control unless specifically stated otherwise.</p>
          </Reveal>
          <div className="tools-platforms-grid reporting-tools-grid">
            {tools.map(([title, stack], index) => (
              <Reveal key={title} delay={index * 50}>
                <article className="tools-platform-card"><span>0{index + 1}</span><h3>{title}</h3><p>{stack}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-statement-section">
        <div className="luxury-shell luxury-statement-grid">
          <Reveal>
            <p className="luxury-section-kicker luxury-kicker-light">Control stays with you</p>
            <p className="luxury-statement-index">05 / 05</p>
          </Reveal>
          <Reveal delay={110}>
            <h2>Direct work should also mean <em>clear ownership.</em></h2>
            <div className="luxury-statement-points">
              <p><b>01</b> You keep control of your own accounts and settings.</p>
              <p><b>02</b> Important requirements, approvals and deliveries stay in writing.</p>
              <p><b>03</b> Paid third-party tools remain separate unless specifically included.</p>
              <p><b>04</b> No outsourcing of the core work.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="luxury-contact-section">
        <div className="luxury-shell luxury-contact-inner">
          <Reveal>
            <div className="luxury-contact-overline"><MessageSquareText size={16} /> Need clarity before starting?</div>
            <h2>Send the brief. We&apos;ll keep the scope and next step in writing.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>Share the service, goal, audience and timeline. A written enquiry is enough.</p>
            <Link to="/contact" className="luxury-button luxury-button-light">Send written enquiry <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </PageFrame>
  );
}
