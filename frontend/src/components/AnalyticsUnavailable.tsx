import { useEffect, useState } from "react";
import { BarChart3, ChevronDown, Globe2, ShieldCheck } from "lucide-react";

// Public visit counter with country breakdown. Anonymous: only a 2-letter country code is counted,
// no IP, cookie or personal data is stored by this site. Counts use the free Abacus counting API;
// the visitor's country comes from the free country.is lookup.
const COUNTER = "https://abacus.jasoncameron.dev";
const NS = "arcturusprofessional-com";
// Countries already tracked by name from day one. Any other country is registered the first time
// it is seen (a numbered "slot" counter holds its code), so every country can be listed by name.
const BASE = ["IE", "GB", "IN", "US", "DE", "NL", "FR"];
const encode = (code: string) => (code.charCodeAt(0) - 65) * 26 + (code.charCodeAt(1) - 65) + 1;
const decode = (n: number) => (n >= 1 && n <= 676 ? String.fromCharCode(65 + Math.floor((n - 1) / 26), 65 + ((n - 1) % 26)) : "");
const isCode = (c: string) => /^[A-Z]{2}$/.test(c);
let regionNames: Intl.DisplayNames | null = null;
try { regionNames = new Intl.DisplayNames(["en-GB"], { type: "region" }); } catch { regionNames = null; }
const nameOf = (code: string) => { try { return regionNames?.of(code) || code; } catch { return code; } };

const getJson = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));

async function countVisitorCountry(code: string) {
  if (!isCode(code)) return;
  if (!BASE.includes(code)) {
    const info = await getJson(`${COUNTER}/info/${NS}/country-${code}`).catch(() => null) as { exists?: boolean } | null;
    if (info && info.exists === false) {
      const slot = await getJson(`${COUNTER}/hit/${NS}/country-slots`) as { value?: number };
      if (typeof slot.value === "number") await getJson(`${COUNTER}/create/${NS}/country-slot-${slot.value}?initializer=${encode(code)}`).catch(() => undefined);
    }
  }
  await getJson(`${COUNTER}/hit/${NS}/country-${code}`);
}

async function loadCountries(): Promise<Record<string, number>> {
  const slots = await getJson(`${COUNTER}/get/${NS}/country-slots`).then((d: { value?: number }) => d.value ?? 0).catch(() => 0);
  const extra = await Promise.all(Array.from({ length: Math.min(slots, 40) }, (_, i) =>
    getJson(`${COUNTER}/get/${NS}/country-slot-${i + 1}`).then((d: { value?: number }) => decode(d.value ?? 0)).catch(() => "")));
  const codes = [...new Set([...BASE, ...extra.filter(isCode)])];
  const rows = await Promise.all(codes.map((code) => getJson(`${COUNTER}/get/${NS}/country-${code}`).then((d: { value?: number }) => [code, d.value ?? 0] as const).catch(() => [code, 0] as const)));
  return Object.fromEntries(rows);
}

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
          return countVisitorCountry((d.country || "").toUpperCase());
        })
        .catch(() => undefined)
        .finally(mark);
    }
  }, []);

  useEffect(() => {
    if (!open || byCountry) return;
    loadCountries().then(setByCountry).catch(() => setByCountry({}));
  }, [open, byCountry]);

  const label = total !== null ? `${total.toLocaleString("en-GB")} visits` : failed ? "Visits" : "Counting visits…";
  const rows = byCountry ? Object.entries(byCountry).map(([code, n]) => ({ code, name: nameOf(code), n })).filter((r) => r.n > 0).sort((a, b) => b.n - a.n || a.name.localeCompare(b.name)) : [];
  const countryTotal = rows.reduce((sum, r) => sum + r.n, 0);
  const max = rows.reduce((m, r) => Math.max(m, r.n), 0) || 1;

  return (
    <section className="analytics-strip" aria-label="Website visits" data-testid="analytics-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative ml-auto w-full max-w-sm">
          {open ? (
            <div className="analytics-panel" role="status" data-testid="analytics-panel">
              <div className="flex items-center gap-3"><span className="analytics-icon"><Globe2 className="size-4" /></span><p className="font-highlight text-sm text-white">Visits by country</p></div>
              <ul className="arc-country-list">
                {!byCountry ? <li className="arc-country-empty">Loading countries…</li> : rows.length === 0 ? <li className="arc-country-empty">Country data will appear as new visits arrive.</li> : rows.map((r) => (
                  <li key={r.code}><span className="arc-country-name"><span className="arc-country-code" aria-hidden="true">{r.code}</span>{r.name}</span><span className="arc-country-bar"><i style={{ width: `${(r.n / max) * 100}%` }} /></span><b>{r.n.toLocaleString("en-GB")}</b></li>
                ))}
              </ul>
              {total !== null ? <p className="arc-country-total">{total.toLocaleString("en-GB")} total visits{countryTotal ? ` · ${countryTotal.toLocaleString("en-GB")} with a known country` : ""}</p> : null}
              <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-[#9fb0c5]"><ShieldCheck className="size-4 text-[#7dd3c7]" aria-hidden="true" /><span>Anonymous: country only. No cookies, no personal data.</span></div>
            </div>
          ) : null}
          <button type="button" onClick={() => setOpen((c) => !c)} aria-expanded={open} className="analytics-trigger group" data-testid="analytics-button"><BarChart3 className="size-4 text-[#7dd3c7]" aria-hidden="true" /><span className="font-mono text-[11px] uppercase tracking-[0.14em]">{label}</span><ChevronDown className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}
