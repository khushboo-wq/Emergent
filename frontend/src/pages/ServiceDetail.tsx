import { ArrowUpRight, Check, ChevronRight, MessageSquareText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import { CONTACT_EMAIL, getService, servicePageExtras } from "@/lib/site";
import IsoIllustration from "@/components/IsoIllustration";
import AmbientScene from "@/components/AmbientScene";
import { resources } from "@/lib/resources";

const WHATSAPP_URL = "https://wa.me/919911284362";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) {
    return <PageFrame><section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10" data-testid="service-not-found"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#92400e]" data-testid="service-not-found-label">404 / Service not found</p><h1 className="mt-4 font-serif text-5xl text-[#0f172a]" data-testid="service-not-found-heading">That service page is not here.</h1><Link to="/services" className="mt-8 inline-flex text-sm font-semibold text-[#0f2942]" data-testid="service-not-found-link">Back to services</Link></section></PageFrame>;
  }
  const extras = servicePageExtras[service.slug];
  const path = `/services/${service.slug}`;
  return (
    <PageFrame key={service.slug}>
      <Seo path={path} />
      <nav className="mx-auto flex max-w-7xl items-center gap-2 px-5 pt-8 text-xs text-[#64748b] sm:px-8 lg:px-10" aria-label="Breadcrumb" data-testid="service-breadcrumbs">
        <Link to="/" className="hover:text-[#0f2942]" data-testid="breadcrumb-home-link">Home</Link><ChevronRight className="size-3" /><Link to="/services" className="hover:text-[#0f2942]" data-testid="breadcrumb-services-link">Services</Link><ChevronRight className="size-3" /><span aria-current="page" data-testid="breadcrumb-current">{service.title}</span>
      </nav>
      <section className="border-b border-[#e2dfd8] service-detail-hero-rich" data-service={service.slug} data-testid="service-detail-hero"><AmbientScene type={service.slug === "lead-generation" ? "analytics" : service.slug === "email-setup" ? "architecture" : service.slug === "email-outreach" ? "workflow" : service.slug === "ai-video-creation" ? "contact" : "office"} className="service-detail-ambient-scene" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.48fr] lg:items-end lg:gap-20 lg:px-10 lg:py-24">
          <div className="min-w-0"><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4263aa]" data-testid="service-detail-eyebrow">{service.eyebrow}</p><h1 className="mt-5 max-w-3xl break-words font-serif text-[2.4rem] leading-[1.08] tracking-[0.02em] text-[#0f172a] sm:text-6xl lg:text-7xl" data-testid="service-detail-heading">{service.slug === "linkedin-management" ? "LinkedIn Management Services" : service.title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-[#475569]" data-testid="service-summary">{extras.summary}</p>
          {service.slug === "linkedin-management" ? <p className="mt-4 max-w-3xl text-sm leading-7 text-[#64748b]" data-testid="linkedin-keyword-context">These LinkedIn management services cover the practical work behind a consistent B2B presence: profile optimisation, professional content, targeted prospecting, connection outreach, follow-ups and reporting.</p> : null}<p className="mt-4 max-w-3xl text-sm leading-7 text-[#64748b]" data-testid="service-overview-copy">{service.overview}</p><p className="mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#64748b]" data-testid="service-last-updated">Last updated: {extras.lastUpdated}</p></div>
          <div className="service-hero-stack"><IsoIllustration slug={service.slug} /><div className="premium-panel premium-lift service-price-panel rounded-[2rem] bg-[#0f2942] p-7 text-white sm:p-9" data-testid="service-price-hero"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9bc8c0]">Pricing</p><p className="font-highlight mt-5 break-words text-4xl tracking-tight text-white" data-testid="service-pricing">{service.price}</p><p className="mt-3 text-sm leading-6 text-[#cbd5e1]" data-testid="service-pricing-note">{service.priceNote}</p></div></div>
        </div>
      </section>

      <section className="service-visual-summary" data-testid="service-visual-summary">
        <div className="service-visual-summary-inner">
          <div className="service-visual-kicker">01 / SERVICE AT A GLANCE</div>
          <div className="service-visual-title">{service.title}</div>
          <div className="service-visual-metrics">
            <div><span>PRICE</span><strong>{service.price}</strong></div>
            <div><span>WORKFLOW</span><strong>{service.process.length} stages</strong></div>
            <div><span>WRITTEN</span><strong>Clear updates</strong></div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10" data-testid="service-page-content">
        <section className="grid gap-10 border-b border-[#e2dfd8] pb-16 lg:grid-cols-[0.58fr_1fr] lg:gap-20" data-testid="service-included-section"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4263aa]">Service scope</p><h2 className="mt-4 break-words font-serif text-4xl leading-tight text-[#0f172a]" data-testid="service-inclusions-heading">What&apos;s included</h2></div><ul className="grid gap-4 sm:grid-cols-2">{service.inclusions.map((item, index) => <li key={item} className="premium-lift flex gap-3 rounded-2xl border border-[#e2dfd8] bg-white p-5 text-sm leading-6 text-[#475569] shadow-[0_12px_30px_-25px_rgba(15,41,66,0.55)]" data-testid={`service-inclusion-${index + 1}`}><Check className="mt-1 size-4 shrink-0 text-[#2c7a73]" />{item}</li>)}</ul></section>

        <section className="grid gap-10 border-b border-[#e2dfd8] py-16 lg:grid-cols-2 lg:gap-20" data-testid="service-audience-section"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#765b9a]">Best fit</p><h2 className="mt-4 break-words font-serif text-4xl text-[#0f172a]" data-testid="service-audience-heading">Who it&apos;s for</h2><p className="mt-6 text-base leading-8 text-[#475569]" data-testid="service-audience-copy">{service.audience}</p><h3 className="mt-9 border-t border-[#ddd8cd] pt-7 font-serif text-2xl text-[#0f2942]" data-testid="service-exclusions-heading">Scope boundaries</h3><ul className="mt-5 space-y-3">{service.exclusions.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#64748b]" data-testid={`service-exclusion-${index + 1}`}><span className="mt-3 h-px w-4 shrink-0 bg-[#765b9a]" />{item}</li>)}</ul></div><div className="premium-panel rounded-[2rem] bg-[#ece8f4] p-7 sm:p-9"><h3 className="font-serif text-2xl text-[#0f2942]" data-testid="service-requirements-heading">What I need from you</h3><ul className="mt-6 space-y-4">{service.requirements.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#475569]" data-testid={`service-requirement-${index + 1}`}><span className="mt-3 h-px w-4 shrink-0 bg-[#765b9a]" />{item}</li>)}</ul>{service.tools ? <><h3 className="mt-9 border-t border-[#765b9a]/20 pt-7 font-serif text-2xl text-[#0f2942]" data-testid="service-tools-heading">Tools and platforms</h3><p className="mt-4 text-sm leading-6 text-[#64748b]" data-testid="service-tools-copy">{service.tools.join(" · ")}</p></> : null}</div></section>

        <section className="service-commercial-panel" data-testid="service-commercial-section">
          <div className="service-commercial-intro">
            <p className="luxury-section-kicker">Commercial clarity</p>
            <h2>What you should know before we start.</h2>
            <p>Scope, payment, timing and client responsibilities are visible before work begins.</p>
          </div>
          <div className="service-commercial-grid">
            <article className="service-commercial-card service-commercial-price">
              <span className="service-commercial-label">Price</span>
              <strong>{service.price}</strong>
              <p>{service.priceNote}</p>
            </article>
            <article className="service-commercial-card">
              <span className="service-commercial-label">Payment</span>
              <strong>Advance payment</strong>
              <p>{extras.paymentTerms}</p>
            </article>
            <article className="service-commercial-card">
              <span className="service-commercial-label">Client setup</span>
              <strong>Ready before work starts</strong>
              <p>{service.requirements.join(" · ")}</p>
            </article>
            <article className="service-commercial-card service-commercial-wide">
              <span className="service-commercial-label">Important details</span>
              <ul>
                {extras.commercialHighlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {extras.workingNote ? <p className="service-commercial-note">{extras.workingNote}</p> : null}
            </article>
          </div>
        </section>

        <section className="border-b border-[#e2dfd8] py-16 service-process-visual" data-testid="service-process-section"><div className="service-process-orbit" aria-hidden="true"></div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4263aa]">Process</p><h2 className="mt-4 font-serif text-4xl text-[#0f172a]" data-testid="service-process-heading">How it works</h2><div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{service.process.map((step, index) => <div key={step.label} className="rounded-t-[2rem] border border-[#e2dfd8] bg-[#f6f2e9] p-6" data-testid={`service-process-step-${index + 1}`}><span className="font-mono text-[10px] text-[#4263aa]">0{index + 1}</span><h3 className="mt-5 font-serif text-2xl text-[#0f2942]" data-testid={`service-process-title-${index + 1}`}>{step.label}</h3><p className="mt-3 text-sm leading-6 text-[#64748b]" data-testid={`service-process-copy-${index + 1}`}>{step.detail}</p></div>)}</div><p className="mt-8 max-w-3xl text-sm leading-7 text-[#475569]" data-testid="service-timeline-copy"><strong className="text-[#0f2942]">Timing:</strong> {service.timeline}</p></section>

        <section className="grid gap-10 border-b border-[#e2dfd8] py-16 lg:grid-cols-2 lg:gap-20 service-reporting-commercial" data-testid="service-pricing-reporting-section"><div className="rounded-[2rem] bg-[#0f2942] p-7 text-white sm:p-9"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9bc8c0]">Clear cost</p><h2 className="mt-4 font-serif text-4xl text-white" data-testid="service-pricing-heading">Pricing</h2><p className="font-highlight mt-7 text-4xl" data-testid="service-pricing-text">{service.price}</p><p className="mt-4 text-sm leading-6 text-[#cbd5e1]">{service.priceNote}</p></div><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2c7a73]">Written updates</p><h2 className="mt-4 font-serif text-4xl text-[#0f172a]" data-testid="service-reporting-heading">Reporting</h2><ul className="mt-7 space-y-4">{extras.reporting.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#475569]" data-testid={`service-reporting-item-${index + 1}`}><Check className="mt-1 size-4 shrink-0 text-[#2c7a73]" />{item}</li>)}</ul></div></section>

        <section className="py-16" data-testid="service-faq-section"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#765b9a]">Direct answers</p><h2 className="mt-4 break-words font-serif text-4xl text-[#0f172a]" data-testid="service-faq-heading">Frequently asked questions</h2><div className="mt-9 grid gap-4 lg:grid-cols-2">{extras.faqs.map((faq, index) => <article key={faq.question} className="premium-panel premium-lift rounded-2xl border border-[#e2dfd8] bg-white p-6" data-testid={`service-faq-${index + 1}`}><h3 className="font-serif text-xl text-[#0f2942]" data-testid={`service-faq-question-${index + 1}`}>{faq.question}</h3><p className="mt-3 text-sm leading-6 text-[#64748b]" data-testid={`service-faq-answer-${index + 1}`}>{faq.answer}</p></article>)}</div></section>

        <section className="border-t border-[#e2dfd8] py-12" data-testid="service-related-section"><h2 className="font-serif text-3xl text-[#0f172a]" data-testid="service-related-heading">Related services</h2><div className="mt-6 flex flex-wrap gap-3">{extras.relatedSlugs.map((relatedSlug) => { const related = getService(relatedSlug); return related ? <Link key={related.slug} to={`/services/${related.slug}`} className="rounded-full border border-[#cbd5e1] bg-white px-4 py-2 text-sm font-semibold text-[#0f2942] hover:border-[#4263aa]" data-testid={`service-related-link-${related.slug}`}>{related.title} <span className="text-[#64748b]">{related.price}</span></Link> : null; })}</div></section>
      </div>

        <section className="linkedin-resource-links" data-testid="service-resource-links">
          <p className="luxury-section-kicker">Helpful resources</p>
          <h2>Go deeper before you decide.</h2>
          <div className="linkedin-resource-grid">
            {resources.filter((resource) => resource.serviceSlug === service.slug).map((resource) => (
              <Link key={resource.slug} to={`/resources/${resource.slug}`} className="linkedin-resource-link" data-testid={`service-resource-link-${resource.slug}`}>
                <span>{resource.category}</span>
                <strong>{resource.title}</strong>
                <small>{resource.readTime}</small>
              </Link>
            ))}
          </div>
        </section>

      <section className="mx-5 mb-20 rounded-[2rem] bg-[#0f2942] px-6 py-12 text-white sm:mx-8 sm:mb-28 sm:px-10 lg:mx-auto lg:max-w-7xl lg:px-14" data-testid="service-bottom-cta"><MessageSquareText className="size-6 text-[#9bc8c0]" /><p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9bc8c0]">Written enquiries only</p><div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><h2 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl" data-testid="service-bottom-cta-heading">Tell me what you need to move forward.</h2><div className="flex flex-wrap gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#0f2942] hover:bg-[#dce6ff]" data-testid="service-contact-form-link">Use the contact form <ArrowUpRight className="size-4" /></Link><a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex h-12 items-center rounded-md border border-white/30 px-5 text-sm font-semibold text-white hover:bg-white/10" data-testid="service-email-link">Email</a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center rounded-md border border-white/30 px-5 text-sm font-semibold text-white hover:bg-white/10" data-testid="service-whatsapp-link">WhatsApp</a></div></div></section>
    </PageFrame>
  );
}
