import { ArrowUpRight, Check, ChevronRight, MessageSquareText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import { FaWhatsapp } from "react-icons/fa6";
import { getService, servicePageExtras, whatsappAbout } from "@/lib/site";
import IsoIllustration from "@/components/IsoIllustration";
import AmbientScene from "@/components/AmbientScene";
import { resources } from "@/lib/resources";


export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) {
    return <PageFrame><section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10" data-testid="service-not-found"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#92400e]" data-testid="service-not-found-label">404 / Service not found</p><h1 className="mt-4 font-serif text-5xl text-[#0f172a]" data-testid="service-not-found-heading">That service page is not here.</h1><Link to="/services" className="mt-8 inline-flex text-sm font-semibold text-[#0f2942]" data-testid="service-not-found-link">Back to services</Link></section></PageFrame>;
  }
  const extras = servicePageExtras[service.slug];
  const path = `/services/${service.slug}`;
  const guides = resources.filter((resource) => resource.serviceSlug === service.slug).slice(0, 3);
  return (
    <PageFrame key={service.slug}>
      <Seo path={path} />
      <nav className="mx-auto flex max-w-7xl items-center gap-2 px-5 pt-8 text-xs text-[#64748b] sm:px-8 lg:px-10" aria-label="Breadcrumb" data-testid="service-breadcrumbs">
        <Link to="/" className="hover:text-[#0f2942]" data-testid="breadcrumb-home-link">Home</Link><ChevronRight className="size-3" /><Link to="/services" className="hover:text-[#0f2942]" data-testid="breadcrumb-services-link">Services</Link><ChevronRight className="size-3" /><span aria-current="page" data-testid="breadcrumb-current">{service.title}</span>
      </nav>
      <section className="border-b border-[#e2dfd8] service-detail-hero-rich" data-service={service.slug} data-testid="service-detail-hero"><AmbientScene type={service.slug === "lead-generation" ? "analytics" : service.slug === "email-setup" ? "architecture" : service.slug === "email-outreach" ? "workflow" : "office"} className="service-detail-ambient-scene" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.48fr] lg:items-end lg:gap-20 lg:px-10 lg:py-24">
          <div className="min-w-0">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4263aa]" data-testid="service-detail-eyebrow">{service.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl break-words font-serif text-[2.4rem] leading-[1.08] tracking-[0.02em] text-[#0f172a] sm:text-6xl lg:text-7xl" data-testid="service-detail-heading">{service.slug === "linkedin-management" ? "LinkedIn Management Services" : service.title}</h1>
            <p className="sd-lead" data-testid="service-summary">{extras.summary}</p>
            <div className="sd-hero-actions">
              <Link to="/contact" className="sd-btn sd-btn-primary" data-testid="service-start-link">Start this service <ArrowUpRight className="size-4" /></Link>
              <a href={whatsappAbout(service.title)} target="_blank" rel="noreferrer" className="sd-btn sd-btn-ghost" data-testid="service-hero-whatsapp"><FaWhatsapp /> Ask on WhatsApp</a>
            </div>
            <p className="sd-updated" data-testid="service-last-updated">Last updated: {extras.lastUpdated}</p>
          </div>
          <div className="service-hero-stack"><IsoIllustration slug={service.slug} /><div className="premium-panel service-price-panel rounded-[2rem] bg-[#0f2942] p-7 text-white sm:p-9" data-testid="service-price-hero"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9bc8c0]">Price</p>{service.tiers ? <ul className="sd-hero-tiers" data-testid="service-pricing">{service.tiers.map((tier) => <li key={tier.name}><strong>{tier.price}</strong><span className="service-price-gbp">or {tier.priceGbp}</span><small>{tier.name}: {tier.detail}</small></li>)}</ul> : <><p className="font-highlight mt-4 break-words text-4xl tracking-tight text-white" data-testid="service-pricing">{service.price}</p>{service.priceGbp ? <p className="service-price-gbp sd-hero-gbp">or {service.priceGbp}</p> : null}</>}</div></div>
        </div>
      </section>

      <div className="sd-body" data-testid="service-page-content">
        <section className="sd-section" data-testid="service-plain-section">
          <p className="sd-kicker">In plain words</p>
          <h2 className="sd-h2">What is {service.title.replace("B2B ", "")}?</h2>
          <div className="sd-plain-grid">
            <article><span>What I do</span><p>{extras.plain.what}</p></article>
            <article><span>Why it helps you</span><p>{extras.plain.why}</p></article>
            <article><span>What you get</span><p>{extras.plain.result}</p></article>
          </div>
          <p className="sd-fit"><strong>Good fit for:</strong> {service.audience}</p>
        </section>

        <section className="sd-section" data-testid="service-included-section">
          <p className="sd-kicker">Service scope</p>
          <h2 className="sd-h2" data-testid="service-inclusions-heading">What&apos;s included</h2>
          <ul className="sd-checklist">{service.inclusions.map((item, index) => <li key={item} data-testid={`service-inclusion-${index + 1}`}><Check className="size-4" aria-hidden="true" />{item}</li>)}</ul>
        </section>

        <section className="sd-section" data-testid="service-process-section">
          <p className="sd-kicker">Step by step</p>
          <h2 className="sd-h2" data-testid="service-process-heading">How it works</h2>
          <ol className="sd-steps">{service.process.map((step, index) => <li key={step.label} data-testid={`service-process-step-${index + 1}`}><span className="sd-step-num">{index + 1}</span><div><h3>{step.label}</h3><p>{step.detail}</p></div></li>)}</ol>
          {service.timeline ? <p className="sd-note" data-testid="service-timeline-copy"><strong>Timing:</strong> {service.timeline}</p> : null}
        </section>

        <section className="sd-section" data-testid="service-commercial-section">
          <p className="sd-kicker">No surprises</p>
          <h2 className="sd-h2">Payment and what you need</h2>
          <div className="sd-price-grid sd-grid-3">
            <article className="sd-card">
              <span className="sd-card-label">How payment works</span>
              <p className="sd-card-text">{extras.paymentTerms}</p>
            </article>
            <article className="sd-card">
              <span className="sd-card-label">Needed before we start</span>
              <ul className="sd-dash">{service.requirements.map((item, index) => <li key={item} data-testid={`service-requirement-${index + 1}`}>{item}</li>)}</ul>
            </article>
            <article className="sd-card">
              <span className="sd-card-label">Not included</span>
              <ul className="sd-dash">{service.exclusions.map((item, index) => <li key={item} data-testid={`service-exclusion-${index + 1}`}>{item}</li>)}</ul>
            </article>
          </div>
        </section>

        <section className="sd-section sd-two" data-testid="service-updates-section">
          <div>
            <p className="sd-kicker">Written updates</p>
            <h2 className="sd-h2" data-testid="service-reporting-heading">What you&apos;ll see in your updates</h2>
            <ul className="sd-checklist sd-checklist-one">{extras.reporting.map((item, index) => <li key={item} data-testid={`service-reporting-item-${index + 1}`}><Check className="size-4" aria-hidden="true" />{item}</li>)}</ul>
          </div>
          <div>
            <p className="sd-kicker">Jargon-free</p>
            <h2 className="sd-h2">Words explained, simply</h2>
            <dl className="sd-glossary">{extras.glossary.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.meaning}</dd></div>)}</dl>
          </div>
        </section>

        {extras.faqs.length ? <section className="sd-section" data-testid="service-faq-section">
          <p className="sd-kicker">Quick answers</p>
          <h2 className="sd-h2" data-testid="service-faq-heading">Frequently asked questions</h2>
          <div className="sd-faq">{extras.faqs.map((faq, index) => <details key={faq.question} data-testid={`service-faq-${index + 1}`} open={index === 0}><summary data-testid={`service-faq-question-${index + 1}`}><h3>{faq.question}</h3><ChevronRight className="size-5" aria-hidden="true" /></summary><p data-testid={`service-faq-answer-${index + 1}`}>{faq.answer}</p></details>)}</div>
        </section> : null}

        <section className="sd-section sd-related" data-testid="service-related-section">
          <h2 className="sd-h3" data-testid="service-related-heading">Often paired with</h2>
          <div className="sd-chips">{extras.relatedSlugs.map((relatedSlug) => { const related = getService(relatedSlug); return related ? <Link key={related.slug} to={`/services/${related.slug}`} data-testid={`service-related-link-${related.slug}`}>{related.title} <ArrowUpRight className="size-4" /></Link> : null; })}</div>
          {guides.length ? <><h2 className="sd-h3 sd-gap" data-testid="service-resource-links">Helpful guides</h2>
          <ul className="sd-guides">{guides.map((resource) => <li key={resource.slug}><Link to={`/resources/${resource.slug}`} data-testid={`service-resource-link-${resource.slug}`}><strong>{resource.title}</strong><small>{resource.readTime}</small></Link></li>)}</ul></> : null}
        </section>
      </div>

      <section className="mx-5 mb-20 rounded-[2rem] bg-[#0f2942] px-6 py-12 text-white sm:mx-8 sm:mb-28 sm:px-10 lg:mx-auto lg:max-w-7xl lg:px-14" data-testid="service-bottom-cta" data-own-cta=""><MessageSquareText className="size-6 text-[#9bc8c0]" /><p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9bc8c0]">Written enquiries only</p><div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><h2 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl" data-testid="service-bottom-cta-heading">Ready to start {service.title}?</h2><div className="flex flex-wrap gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#0f2942] hover:bg-[#dce6ff]" data-testid="service-contact-form-link">Use the contact form <ArrowUpRight className="size-4" /></Link></div></div></section>
    </PageFrame>
  );
}
