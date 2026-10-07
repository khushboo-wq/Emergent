import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";

const sections = [
  ["Scope", "I provide only the services and deliverables agreed in writing. New tasks, added volume, changed targeting, or substantial revisions may require a separate scope and fee."],
  ["Payment", "Payment is 100% upfront before work starts. Monthly services use flat pricing, while Business Support and Lead Generation follow the stated hourly or per-contact basis."],
  ["Client responsibilities", "You provide accurate instructions, timely approvals, lawful access, source material, and any required third-party subscriptions. You remain responsible for final business claims and legal decisions."],
  ["Delivery and communication", "Communication is written through email or WhatsApp. Delivery timing depends on access, approvals, platform limits, technical dependencies, and any stated warm-up period."],
  ["Cancellations and current billing month", "Standalone services do not renew unless agreed. For an active monthly service, the current paid billing month is completed in full and fees already applied to that period are not partially refunded."],
  ["Results and platforms", "I do not guarantee sales, leads, reach, inbox placement, or platform performance. Third-party platforms can change limits, policies, access, and results outside my control."],
  ["Confidentiality and data", "I treat client information as confidential and use it for the agreed work. Each party should protect account credentials and notify the other promptly about relevant access or security issues."],
  ["Contact", "Questions about these terms can be sent to khushboo@arcturusprofessional.com before payment or work begins."],
];

export default function Terms() {
  return <PageFrame><Seo path="/terms" /><article className="premium-panel mx-5 my-12 max-w-4xl rounded-[2rem] border border-[#ddd8cd] bg-white px-6 py-12 sm:mx-8 sm:px-10 sm:py-16 lg:mx-auto lg:my-20" data-testid="terms-page"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4263aa]">Last updated 7 October 2026</p><h1 className="mt-5 break-words font-serif text-[2.4rem] text-[#0f172a] sm:text-6xl" data-testid="terms-heading">Terms of Service</h1><p className="mt-7 text-lg leading-8 text-[#475569]">These standard terms support clear written engagements with Arcturus Professional Services. The specific written scope and invoice for your service take priority where they add agreed detail.</p>{sections.map(([title, copy], index) => <section key={title} className="border-b border-[#e2dfd8] py-8 last:border-b-0" data-testid={`terms-section-${index + 1}`}><h2 className="break-words font-serif text-3xl text-[#0f2942]">{title}</h2><p className="mt-4 text-base leading-8 text-[#64748b]">{copy}</p></section>)}</article></PageFrame>;
}
