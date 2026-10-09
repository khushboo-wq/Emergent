import { useEffect, useState } from "react";
import { BarChart3, ChevronDown, Globe2, ShieldCheck } from "lucide-react";

// Public visit counter with country breakdown. Anonymous: only a 2-letter country code is counted,
// no IP, cookie or personal data is stored by this site. Counts use the free Abacus counting API;
// the visitor's country comes from the free country.is lookup.
const COUNTER = "https://abacus.jasoncameron.dev";
const NS = "arcturusprofessional-com";
const COUNTRIES: [string, string, string][] = [
  ["IE", "Ireland", "🇮🇪"], ["GB", "United Kingdom", "🇬🇧"], ["IN", "India", "🇮🇳"], ["US", "United States", "🇺🇸"],
  ["DE", "Germany", "🇩🇪"], ["NL", "Netherlands", "🇳🇱"], ["FR", "France", "🇫🇷"], ["OTHER", "Other countries", "🌍"],
];
const KNOWN = new Set(COUNTRIES.map((c) => c[0]));

const getJson = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));

export default function AnalyticsUnavailable() {
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState<number | null>(null);
  const [byCountry, setByCountry] = useState<Record<string, number> | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let counted = false;
    try { counted = sessionStorage.getItem("arc-visit-counted") === "1"; } catch { /* storage blocked */ }
    const mark = () => { try { sessionStorage.setItem("arc-visit-counted", "1"); } catch { /* ignore */ } };
    getJson(`${COUNTER}/${counted ? "get" : "hit"}/${NS}/visits`)
      .then((d: { value?: number }) => { if (typeof d.value === "number") setTotal(d.value); })
      .catch(() => setFailed(true));
    if (!counted) {
      getJson("https://api.country.is/")
        .then((d: { country?: string }) => {
          const code = (d.country || "").toUpperCase();
          return getJson(`${COUNTER}/hit/${NS}/country-${KNOWN.has(code) ? code : "OTHER"}`);
        })
        .catch(() => undefined)
        .finally(mark);
    }
  }, []);

  useEffect(() => {
    if (!open || byCountry) return;
    Promise.all(COUNTRIES.map(([code]) => getJson(`${COUNTER}/get/${NS}/country-${code}`).then((d: { value?: number }) => [code, d.value ?? 0] as const).catch(() => [code, 0] as const)))
      .then((rows) => setByCountry(Object.fromEntries(rows)));
  }, [open, byCountry]);

  const label = total !== null ? `${total.toLocaleString("en-GB")} visits` : failed ? "Visits" : "Counting visits…";
  const rows = byCountry ? COUNTRIES.map(([code, name, flag]) => ({ code, name, flag, n: byCountry[code] || 0 })).filter((r) => r.n > 0).sort((a, b) => b.n - a.n) : [];
  const max = rows.reduce((m, r) => Math.max(m, r.n), 0) || 1;

  return (
    <section className="analytics-strip" aria-label="Website visits" data-testid="analytics-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative ml-auto w-full max-w-sm">
          {open ? (
            <div className="analytics-panel" role="status" data-testid="analytics-panel">
              <div className="flex items-center gap-3"><span className="analytics-icon"><Globe2 className="size-4" /></span><p className="font-highlight text-sm text-white">{total !== null ? `${total.toLocaleString("en-GB")} total visits` : "Visits"} · by country</p></div>
              <ul className="arc-country-list">
                {!byCountry ? <li className="arc-country-empty">Loading countries…</li> : rows.length === 0 ? <li className="arc-country-empty">Country data will appear as new visits arrive.</li> : rows.map((r) => (
                  <li key={r.code}><span className="arc-country-name">{r.flag} {r.name}</span><span className="arc-country-bar"><i style={{ width: `${(r.n / max) * 100}%` }} /></span><b>{r.n.toLocaleString("en-GB")}</b></li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-[#9fb0c5]"><ShieldCheck className="size-4 text-[#7dd3c7]" aria-hidden="true" /><span>Anonymous: country only. No cookies, no personal data.</span></div>
            </div>
          ) : null}
          <button type="button" onClick={() => setOpen((c) => !c)} aria-expanded={open} className="analytics-trigger group" data-testid="analytics-button"><BarChart3 className="size-4 text-[#7dd3c7]" aria-hidden="true" /><span className="font-mono text-[11px] uppercase tracking-[0.14em]">{label}</span><ChevronDown className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}
