import { useState } from "react";
import { ArrowUpRight, Sparkles, WandSparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { orderedServices, getContactHref } from "@/lib/site";
import { matchService, type MatchResult } from "@/lib/serviceMatch";

export default function ServiceFitGuide() {
  const [brief, setBrief] = useState("");
  const [selectedSlug, setSelectedSlug] = useState("");
  const [result, setResult] = useState<MatchResult | null>(null);
  const selectedService = orderedServices.find((service) => service.slug === selectedSlug);
  const titleOf = (slug?: string) => orderedServices.find((service) => service.slug === slug)?.title ?? "";
  const runMatch = () => {
    const next = matchService(brief);
    setResult(next);
    if (next.slug) setSelectedSlug(next.slug);
  };

  return (
    <section className="jev-matcher premium-panel rounded-[2rem] border border-[#cbd5e1] bg-white p-6 sm:p-8" data-testid="service-fit-guide">
      <div className="flex items-start gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eeeaff] text-[#5f54bb]"><Sparkles className="size-4" /></span>
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6658b8]" data-testid="service-fit-guide-eyebrow">Not sure where to begin?</p>
          <h2 className="mt-2 font-serif text-2xl text-[#0f172a]" data-testid="service-fit-guide-heading">Find your most useful starting point.</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748b]" data-testid="service-fit-guide-description">Choose the need that sounds closest. You can still describe a broader brief in your email.</p>
        </div>
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-[#dcd7f4] bg-white/65 p-5 backdrop-blur-sm sm:p-6" data-testid="jev-service-matcher">
        <label htmlFor="service-match-brief" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6658b8]" data-testid="service-match-label">Describe what you need</label>
        <textarea id="service-match-brief" value={brief} onChange={(event) => { setBrief(event.target.value); setResult(null); }} maxLength={1200} rows={4} placeholder="For example: I need a verified list of UK finance directors for an email campaign." className="mt-3 w-full resize-y rounded-xl border border-[#d8d5e8] bg-white/85 px-4 py-3 text-sm leading-6 text-[#0f2942] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[#94a3b8] focus:border-[#7167ca] focus:bg-white focus:ring-4 focus:ring-[#7167ca]/10" data-testid="service-match-input" />
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#64748b]" data-testid="service-match-privacy-note">I use what you write here only to suggest one of the five services.</p>
          <button type="button" onClick={runMatch} disabled={brief.trim().length < 3} className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#102e51,#5f54bb)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(95,84,187,0.85)] transition-[transform,box-shadow,opacity] duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-45" data-testid="service-match-button"><WandSparkles className="size-4" />Match my service</button>
        </div>

        {result && result.kind !== "match" ? <p className="mt-4 rounded-xl border border-[#dcd7f4] bg-[#f6f4ff] px-4 py-3 text-sm leading-6 text-[#3b3f6b]" role="status" data-testid="service-match-error">{result.reason}</p> : null}
        {result?.kind === "match" && result.slug ? <div className="jev-match-result mt-5 rounded-2xl border border-[#bfc9ef] p-5" role="status" data-testid="service-match-result"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#5f54bb]" data-testid="service-match-result-label">Best match for you</p><h3 className="mt-3 font-serif text-2xl text-[#0f2942]" data-testid="service-match-name">{titleOf(result.slug)}</h3><p className="mt-3 text-sm leading-6 text-[#526177]" data-testid="service-match-rationale">{result.reason}</p>{result.alsoSlug ? <p className="mt-3 text-sm leading-6 text-[#526177]" data-testid="service-match-also">Also worth a look: <Link to={`/services/${result.alsoSlug}`} className="font-semibold text-[#5146a6] underline underline-offset-2">{titleOf(result.alsoSlug)}</Link></p> : null}<div className="mt-4 flex flex-wrap gap-3"><Link to={`/services/${result.slug}`} className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0f2942] px-5 text-sm font-semibold text-white" data-testid="service-match-view">See this service <ArrowUpRight className="size-4" /></Link><Link to={`/contact?service=${result.slug}`} className="inline-flex h-11 items-center gap-2 rounded-full border border-[#0f2942] px-5 text-sm font-semibold text-[#0f2942]" data-testid="service-match-start">Start with this <ArrowUpRight className="size-4" /></Link></div></div> : null}
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div>
          <label htmlFor="service-fit-select" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748b]" data-testid="service-fit-guide-label">I need help with</label>
          <select id="service-fit-select" value={selectedSlug} onChange={(event) => { setSelectedSlug(event.target.value); setResult(null); }} className="mt-2 h-12 w-full rounded-md border border-[#cbd5e1] bg-[#faf9f6] px-4 text-sm text-[#0f2942] outline-none transition-colors duration-200 focus:border-[#7167ca] focus:ring-2 focus:ring-[#7167ca]/20" data-testid="service-fit-guide-select">
            <option value="">Select a service</option>
            {orderedServices.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
          </select>
        </div>
        {selectedService ? <div className="flex flex-wrap gap-3" data-testid="service-fit-guide-result"><Link to={`/services/${selectedService.slug}`} className="inline-flex h-11 items-center gap-2 rounded-md border border-[#0f2942] px-4 text-sm font-semibold text-[#0f2942] transition-colors duration-200 hover:bg-[#f3f1ec]" data-testid="service-fit-guide-details-link">View details <ArrowUpRight className="size-4" /></Link><Link to={`/contact?service=${selectedService.slug}`} className="inline-flex h-11 items-center gap-2 rounded-md border border-[#7167ca] px-4 text-sm font-semibold text-[#5146a6] transition-colors duration-200 hover:bg-[#eeeaff]" data-testid="service-fit-guide-form-link">Use in form <ArrowUpRight className="size-4" /></Link><a href={getContactHref(selectedService)} className="inline-flex h-11 items-center gap-2 rounded-md bg-[#0f2942] px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1e3a5f]" data-testid="service-fit-guide-contact-link">Enquire <ArrowUpRight className="size-4" /></a></div> : <span className="text-sm text-[#64748b]" data-testid="service-fit-guide-hint">Select an option to see the next step.</span>}
      </div>
    </section>
  );
}
