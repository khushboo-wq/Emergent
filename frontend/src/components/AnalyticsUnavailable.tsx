import { useEffect, useState } from "react";
import { BarChart3, ChevronDown, Eye, Globe2, ShieldCheck } from "lucide-react";

// Public visit counter (anonymous, no cookies) via the free Abacus counting API.
// Detailed private stats (countries, pages, sources) live in Google Analytics via Google Tag Manager.
const COUNTER = "https://abacus.jasoncameron.dev";
const NS = "arcturusprofessional-com";

export default function AnalyticsUnavailable() {
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let counted = false;
    try { counted = sessionStorage.getItem("arc-visit-counted") === "1"; } catch { /* storage blocked */ }
    const url = `${COUNTER}/${counted ? "get" : "hit"}/${NS}/visits`;
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: { value?: number }) => {
        if (typeof data.value === "number") setTotal(data.value);
        try { sessionStorage.setItem("arc-visit-counted", "1"); } catch { /* ignore */ }
      })
      .catch(() => setFailed(true));
  }, []);

  const label = total !== null ? `${total.toLocaleString("en-GB")} visits` : failed ? "Visits" : "Counting visits…";

  return (
    <section className="analytics-strip" aria-label="Website visits" data-testid="analytics-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative ml-auto w-full max-w-sm">
          {open ? (
            <div className="analytics-panel" role="status" data-testid="analytics-panel">
              <div className="flex items-center gap-3"><span className="analytics-icon"><Eye className="size-4" /></span><p className="font-highlight text-sm text-white">{total !== null ? `${total.toLocaleString("en-GB")} total website visits` : "Visit count is loading"}</p></div>
              <div className="mt-3 flex items-center gap-3"><span className="analytics-icon"><Globe2 className="size-4" /></span><p className="text-sm text-[#dbe3f4]">Visitors from the UK, Ireland, Europe and beyond</p></div>
              <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-[#9fb0c5]"><ShieldCheck className="size-4 text-[#7dd3c7]" aria-hidden="true" /><span>Anonymous count. No cookies, no personal data.</span></div>
            </div>
          ) : null}
          <button type="button" onClick={() => setOpen((c) => !c)} aria-expanded={open} className="analytics-trigger group" data-testid="analytics-button"><BarChart3 className="size-4 text-[#7dd3c7]" aria-hidden="true" /><span className="font-mono text-[11px] uppercase tracking-[0.14em]">{label}</span><ChevronDown className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}
