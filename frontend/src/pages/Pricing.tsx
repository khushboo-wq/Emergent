import { ArrowUpRight, Check, CreditCard, Receipt, ShieldCheck, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import IsoIllustration from "@/components/IsoIllustration";
import { orderedServices, servicePageExtras, WHATSAPP_LINK } from "@/lib/site";

const billing: Record<string, string> = {
  "linkedin-management": "Monthly",
  "email-outreach": "Monthly",
  "business-support": "Hourly",
  "lead-generation": "Per list",
  "ai-video-creation": "Monthly",
  "email-setup": "One-time",
};

const faqs = [
  ["Are these prices fixed?", "Yes. Every price on this page is the published price for the agreed scope. If you need extra volume or new tasks, I quote them in writing before any work starts."],
  ["How does payment work?", "Work starts after a 50% advance. Monthly services are paid 50% at the start and 50% at the end of each month. One-time work, Lead Generation and Business Support: the remaining 50% is paid on delivery."],
  ["How do I pay?", "Payments are made via Wise, in euro. You receive a written invoice before each payment."],
  ["What is not included in the price?", "Paid third-party tools stay with you: LinkedIn Sales Navigator, Hootsuite, domains, email accounts, hosting and similar subscriptions."],
  ["Is there a long contract?", "No. Monthly services run month to month. If you stop, the current billing month is completed in full."],
];

export default function Pricing() {
  return (
    <PageFrame>
      <Seo path="/pricing" />
      <section className="luxury-hero pricing-hero" data-testid="pricing-hero">
        <div className="luxury-shell pricing-hero-inner">
          <div>
            <p className="luxury-eyebrow"><span>€</span> Pricing · all prices in euro</p>
            <h1>Clear prices for every service.</h1>
            <p className="luxury-hero-lead">Six services, one flat published price each. No packages to decode and no hidden fees. Pick what you need, send a short written brief, and I confirm the scope before any payment.</p>
            <div className="luxury-hero-actions">
              <Link to="/contact" className="luxury-button luxury-button-dark">Send a written brief <ArrowUpRight size={16} /></Link>
              <a href={WHATSAPP_LINK + encodeURIComponent("Pricing question")} target="_blank" rel="noreferrer" className="luxury-button luxury-button-ghost">Ask on WhatsApp</a>
            </div>
          </div>
          <div className="pricing-hero-terms" aria-label="Payment terms summary">
            <div><Wallet /><strong>50% advance</strong><span>Work starts after the advance</span></div>
            <div><Receipt /><strong>50% on delivery</strong><span>Monthly: 50% at the end of the month</span></div>
            <div><CreditCard /><strong>Paid via Wise</strong><span>Written invoice, in euro</span></div>
          </div>
        </div>
      </section>

      <section className="pricing-grid-section" data-testid="pricing-grid">
        <div className="luxury-shell">
          <div className="pricing-grid">
            {orderedServices.map((service, index) => {
              const extras = servicePageExtras[service.slug];
              return (
                <article key={service.slug} className="pricing-card" data-service-slug={service.slug} data-testid={`pricing-card-${service.slug}`}>
                  <div className="pricing-card-top">
                    <span className="pricing-card-index">0{index + 1}</span>
                    <span className="pricing-card-billing">{billing[service.slug]}</span>
                  </div>
                  <IsoIllustration slug={service.slug} className="pricing-card-iso" />
                  <h2>{service.title}</h2>
                  <p className="pricing-card-price">{service.price}</p>
                  <p className="pricing-card-note">{service.priceNote}</p>
                  <ul>
                    {service.inclusions.slice(0, 4).map((item) => <li key={item}><Check size={16} />{item}</li>)}
                  </ul>
                  <p className="pricing-card-terms">{extras.paymentTerms}</p>
                  <div className="pricing-card-actions">
                    <Link to={`/services/${service.slug}`} className="pricing-card-link">Full details <ArrowUpRight size={15} /></Link>
                    <Link to={`/contact?service=${service.slug}`} className="pricing-card-cta">Start this service</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pricing-info-section" data-testid="pricing-info">
        <div className="luxury-shell pricing-info-grid">
          <div className="pricing-info-card">
            <ShieldCheck />
            <h2>What every price includes</h2>
            <p>The agreed work, done by me personally, written updates and reporting where the service includes it. No agency mark-up and no hand-offs.</p>
          </div>
          <div className="pricing-info-card">
            <Receipt />
            <h2>Paid separately by you</h2>
            <p>Third-party subscriptions stay in your name and under your control: Sales Navigator, Hootsuite, domains, email accounts, hosting and similar tools.</p>
          </div>
        </div>
      </section>

      <section className="pricing-faq-section" data-testid="pricing-faq">
        <div className="luxury-shell">
          <p className="luxury-section-kicker">Pricing questions</p>
          <h2>Before you decide.</h2>
          <div className="pricing-faq-grid">
            {faqs.map(([q, a]) => <article key={q} className="pricing-faq"><h3>{q}</h3><p>{a}</p></article>)}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
