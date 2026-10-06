import { useState } from "react";
import { BarChart3, ChevronDown, Globe2, ShieldCheck } from "lucide-react";

export default function AnalyticsUnavailable() {
  const [open, setOpen] = useState(false);
  return (
    <section className="analytics-strip" aria-label="Analytics status" data-testid="analytics-unavailable-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative ml-auto w-full max-w-sm">
          {open ? <div className="analytics-panel" role="status" data-testid="analytics-unavailable-panel"><div className="flex items-center gap-3"><span className="analytics-icon"><Globe2 className="size-4" /></span><p className="font-highlight text-sm text-white" data-testid="analytics-country-status">Country data unavailable</p></div><div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-[#9fb0c5]"><ShieldCheck className="size-4 text-[#7dd3c7]" aria-hidden="true" /><span data-testid="analytics-privacy-note">No tracking is connected.</span></div></div> : null}
          <button type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} className="analytics-trigger group" data-testid="analytics-unavailable-button"><BarChart3 className="size-4 text-[#7dd3c7]" aria-hidden="true" /><span className="font-mono text-[9px] uppercase tracking-[0.16em]" data-testid="analytics-unavailable-label">Analytics unavailable</span><ChevronDown className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}
