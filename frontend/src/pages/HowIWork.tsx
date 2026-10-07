import { Check, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";

export default function HowIWork() {
  return <PageFrame><Seo path="/how-i-work" />
    <section className="relative overflow-hidden border-b border-[#ddd8cd]" data-testid="work-hero"><div className="absolute -right-20 top-8 size-72 rounded-full border border-[#4263aa]/20" aria-hidden="true" /><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4263aa]">Process, payment and communication</p><h1 className="mt-5 max-w-4xl break-words font-serif text-[2.4rem] leading-[1.08] text-[#0f172a] sm:text-7xl" data-testid="work-heading">A clear process, kept in writing.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#475569]" data-testid="work-intro">I keep each engagement straightforward, documented, and easy to follow. There are no discovery calls or call-booking steps.</p></div></section>
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10" data-testid="work-timeline"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2c7a73]">Onboarding</p><h2 className="mt-4 break-words font-serif text-4xl text-[#0f172a]">From agreement to regular delivery</h2><div className="mt-10 grid gap-4 lg:grid-cols-3">{[["Day 1 to 2", "Invoice, payment and access", "I confirm the written scope, send the invoice, receive 100% upfront payment, and collect the agreed access and source material."], ["Day 3 to 5", "Setup and preparation", "I prepare the account, technical setup, targeting, content structure, or task plan required for the selected service."], ["Week 2 onward", "Regular work and reporting", "I complete the agreed work and send regular written reporting. Timings vary for services with a required warm-up period."]].map(([time,title,copy],index)=><article key={time} className={`premium-panel premium-lift rounded-t-[4rem] rounded-b-[2rem] border border-[#ddd8cd] p-7 ${index === 0 ? "bg-[#eef2ff]" : index === 1 ? "bg-[#ece8f4]" : "bg-[#e8f2ef]"}`} data-testid={`work-step-${index+1}`}><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#4263aa]">{time}</p><h3 className="mt-5 break-words font-serif text-2xl text-[#0f2942]">{title}</h3><p className="mt-4 text-sm leading-7 text-[#64748b]">{copy}</p></article>)}</div></section>
    <section className="bg-[#ece8f4]" data-testid="work-terms"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#765b9a]">Commercial clarity</p><h2 className="mt-4 break-words font-serif text-4xl text-[#0f172a]">Payment and service terms</h2></div><div className="space-y-5">{["Payment is 100% upfront before work begins.", "Monthly services use flat pricing. Business Support is billed hourly and Lead Generation is billed per verified contact.", "Each service is standalone unless a written scope combines related services.", "The current paid billing month is always completed in full.", "Third-party subscriptions and tools are paid directly by the client unless stated otherwise."].map((item,index)=><p key={item} className="flex gap-3 text-base leading-7 text-[#475569]" data-testid={`work-term-${index+1}`}><Check className="mt-1 size-5 shrink-0 text-[#2c7a73]" />{item}</p>)}</div></div></section>
    <section className="work-principles-section" data-testid="work-principles">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="work-feature-card work-feature-dark">
            <p className="work-card-kicker">Direct communication</p>
            <h2>Clear communication. Clear expectations.</h2>
            <div className="work-feature-list">
              <p><strong>Email</strong><span>Primary communication for project requirements, updates and deliverables.</span></p>
              <p><strong>LinkedIn</strong><span>Available for professional communication and project-related discussions.</span></p>
              <p><strong>WhatsApp</strong><span>Available when quick clarification or coordination is required.</span></p>
            </div>
            <div className="work-feature-note">No unnecessary meetings or calls. Written communication keeps requirements, approvals and deliverables clear and easy to reference.</div>
          </article>
          <article className="work-feature-card work-feature-light">
            <p className="work-card-kicker">Client-friendly process</p>
            <h2>Requirements → Scope → Payment → Work → Delivery.</h2>
            <div className="work-client-steps">
              <span>01 <b>Requirements</b></span>
              <span>02 <b>Scope agreed</b></span>
              <span>03 <b>Payment</b></span>
              <span>04 <b>Work begins</b></span>
              <span>05 <b>Delivery</b></span>
            </div>
            <p className="work-feature-note">Payment is required upfront before work begins unless a different written arrangement is agreed.</p>
          </article>
        </div>

        <div className="work-tools-block">
          <div>
            <p className="work-card-kicker">Tools & platforms</p>
            <h2>The tools stay visible.</h2>
            <p>Where a service requires a platform or subscription, the relevant tool is clearly stated and third-party costs are paid directly by the client unless explicitly included.</p>
          </div>
          <div className="work-tool-grid">
            <span><strong>LinkedIn Management</strong>LinkedIn · LinkedIn Sales Navigator</span>
            <span><strong>Email Outreach</strong>Instantly.ai</span>
            <span><strong>Lead Generation</strong>LinkedIn Sales Navigator · Apollo · UseBouncer</span>
            <span><strong>AI Video Creation</strong>Google Gemini · Google Flow · Google Veo 3</span>
            <span><strong>Post Scheduling</strong>Hootsuite</span>
            <span><strong>Email Setup</strong>DNS provider · email provider</span>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:px-10" data-testid="work-communication"><div className="premium-panel rounded-[2rem] bg-[#0f2942] p-8 text-white"><MessageSquareText className="size-7 text-[#9bc8c0]" /><h2 className="mt-6 break-words font-serif text-4xl text-white">Written communication only</h2><p className="mt-5 text-base leading-8 text-[#cbd5e1]">I work through email, LinkedIn and WhatsApp so decisions, access, feedback, approvals and delivery notes stay documented. I do not offer unnecessary meetings, phone calls or call-booking appointments.</p></div><div className="premium-panel rounded-[2rem] border border-[#c9ddd8] bg-[#e8f2ef] p-8"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2c7a73]">Responsible outreach</p><h2 className="mt-4 break-words font-serif text-4xl text-[#0f172a]">B2B and confidentiality</h2><p className="mt-5 text-base leading-8 text-[#475569]">My outreach work is B2B only and uses a GDPR and PECR-aware approach. I handle client data confidentially and use it only for the agreed service. This is not legal advice, and clients remain responsible for confirming their own lawful basis and policies.</p><Link to="/contact" className="mt-7 inline-flex rounded-md bg-[#0f2942] px-5 py-3 text-sm font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#243f5c] hover:shadow-lg" data-testid="work-contact-link">Send a written enquiry</Link></div></section>
  </PageFrame>;
}
