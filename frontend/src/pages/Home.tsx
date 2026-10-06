import { ArrowDownRight, ArrowUpRight, CircleDot, Layers3, Mail, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { featuredServices, getContactHref } from "@/lib/site";

const heroImage = "https://images.unsplash.com/photo-1740933084056-078fac872bff?auto=format&fit=crop&w=1300&q=80";

export default function Home() {
  return (
    <PageFrame>
      <Seo
        path="/"
        title="Arcturus Professional Services | Structured B2B Growth & Executive Support"
        description="Bespoke LinkedIn management, focused email outreach, business support, and AI video creation for European businesses and founders."
      />
      <section className="relative overflow-hidden border-b border-[#e2dfd8]" data-testid="home-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-20 lg:px-10 lg:py-28">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 flex items-center gap-3" data-testid="home-hero-eyebrow">
              <span className="h-px w-10 bg-[#c59b27]" aria-hidden="true" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92400e]">Professional services / Europe</span>
            </div>
            <h1 className="max-w-2xl break-words font-serif text-[2.15rem] font-medium leading-[1.12] tracking-[-0.035em] text-[#0f172a] sm:text-6xl sm:leading-[1.06] lg:text-[5.4rem]" data-testid="home-hero-heading">Make the work behind your growth feel <span className="text-[#0f2942]">considered.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#475569] sm:text-xl" data-testid="home-hero-description">I bring structure to the work that keeps a business moving, from thoughtful outreach and LinkedIn management to reliable support and useful video content.</p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center" data-testid="home-hero-actions">
              <Button render={<a href={getContactHref()} />} className="h-12 rounded-md bg-[#0f2942] px-5 text-sm text-white shadow-[0_8px_20px_-10px_rgba(15,41,66,0.7)] transition-colors duration-200 hover:bg-[#1e3a5f]" data-testid="home-hero-contact-button">
                Contact Khushboo <ArrowUpRight className="ml-2 size-4" />
              </Button>
              <Link to="/services" className="group inline-flex items-center gap-2 px-1 text-sm font-semibold text-[#0f2942] transition-colors duration-200 hover:text-[#92400e]" data-testid="home-hero-services-link">
                Explore services <MoveRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="mt-7 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748b]" data-testid="home-hero-note"><CircleDot className="size-3 text-[#c59b27]" /> Written enquiries · tailored scope · no account required</p>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[560px]" data-testid="home-hero-visual">
            <div className="absolute -right-16 -top-14 size-72 rounded-full border border-[#c59b27]/25" aria-hidden="true" />
            <div className="relative ml-auto h-[420px] w-[92%] overflow-hidden rounded-xl bg-[#0f2942] sm:h-[500px] lg:h-[560px]">
              <img src={heroImage} alt="Modern executive meeting room and collaborative professional space" className="h-full w-full object-cover opacity-90 mix-blend-luminosity" onError={(event) => { event.currentTarget.style.display = "none"; }} data-testid="home-hero-image" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320]/90 via-[#0b1320]/10 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f5d783]" data-testid="home-visual-label">The Arcturus approach</p>
                <p className="mt-3 max-w-sm font-serif text-3xl leading-tight text-white" data-testid="home-visual-statement">Clear scope. Thoughtful delivery. Room to do your best work.</p>
              </div>
            </div>
            <div className="absolute -bottom-5 left-0 max-w-[210px] border border-[#e2dfd8] bg-[#faf9f6] p-4 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)]" data-testid="home-hero-card">
              <Layers3 className="size-5 text-[#c59b27]" />
              <p className="mt-3 text-sm font-medium leading-5 text-[#0f2942]">Four focused ways to add capacity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2dfd8] bg-[#f3f1ec]" data-testid="home-trust-strip">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748b]" data-testid="home-trust-label">Built for businesses that need</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium text-[#0f2942]" data-testid="home-trust-list">
            <span data-testid="home-trust-item-clarity">Clarity before activity</span><span className="text-[#c59b27]" aria-hidden="true">/</span><span data-testid="home-trust-item-rhythm">A dependable rhythm</span><span className="text-[#c59b27]" aria-hidden="true">/</span><span data-testid="home-trust-item-context">Context-aware delivery</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10" data-testid="home-services-section">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92400e]" data-testid="home-services-eyebrow">How I can help</p>
            <h2 className="mt-4 max-w-sm font-serif text-4xl font-medium leading-tight tracking-[-0.02em] text-[#0f172a] sm:text-5xl" data-testid="home-services-heading">Support that respects the shape of your business.</h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-[#64748b]" data-testid="home-services-description">Start with one need or bring a broader brief. Every engagement begins with a conversation about scope, priorities, and what good looks like.</p>
            <Link to="/services" className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2942] transition-colors duration-200 hover:text-[#92400e]" data-testid="home-services-view-all-link">View all services <ArrowDownRight className="size-4 transition-transform duration-200 group-hover:translate-y-1" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-testid="home-services-grid">
            {featuredServices.map((service, index) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className={`group flex min-h-[250px] flex-col justify-between border border-[#e2dfd8] bg-white p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-[#c59b27] sm:p-7 ${index === 1 ? "sm:translate-y-10 sm:hover:translate-y-9" : ""}`} data-testid={`service-card-${service.slug}`}>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#c59b27]" data-testid={`service-card-number-${service.slug}`}>{String(index + 1).padStart(2, "0")}</span>
                  <ArrowUpRight className="size-5 text-[#94a3b8] transition-colors duration-200 group-hover:text-[#0f2942]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#0f172a]" data-testid={`service-card-title-${service.slug}`}>{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#64748b]" data-testid={`service-card-description-${service.slug}`}>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f2942] text-white" data-testid="home-difference-section">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f5d783]" data-testid="home-difference-eyebrow">The difference</p>
            <h2 className="mt-4 max-w-md font-serif text-4xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-5xl" data-testid="home-difference-heading">No theatre. Just a better way to get the work done.</h2>
          </div>
          <div className="grid gap-0 divide-y divide-white/15 border-y border-white/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0" data-testid="home-difference-list">
            {[
              ["01", "Fact-checked briefs", "The right context comes before the first draft or outreach list."],
              ["02", "Transparent scope", "You know what is included, what is not, and what needs your input."],
              ["03", "Written clarity", "Progress, questions, and decisions stay easy to find and act on."],
              ["04", "Realistic rhythm", "Timelines are agreed around the work rather than promised for effect."],
            ].map(([number, title, copy]) => (
              <div key={number} className="py-7 first:pt-7 sm:px-8 sm:first:pl-0 sm:[&:nth-child(2)]:pr-0 sm:[&:nth-child(3)]:pl-0" data-testid={`difference-item-${number}`}>
                <span className="font-mono text-[10px] text-[#f5d783]" data-testid={`difference-number-${number}`}>{number}</span>
                <h3 className="mt-5 font-serif text-2xl text-white" data-testid={`difference-title-${number}`}>{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#b9c5d4]" data-testid={`difference-copy-${number}`}>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10" data-testid="home-process-section">
        <div className="flex flex-col justify-between gap-6 border-b border-[#e2dfd8] pb-8 sm:flex-row sm:items-end">
          <div className="min-w-0"><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92400e]" data-testid="home-process-eyebrow">How I work</p><h2 className="mt-4 break-words font-serif text-4xl font-medium tracking-[-0.02em] text-[#0f172a] sm:text-5xl" data-testid="home-process-heading">A simple engagement architecture.</h2></div>
          <p className="max-w-xs text-sm leading-6 text-[#64748b]" data-testid="home-process-description">The detail changes by service. The principle stays the same: agree the shape, then deliver against it.</p>
        </div>
        <div className="grid gap-0 md:grid-cols-4" data-testid="home-process-grid">
          {["Understand", "Shape", "Deliver", "Review"].map((step, index) => (
            <div key={step} className="border-b border-[#e2dfd8] py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0" data-testid={`process-step-${index + 1}`}>
              <span className="font-mono text-[10px] text-[#c59b27]" data-testid={`process-step-number-${index + 1}`}>0{index + 1}</span>
              <h3 className="mt-6 font-serif text-2xl text-[#0f2942]" data-testid={`process-step-title-${index + 1}`}>{step}</h3>
              <p className="mt-3 text-sm leading-6 text-[#64748b]" data-testid={`process-step-copy-${index + 1}`}>{["I start with your offer, audience, and the outcome you need.", "I turn the conversation into a clear brief and realistic plan.", "I keep the agreed work moving with useful updates and review points.", "I use the results to improve the next cycle or close the brief well."][index]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-5 mb-20 overflow-hidden rounded-xl bg-[#f3f1ec] sm:mx-8 sm:mb-28 lg:mx-auto lg:max-w-7xl lg:px-10" data-testid="home-contact-banner">
        <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:px-14 lg:py-16">
          <div className="min-w-0"><Mail className="size-6 text-[#c59b27]" /><h2 className="mt-5 max-w-xl break-words font-serif text-4xl font-medium leading-tight tracking-[-0.02em] text-[#0f172a] sm:text-5xl" data-testid="home-contact-heading">Have a brief in mind? Start with a written conversation.</h2><p className="mt-5 max-w-lg text-sm leading-6 text-[#64748b]" data-testid="home-contact-description">Tell Khushboo what you are trying to move forward, what support you need, and when you would like to begin.</p></div>
          <Button render={<a href={getContactHref()} />} className="h-12 rounded-md bg-[#0f2942] px-5 text-sm text-white hover:bg-[#1e3a5f]" data-testid="home-contact-button">Contact Khushboo <ArrowUpRight className="ml-2 size-4" /></Button>
        </div>
      </section>
    </PageFrame>
  );
}
