import { ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { orderedServices, getContactHref } from "@/lib/site";

export default function ServiceFitGuide() {
  const [selectedSlug, setSelectedSlug] = useState("");
  const selectedService = orderedServices.find((service) => service.slug === selectedSlug);

  return (
    <section className="premium-panel rounded-[2rem] border border-[#cbd5e1] bg-white p-6 sm:p-8" data-testid="service-fit-guide">
      <div className="flex items-start gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#fff5cf] text-[#92400e]"><Sparkles className="size-4" /></span>
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#92400e]" data-testid="service-fit-guide-eyebrow">Not sure where to begin?</p>
          <h2 className="mt-2 font-serif text-2xl text-[#0f172a]" data-testid="service-fit-guide-heading">Find your most useful starting point.</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748b]" data-testid="service-fit-guide-description">Choose the need that sounds closest. You can still describe a broader brief in your email.</p>
        </div>
      </div>
      <div className="mt-7 grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div>
          <label htmlFor="service-fit-select" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748b]" data-testid="service-fit-guide-label">I need help with</label>
          <select id="service-fit-select" value={selectedSlug} onChange={(event) => setSelectedSlug(event.target.value)} className="mt-2 h-12 w-full rounded-md border border-[#cbd5e1] bg-[#faf9f6] px-4 text-sm text-[#0f2942] outline-none transition-colors duration-200 focus:border-[#c59b27] focus:ring-2 focus:ring-[#c59b27]/20" data-testid="service-fit-guide-select">
            <option value="">Select a service</option>
            {orderedServices.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
          </select>
        </div>
        {selectedService ? <div className="flex flex-wrap gap-3" data-testid="service-fit-guide-result"><Link to={`/services/${selectedService.slug}`} className="inline-flex h-11 items-center gap-2 rounded-md border border-[#0f2942] px-4 text-sm font-semibold text-[#0f2942] transition-colors duration-200 hover:bg-[#f3f1ec]" data-testid="service-fit-guide-details-link">View details <ArrowUpRight className="size-4" /></Link><a href={getContactHref(selectedService)} className="inline-flex h-11 items-center gap-2 rounded-md bg-[#0f2942] px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1e3a5f]" data-testid="service-fit-guide-contact-link">Enquire <ArrowUpRight className="size-4" /></a></div> : <span className="text-sm text-[#64748b]" data-testid="service-fit-guide-hint">Select an option to see the next step.</span>}
      </div>
    </section>
  );
}
