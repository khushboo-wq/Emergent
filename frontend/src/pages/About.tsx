import { ArrowUpRight, Sparkles, X } from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import { orderedServices } from "@/lib/site";
import AmbientScene from "@/components/AmbientScene";

export default function About() {
  return <PageFrame><Seo path="/about" />
    <section className="relative overflow-hidden border-b border-[#ddd8cd] about-hero-rich" data-testid="about-hero"><AmbientScene type="architecture" className="about-ambient-scene" /><div className="absolute right-[-7rem] top-12 size-80 rounded-full border border-[#4263aa]/20" aria-hidden="true" /><div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:gap-20 lg:px-10 lg:py-28"><div className="relative z-10 min-w-0"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4263aa]" data-testid="about-eyebrow">Independent, direct, documented</p><h1 className="mt-5 break-words font-serif text-[2.4rem] leading-[1.08] text-[#0f172a] sm:text-6xl lg:text-7xl" data-testid="about-heading">About Khushboo Tomar, B2B outreach freelancer</h1><div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-[#475569]" data-testid="about-intro"><p>I&apos;m Khushboo Tomar, an independent freelancer based in New Delhi. I run LinkedIn management, B2B email outreach and lead generation for businesses in the UK, Ireland and across Europe.</p><p>I work alone, so you always deal with the person doing the work. No account managers, no hand-offs, no outsourcing of core tasks.</p></div></div><div className="relative z-10" data-testid="about-personal-panel"><HeroShowcase kicker="Solo freelancer" index="03 / 05" title="Khushboo Tomar" subtitle="Independent solo freelancer behind Arcturus Professional Services · New Delhi" slug="email-outreach" chips={["12+ years B2B","Ireland · UK · Europe","One point of contact"]} /></div></div></section>


    <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24 lg:px-10" data-testid="about-background-section"><div className="arc-profile" data-testid="about-profile-card">
  <div className="arc-profile-head"><span className="arc-profile-badge">Since 2020</span><span className="arc-profile-tag">Arcturus Professional Services</span></div>
  <p className="arc-profile-name">Khushboo Tomar</p>
  <ol className="arc-profile-timeline">
    <li><b>2014</b><span>Started in email marketing</span></li>
    <li><b>2020</b><span>Started Arcturus Professional Services</span></li>
    <li><b>Today</b><span>Five focused services, managed personally</span></li>
  </ol>
</div><div className="self-center"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#765b9a]">Experience</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#0f172a] sm:text-5xl" data-testid="about-background-heading">My background</h2><p className="mt-7 text-base leading-8 text-[#475569]" data-testid="about-background-copy">My work covers B2B outreach, lead research, sales support and email deliverability. I&apos;ve worked closely with UK businesses, including recruitment firms, sales consultancies and financial services companies.</p></div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10" data-testid="about-journey-section">
      <div className="grid gap-12 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#765b9a]">The journey</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0f172a] sm:text-5xl">How Arcturus came together.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["01", "The experience", "Email marketing, operations, administration, social media and team leadership built a broad view of how businesses actually run."],
            ["02", "The decision", "Independent work created the freedom to focus on quality, clarity and direct responsibility rather than fragmented delivery."],
            ["03", "The purpose", "Practical support should remove friction, improve visibility and help businesses keep moving."],
            ["04", "The creation", "Arcturus brings that experience into one professional service with a clear name, clear standards and direct ownership."],
          ].map(([number, title, copy]) => (
            <article key={number} className="premium-lift rounded-[1.6rem] border border-[#ddd8cd] bg-[#fbf8f1] p-6">
              <span className="font-mono text-[10px] text-[#4263aa]">{number}</span>
              <h3 className="mt-5 font-serif text-2xl text-[#0f2942]">{title}</h3>
              <p className="mt-3 text-sm leading-7 font-medium text-[#596579]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#f1eee6]" data-testid="about-services-section"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="grid gap-10 lg:grid-cols-[0.58fr_1fr] lg:gap-20"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4263aa]">Specialist support</p><h2 className="mt-4 font-serif text-4xl text-[#0f172a] sm:text-5xl" data-testid="about-services-heading">What I do</h2><p className="mt-6 max-w-sm text-base leading-7 text-[#64748b]">Five clearly priced services, each managed directly and documented in writing.</p></div><div className="grid gap-3 sm:grid-cols-2">{orderedServices.map((service, index) => <Link key={service.slug} to={`/services/${service.slug}`} className="premium-panel premium-lift rounded-2xl border border-[#ddd8cd] bg-[#fbf8f1] p-5" data-testid={`about-service-${service.slug}`}><div className="flex items-center justify-between gap-4"><span className="font-mono text-[9px] text-[#4263aa]">0{index + 1}</span><ArrowUpRight className="size-4 text-[#64748b]" /></div><h3 className="mt-5 font-serif text-xl text-[#0f2942]">{service.title}</h3><p className="mt-2 text-sm leading-6 text-[#64748b]">{["Profile, posting, outreach and nurture", "Setup, warm-up, campaigns and reporting", "Research, content, website support and admin", "Verified B2B contacts for your target market", "Domain and DNS setup for better deliverability"][index]}</p></Link>)}</div></div></div></section>

    <section className="recommendations-section" data-testid="about-recommendations">
      <div className="luxury-shell recommendations-grid">
        <div>
          <p className="luxury-section-kicker">LinkedIn recommendations</p>
          <h2>See what professional connections have to say about working with me.</h2>
          <p>Recommendations are kept on LinkedIn so the feedback remains attached to the professional profile rather than copied into a marketing page.</p>
        </div>
        <a href="https://www.linkedin.com/in/khushboo-tomar" target="_blank" rel="noreferrer" className="luxury-button luxury-button-dark">View LinkedIn profile <ArrowUpRight size={16} /></a>
      </div>
    </section>

    <section className="bg-[#0f2942] text-white" data-testid="about-boundaries-tools"><div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-10"><article><X className="size-7 text-[#b8a9d4]" /><h2 className="mt-6 font-serif text-4xl text-white" data-testid="about-boundaries-heading">What I don&apos;t do</h2><p className="mt-6 text-base leading-8 text-[#cbd5e1]">I don&apos;t offer graphic design, project or calendar management, or YouTube SEO. I&apos;d rather do a few things well than say yes to everything.</p></article><article><Sparkles className="size-7 text-[#9bc8c0]" /><h2 className="mt-6 font-serif text-4xl text-white" data-testid="about-tools-heading">Built with modern tools</h2><p className="mt-6 text-base leading-8 text-[#cbd5e1]">I use AI tools to work faster on research, writing and video. I am not a coder, yet I build and launch complete websites with AI platforms. This site was made using <strong className="text-white">Emergent, GitHub, Claude and Render</strong>. I also work with <strong className="text-white">MongoDB</strong> for projects that need a database, although this site does not use one.</p></article></div></section>

  </PageFrame>;
}
