import { ArrowUpRight, Check, MessageSquareText } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { getContactHref } from "@/lib/site";

const founderImage = "https://images.unsplash.com/photo-1758691737207-e75821e080cb?auto=format&fit=crop&w=900&q=80";

export default function About() {
  return (
    <PageFrame>
      <Seo path="/about" title="About Arcturus | Khushboo & Client Engagement Standards" description="Learn how Arcturus delivers high-touch, dependable business support and outbound growth for European businesses through clear written communication." />
      <section className="border-b border-[#e2dfd8]" data-testid="about-hero">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92400e]" data-testid="about-eyebrow">About Arcturus</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-medium leading-[1.08] tracking-[-0.035em] text-[#0f172a] sm:text-6xl lg:text-7xl" data-testid="about-heading">Good support starts with knowing what <span className="italic text-[#0f2942]">good</span> means.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#475569]" data-testid="about-intro">I am Khushboo Tomar. I support businesses across Europe with structured LinkedIn outreach, verified lead sourcing, focused email outreach, and practical business support.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-10" data-testid="about-founder-section">
        <div className="relative min-h-[390px] overflow-hidden rounded-xl bg-[#0f2942] sm:min-h-[500px]">
          <img src={founderImage} alt="B2B client consultation and structured strategy discussion" className="h-full w-full object-cover opacity-90 mix-blend-luminosity" onError={(event) => { event.currentTarget.style.display = "none"; }} data-testid="about-founder-image" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1320] to-transparent p-6 pt-24"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f5d783]" data-testid="about-founder-label">The person behind the work</p><p className="mt-2 font-serif text-3xl text-white" data-testid="about-founder-name">Khushboo Tomar</p></div>
        </div>
        <div className="self-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92400e]" data-testid="about-positioning-label">A practical point of view</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium leading-tight tracking-[-0.02em] text-[#0f172a] sm:text-5xl" data-testid="about-positioning-heading">Less noise around the work. More confidence in what happens next.</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#475569]" data-testid="about-positioning-copy">Communication is handled through written messages and email for clarity. Calls and meetings are not preferred, although a casual video introduction can be arranged when needed.</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#475569]" data-testid="about-positioning-copy-secondary">I work independently and take on a limited number of clients so each project receives focused attention. The approach is straightforward: clear processes, organised communication, accurate data, and respectful outreach without shortcuts or mass messaging.</p>
        </div>
      </section>
      <section className="bg-[#f3f1ec]" data-testid="about-principles-section">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><div><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92400e]" data-testid="about-principles-eyebrow">Working principles</p><h2 className="mt-4 max-w-sm font-serif text-4xl font-medium leading-tight text-[#0f172a] sm:text-5xl" data-testid="about-principles-heading">The standards are part of the service.</h2></div><div className="grid gap-0 divide-y divide-[#d8d3c8] border-y border-[#d8d3c8]">{[["Clear written communication", "Questions, decisions, and progress are documented so nothing important lives only in memory."], ["Realistic timelines", "Work is planned around the actual brief, review time, and dependencies, not an optimistic headline."], ["Transparent limits", "A good working relationship includes being direct about what the agreed scope can and cannot cover."], ["Respect for context", "Every business has a different pace, audience, and way of working. The brief should reflect that."]].map(([title, copy], index) => <div key={title} className="grid gap-4 py-7 sm:grid-cols-[190px_1fr] sm:gap-8" data-testid={`about-principle-${index + 1}`}><div className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-[#c59b27]" /><h3 className="font-serif text-xl text-[#0f2942]" data-testid={`about-principle-title-${index + 1}`}>{title}</h3></div><p className="text-sm leading-6 text-[#64748b]" data-testid={`about-principle-copy-${index + 1}`}>{copy}</p></div>)}</div></div></div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10" data-testid="about-communication-section"><div className="grid gap-10 rounded-xl border border-[#e2dfd8] bg-white p-7 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10 lg:p-14"><MessageSquareText className="size-8 text-[#c59b27]" /><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#92400e]" data-testid="about-communication-eyebrow">How to begin</p><h2 className="mt-3 font-serif text-3xl text-[#0f172a]" data-testid="about-communication-heading">Bring the real brief, even if it is still taking shape.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#64748b]" data-testid="about-communication-copy">A written enquiry with your business context, preferred service, and rough timeline is enough to start. Questions are welcome; polished procurement language is not required.</p></div><Button render={<a href={getContactHref()} />} className="h-11 bg-[#0f2942] text-white hover:bg-[#1e3a5f]" data-testid="about-contact-button">Contact Khushboo <ArrowUpRight className="ml-2 size-4" /></Button></div></section>
    </PageFrame>
  );
}
