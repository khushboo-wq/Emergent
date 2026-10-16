import { ArrowUpRight, CreditCard, Receipt, ShieldCheck, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import IsoIllustration from "@/components/IsoIllustration";
import { ALL_IN_PLAN, orderedServices, WHATSAPP_LINK } from "@/lib/site";

const billing: Record<string, string> = {
  "linkedin-management": "Monthly",
  "email-outreach": "Monthly",
  "business-support": "Hourly",
  "lead-generation": "Per lead",
  "email-setup": "One-time",
};

const faqs = [
  ["Are these prices fixed?", "Yes. Every price on this page is the published price for the agreed scope. If you need extra volume or new tasks, I quote them in writing before any work starts."],
];

export default function Pricing() {
  return (
    <PageFrame>
      <Seo path="/pricing" />
      <section className="luxury-hero pricing-hero" data-testid="pricing-hero">
        <div className="luxury-shell pricing-hero-inner">
          <div>
            <p className="luxury-eyebrow"><span>€</span> Pricing · in euro or pound sterling</p>
            <h1>Clear prices for every service.</h1>
            <p className="luxury-hero-lead">Five services, each with a clear published price, or all five together in one plan. No hidden fees. Pick what you need, send a short written brief, and I confirm the scope before any payment.</p>
            <div className="luxury-hero-actions">
              <Link to="/contact" className="luxury-button luxury-button-dark">Send a written brief <ArrowUpRight size={16} /></Link>
              <a href={WHATSAPP_LINK + encodeURIComponent("Pricing question")} target="_blank" rel="noreferrer" className="luxury-button luxury-button-ghost">Ask on WhatsApp</a>
            </div>
          </div>
          <div className="pricing-hero-terms" aria-label="Payment terms summary">
            <div><Wallet /><strong>50% advance</strong><span>Work starts after the advance</span></div>
            <div><Receipt /><strong>50% on delivery</strong><span>Monthly: 50% at the end of the month</span></div>
            <div><CreditCard /><strong>Paid via Wise</strong><span>Invoice in euro or pounds</span></div>
          </div>
        </div>
      </section>

      <section className="pricing-grid-section" data-testid="pricing-grid">
        <div className="luxury-shell">
          <div className="pricing-grid">
            {orderedServices.map((service, index) => {
                            return (
                <article key={service.slug} className="pricing-card" data-service-slug={service.slug} data-testid={`pricing-card-${service.slug}`}>
                  <div className="pricing-card-top">
                    <span className="pricing-card-index">0{index + 1}</span>
                    <span className="pricing-card-billing">{billing[service.slug]}</span>
                  </div>
                  <IsoIllustration slug={service.slug} className="pricing-card-iso" />
                  <h2>{service.title}</h2>
                  {service.tiers ? <div className="pricing-card-tiers">{service.tiers.map((tier) => <div key={tier.name}><strong>{tier.price}{tier.priceGbp ? <em> / {tier.priceGbp.replace(" / month", "")}</em> : null}</strong><span>{tier.name}</span><p>{tier.detail}</p></div>)}</div> : <>
                  <p className="pricing-card-price">{service.price}</p>
                  {service.priceGbp ? <p className="pricing-card-gbp">or {service.priceGbp}</p> : null}
                  <p className="pricing-card-note">{service.priceNote}</p></>}
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

      <section className="allin-section" data-testid="pricing-all-in">
        <div className="luxury-shell">
          <article className="allin-card">
            <div className="allin-head">
              <span className="allin-badge">Everything together</span>
              <h2>{ALL_IN_PLAN.title}</h2>
              <p className="allin-sub">One monthly price for every service, run by one person.</p>
              <p className="allin-price">{ALL_IN_PLAN.price}</p>
              <p className="allin-gbp">or {ALL_IN_PLAN.priceGbp}</p>
              <p className="allin-saving">{ALL_IN_PLAN.saving}</p>
              <Link to={`/contact?service=${ALL_IN_PLAN.slug}`} className="allin-cta">Start the All-in Plan <ArrowUpRight size={16} /></Link>
            </div>
            <div className="allin-body">
              <p className="allin-label">What&apos;s in it</p>
              <ul>
                {ALL_IN_PLAN.items.map((item) => <li key={item.slug}><Link to={`/services/${item.slug}`}><span>{item.label}</span><ArrowUpRight size={15} /></Link></li>)}
              </ul>
              <p className="allin-note">Tap any line to see exactly what that part covers.</p>
            </div>
          </article>
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
