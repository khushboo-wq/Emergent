import { ArrowUpRight, Check, FileText, LockKeyhole, Sparkles, X } from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import { orderedServices } from "@/lib/site";
import AmbientScene from "@/components/AmbientScene";

export default function About() {
  return <PageFrame><Seo path="/about" />
    <section className="relative overflow-hidden border-b border-[#ddd8cd] about-hero-rich" data-testid="about-hero"><AmbientScene type="architecture" className="about-ambient-scene" /><div className="absolute right-[-7rem] top-12 size-80 rounded-full border border-[#4263aa]/20" aria-hidden="true" /><div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:gap-20 lg:px-10 lg:py-28"><div className="relative z-10 min-w-0"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4263aa]" data-testid="about-eyebrow">Independent, direct, documented</p><h1 className="mt-5 break-words font-serif text-[2.4rem] leading-[1.08] text-[#0f172a] sm:text-6xl lg:text-7xl" data-testid="about-heading">About Khushboo Tomar, B2B outreach freelancer</h1><div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-[#475569]" data-testid="about-intro"><p>I&apos;m Khushboo Tomar, an independent freelancer based in New Delhi. I run LinkedIn management, B2B email outreach and lead generation for businesses in Ireland, the UK and across Europe.</p><p>I work alone, so you always deal with the person doing the work. No account managers, no hand-offs, no outsourcing of core tasks.</p></div></div><div className="relative z-10" data-testid="about-personal-panel"><HeroShowcase kicker="Founder" index="03 / 06" title="Khushboo Tomar" subtitle="Founder, Arcturus Professional Services · New Delhi" slug="email-outreach" chips={["12+ years B2B","UK · Ireland · Europe","One point of contact"]} /></div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10" data-testid="about-facts">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[#ddd8cd] bg-[#fbf8f1] p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#4263aa]">Based in</p>
          <p className="mt-3 font-serif text-2xl text-[#0f2942]">New Delhi, India</p>
        </div>
        <div className="rounded-2xl border border-[#ddd8cd] bg-[#fbf8f1] p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#4263aa]">Markets</p>
          <p className="mt-3 font-serif text-2xl text-[#0f2942]">UK · Ireland · Europe</p>
        </div>
        <div className="rounded-2xl border border-[#ddd8cd] bg-[#fbf8f1] p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#4263aa]">Work model</p>
          <p className="mt-3 font-serif text-2xl text-[#0f2942]">Independent freelancer</p>
        </div>
        <div className="rounded-2xl border border-[#ddd8cd] bg-[#fbf8f1] p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#4263aa]">Communication</p>
          <p className="mt-3 font-serif text-2xl text-[#0f2942]">Written · Direct · Personal</p>
        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24 lg:px-10" data-testid="about-background-section"><div className="arc-profile" data-testid="about-profile-card">
  <div className="arc-profile-head"><span className="arc-profile-badge">Since 2014</span><span className="arc-profile-tag">Arcturus Professional Services</span></div>
  <p className="arc-profile-name">Khushboo Tomar</p>
  <p className="arc-profile-role">Independent B2B freelancer · New Delhi</p>
  <ol className="arc-profile-timeline">
    <li><b>2014</b><span>Started in email marketing</span></li>
    <li><b>Growth</b><span>B2B outreach, lead research and sales support</span></li>
    <li><b>Today</b><span>Six focused services, handled personally</span></li>
  </ol>
  <div className="arc-profile-stats"><div><b>12+</b><small>years experience</small></div><div><b>06</b><small>services</small></div><div><b>01</b><small>point of contact</small></div></div>
</div><div className="self-center"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#765b9a]">Experience</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#0f172a] sm:text-5xl" data-testid="about-background-heading">My background</h2><p className="mt-7 text-base leading-8 text-[#475569]" data-testid="about-background-copy">I started my career in 2014 in email marketing and have spent over twelve years in B2B outreach, lead research, sales support and email deliverability. I&apos;ve worked closely with UK businesses, including recruitment firms, sales consultancies and financial services companies.</p><div className="mt-9 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-[#ece8f4] p-5"><p className="font-highlight text-3xl text-[#0f2942]">12+</p><p className="mt-2 text-xs leading-5 text-[#64748b]">years of focused B2B experience</p></div><div className="rounded-2xl bg-[#dcebe8] p-5"><p className="font-highlight text-3xl text-[#0f2942]">2014</p><p className="mt-2 text-xs leading-5 text-[#64748b]">the year I started in email marketing</p></div></div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10" data-testid="about-journey-section">
      <div className="grid gap-12 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#765b9a]">The journey</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0f172a] sm:text-5xl">12 years, distilled into one dependable service.</h2>
          <p className="mt-6 text-base leading-8 text-[#475569]">From email marketing and operations to administration, social media, team leadership, B2B research, lead generation and sales outreach, every stage shaped the way Arcturus works today.</p>
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

    <section className="bg-[#f1eee6]" data-testid="about-services-section"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="grid gap-10 lg:grid-cols-[0.58fr_1fr] lg:gap-20"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4263aa]">Specialist support</p><h2 className="mt-4 font-serif text-4xl text-[#0f172a] sm:text-5xl" data-testid="about-services-heading">What I do</h2><p className="mt-6 max-w-sm text-base leading-7 text-[#64748b]">Six clearly priced services, each handled directly and documented in writing.</p></div><div className="grid gap-3 sm:grid-cols-2">{orderedServices.map((service, index) => <Link key={service.slug} to={`/services/${service.slug}`} className="premium-panel premium-lift rounded-2xl border border-[#ddd8cd] bg-[#fbf8f1] p-5" data-testid={`about-service-${service.slug}`}><div className="flex items-center justify-between gap-4"><span className="font-mono text-[9px] text-[#4263aa]">0{index + 1}</span><ArrowUpRight className="size-4 text-[#64748b]" /></div><h3 className="mt-5 font-serif text-xl text-[#0f2942]">{service.title}</h3><p className="mt-2 text-sm leading-6 text-[#64748b]">{["Profile, posting, outreach and nurture", "Setup, warm-up, campaigns and reporting", "Research, content, website support and admin", "Verified B2B contacts for your target market", "Branded short videos and reels", "Domain and DNS setup for better deliverability"][index]}</p></Link>)}</div></div></div></section>

    <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:px-10" data-testid="about-work-compliance"><article className="rounded-[2rem] border border-[#d7dee9] bg-[#eef2ff] p-7 sm:p-10"><FileText className="size-7 text-[#4263aa]" /><h2 className="mt-6 font-serif text-4xl text-[#0f172a]" data-testid="about-work-heading">How I work</h2><p className="mt-6 text-base leading-8 text-[#475569]">Everything runs in writing, over WhatsApp, email or LinkedIn. I don&apos;t take calls. This keeps every decision, report and instruction documented, so nothing gets lost or misunderstood. You get clear written updates and regular reporting.</p><p className="mt-5 text-base leading-8 text-[#475569]">Payment is 100% upfront for the month, and my pricing is flat and published on each service page.</p></article><article className="rounded-[2rem] border border-[#c9ddd8] bg-[#e8f2ef] p-7 sm:p-10"><LockKeyhole className="size-7 text-[#2c7a73]" /><h2 className="mt-6 font-serif text-4xl text-[#0f172a]" data-testid="about-compliance-heading">How I handle data and compliance</h2><p className="mt-6 text-base leading-8 text-[#475569]">I use a B2B-only, GDPR and PECR-aware approach. I work with business-professional data, handle unsubscribe requests properly, and keep your data confidential. You always keep control of your own accounts and settings. This is not legal advice, and each client remains responsible for confirming the lawful basis and requirements that apply to their activity.</p></article></section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10" data-testid="about-tools-platforms">
      <div className="grid gap-10 lg:grid-cols-[0.46fr_1fr] lg:gap-20">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4263aa]">Tools & platforms</p>
          <h2 className="mt-4 font-serif text-4xl text-[#0f172a] sm:text-5xl">The tools behind the work.</h2>
          <p className="mt-6 text-base leading-8 font-medium text-[#596579]">The platform changes by service. The working principle does not: use the right tool, document the work, and keep the client in control of their accounts.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["LinkedIn", "LinkedIn · LinkedIn Sales Navigator"],
            ["Email outreach", "Instantly.ai"],
            ["Lead generation", "LinkedIn Sales Navigator · Apollo · UseBouncer"],
            ["AI video", "Google Gemini · Google Flow · Google Veo 3"],
            ["Scheduling", "Hootsuite"],
            ["Infrastructure", "DNS provider · Email provider"],
          ].map(([title, tools]) => (
            <article key={title} className="premium-lift rounded-[1.6rem] border border-[#ddd8cd] bg-white p-6">
              <h3 className="font-serif text-xl text-[#0f2942]">{title}</h3>
              <p className="mt-3 text-sm leading-7 font-medium text-[#596579]">{tools}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

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

    <section className="bg-[#0f2942] text-white" data-testid="about-boundaries-tools"><div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-10"><article><X className="size-7 text-[#b8a9d4]" /><h2 className="mt-6 font-serif text-4xl text-white" data-testid="about-boundaries-heading">What I don&apos;t do</h2><p className="mt-6 text-base leading-8 text-[#cbd5e1]">I don&apos;t offer graphic design, project or calendar management, or YouTube SEO. I&apos;d rather do a few things well than say yes to everything.</p></article><article><Sparkles className="size-7 text-[#9bc8c0]" /><h2 className="mt-6 font-serif text-4xl text-white" data-testid="about-tools-heading">Built with modern tools</h2><p className="mt-6 text-base leading-8 text-[#cbd5e1]">I use AI tools to work faster on research, writing and video, and I build and launch websites with AI platforms such as Emergent. This site is an example.</p></article></div></section>

    <section className="mx-5 my-20 rounded-[2rem] border border-[#d7dee9] bg-white px-6 py-12 shadow-[0_28px_65px_-44px_rgba(15,41,66,0.62)] sm:mx-8 sm:my-28 sm:px-10 lg:mx-auto lg:max-w-7xl lg:px-14" data-testid="about-contact-section"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><Check className="size-6 text-[#2c7a73]" /><h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#0f172a] sm:text-5xl" data-testid="about-contact-heading">Send me a short written brief and I&apos;ll reply by email or WhatsApp.</h2></div><Link to="/contact" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#0f2942] px-6 text-sm font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#243f5c] hover:shadow-lg" data-testid="about-contact-button">Contact me <ArrowUpRight className="size-4" /></Link></div></section>
  </PageFrame>;
}
