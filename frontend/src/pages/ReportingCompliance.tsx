import { ArrowRight, Check, FileCheck2, ShieldCheck } from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import AmbientScene from "@/components/AmbientScene";

const reporting = [
  ["LinkedIn Management", "/services/linkedin-management"],
  ["B2B Email Outreach", "/services/email-outreach"],
  ["Business Support", "/services/business-support"],
  ["Lead Generation", "/services/lead-generation"],
  ["Email Setup", "/services/email-setup"],
];

const compliance = [
  "B2B communication only",
  "GDPR and PECR-aware approach",
  "Business-professional data",
  "Every unsubscribe and opt-out respected",
  "Client data treated as confidential",
  "Client retains control of account access and settings",
];

const tools = [
  ["LinkedIn Management", "LinkedIn · LinkedIn Sales Navigator · Hootsuite · Google Gemini, Flow and Veo 3 for short videos"],
  ["B2B Email Outreach", "Instantly.ai · Mailivery"],
  ["Lead Generation", "LinkedIn Sales Navigator · Apollo · UseBouncer"],
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
              What you will see from the work, how your data is kept safe, and the tools each service uses.
            </p>
            <div className="luxury-hero-actions">
              <Link to="/how-i-work" className="luxury-button luxury-button-dark">How I work <ArrowRight size={16} /></Link>
              <Link to="/contact" className="luxury-button luxury-button-ghost">Ask a question</Link>
            </div>
          </Reveal>
          <Reveal className="luxury-hero-art-wrap" delay={120}>
            <HeroShowcase kicker="Arcturus" index="04 / 06" title="Clear reports. Careful data." subtitle="B2B-only, GDPR and PECR-aware working." slug="email-setup" chips={["Written reports","B2B data","Your accounts, your control"]} />
          </Reveal>
        </div>
      </section>

      <section className="reporting-section">
        <div className="luxury-shell reporting-grid">
          <Reveal>
            <FileCheck2 />
            <p className="luxury-section-kicker">Reporting</p>
            <h2>Numbers that lead to useful decisions.</h2>
            <p>Every service sends different numbers. Each service page lists exactly what its updates include, under &ldquo;What you&apos;ll see in your updates&rdquo;.</p>
          </Reveal>
          <div className="reporting-matrix">
            {reporting.map(([title, href], index) => (
              <Reveal key={title} delay={index * 70}>
                <Link to={href} className="reporting-detail-card reporting-link-card">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>See the updates <ArrowRight size={14} /></p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="communication-section reporting-compliance-only">
        <div className="luxury-shell communication-grid">
          <Reveal className="communication-light" delay={100}>
            <ShieldCheck />
            <p className="luxury-section-kicker">Compliance</p>
            <h2>Responsible B2B work.</h2>
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

    </PageFrame>
  );
}
