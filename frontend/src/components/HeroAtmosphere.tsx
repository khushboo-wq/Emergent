import { Layers3 } from "lucide-react";

export default function HeroAtmosphere() {
  return (
    <div className="hero-atmosphere relative min-h-[430px] lg:min-h-[590px]" data-testid="home-hero-visual">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
      <svg className="hero-connections" viewBox="0 0 640 620" fill="none" aria-hidden="true">
        <path d="M74 448C157 334 220 370 286 262C347 162 435 180 552 78" />
        <path d="M112 520C186 468 263 486 327 388C394 285 462 324 576 236" />
        <circle cx="74" cy="448" r="5" /><circle cx="286" cy="262" r="5" /><circle cx="552" cy="78" r="5" />
        <circle cx="112" cy="520" r="5" /><circle cx="327" cy="388" r="5" /><circle cx="576" cy="236" r="5" />
      </svg>
      <div className="hero-portal" aria-hidden="true"><div className="hero-portal-core" /></div>
      <div className="hero-copy-panel premium-panel">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#b7c6ff]" data-testid="home-visual-label">The Arcturus approach</p>
        <p className="mt-3 max-w-sm font-serif text-3xl leading-tight text-white" data-testid="home-visual-statement">Clear scope. Thoughtful delivery. Room to do your best work.</p>
      </div>
      <div className="hero-capacity-card premium-panel" data-testid="home-hero-card">
        <Layers3 className="size-5 text-[#7267d8]" aria-hidden="true" />
        <p className="mt-3 text-sm font-medium leading-5 text-[#0f2942]">Six focused ways to add capacity.</p>
      </div>
    </div>
  );
}
