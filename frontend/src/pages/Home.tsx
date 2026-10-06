import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import { orderedServices } from "@/lib/site";

export default function Home() {
  return (
    <PageFrame>
      <Seo path="/" title="Arcturus Professional Services | Structured B2B Growth & Executive Support" description="Bespoke LinkedIn management, focused email outreach, business support, and AI video creation for European businesses and founders." />

      <section className="vb-hero" data-testid="home-hero">
        <div className="vb-hero-inner">
          <div className="vb-hero-copy">
            <span className="vb-kicker">Professional services / Europe</span>
            <h1>Make the work behind your growth feel <strong>considered.</strong></h1>
            <p>I bring structure to the work that keeps a business moving, from thoughtful outreach and LinkedIn management to reliable support and useful video content.</p>
            <div className="vb-actions">
              <Link to="/contact" className="vb-button vb-button-orange">Contact Khushboo <ArrowRight className="size-4" /></Link>
              <Link to="/services" className="vb-button vb-button-light">Explore services <ArrowRight className="size-4" /></Link>
            </div>
            <div className="vb-hero-points">
              <span><CheckCircle2 className="size-4" /> Written communication</span>
              <span><CheckCircle2 className="size-4" /> Personalised support</span>
              <span><CheckCircle2 className="size-4" /> Direct accountability</span>
            </div>
          </div>
          <div className="vb-hero-art" aria-hidden="true">
            <div className="vb-art-card vb-art-main"><span>ARCTURUS</span><strong>Business support<br />that moves with you.</strong><small>Independent freelancer · New Delhi</small></div>
            <div className="vb-art-card vb-art-float"><span>06</span><small>Focused services</small></div>
            <div className="vb-art-line vb-art-line-one" />
            <div className="vb-art-line vb-art-line-two" />
            <div className="vb-art-dot vb-dot-one" /><div className="vb-art-dot vb-dot-two" /><div className="vb-art-dot vb-dot-three" />
          </div>
        </div>
      </section>

      <section className="vb-quick-links" data-testid="home-trust-strip">
        <div className="vb-container vb-quick-grid">
          <Link to="/services/linkedin-management"><span>01</span><strong>LinkedIn Management</strong><ArrowRight className="size-4" /></Link>
          <Link to="/services/email-outreach"><span>02</span><strong>Email Outreach</strong><ArrowRight className="size-4" /></Link>
          <Link to="/services/business-support"><span>03</span><strong>Business Support</strong><ArrowRight className="size-4" /></Link>
          <Link to="/services/lead-generation"><span>04</span><strong>Lead Generation</strong><ArrowRight className="size-4" /></Link>
        </div>
      </section>

      <section className="vb-section vb-intro" data-testid="home-about-section">
        <div className="vb-container vb-two-col">
          <div className="vb-section-label"><span>About Khushboo</span><em>Independent by design</em></div>
          <div>
            <h2>You always deal with the person doing the work.</h2>
            <p>I have worked in B2B outreach since 2014 and support businesses in Ireland, the UK, and Europe from New Delhi. I keep communication on email and WhatsApp so each decision, instruction, and report stays documented.</p>
            <Link to="/about" className="vb-text-link">More about how I work <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="vb-section vb-services" data-testid="home-services-section">
        <div className="vb-container">
          <div className="vb-section-heading">
            <div><span className="vb-kicker vb-kicker-dark">How I can help</span><h2>Support that respects the shape of your business.</h2></div>
            <p>Start with one need or bring a broader brief. Every engagement begins with a conversation about scope, priorities, and what good looks like.</p>
          </div>
          <div className="vb-service-grid">
            {orderedServices.map((service, index) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className={`vb-service-card vb-service-card-${index + 1}`} data-testid={`service-card-${service.slug}`}>
                <div className="vb-service-top"><span>0{index + 1}</span><ArrowRight className="size-5" /></div>
                <div><small>{service.eyebrow}</small><h3>{service.title}</h3><p>{service.description}</p></div>
                <div className="vb-service-bottom"><strong>{service.price}</strong><span>View service</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="vb-feature-band" data-testid="home-difference-section">
        <div className="vb-container vb-feature-grid">
          <div><span className="vb-kicker vb-kicker-orange">The difference</span><h2>No theatre. Just a better way to get the work done.</h2></div>
          <div className="vb-feature-list">
            {[
              ["01","Fact-checked briefs","The right context comes before the first draft or outreach list."],
              ["02","Transparent scope","You know what is included, what is not, and what needs your input."],
              ["03","Written clarity","Progress, questions, and decisions stay easy to find and act on."],
              ["04","Realistic rhythm","Timelines are agreed around the work rather than promised for effect."]
            ].map(([n,t,c]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}
          </div>
        </div>
      </section>

      <section className="vb-section vb-process" data-testid="home-process-section">
        <div className="vb-container">
          <div className="vb-section-heading">
            <div><span className="vb-kicker">How I work</span><h2>A simple engagement architecture.</h2></div>
            <p>The detail changes by service. The principle stays the same: agree the shape, then deliver against it.</p>
          </div>
          <div className="vb-process-grid">
            {[
              ["01","Understand","I start with your offer, audience, and the outcome you need."],
              ["02","Shape","I turn the conversation into a clear brief and realistic plan."],
              ["03","Deliver","I keep the agreed work moving with useful updates and review points."],
              ["04","Review","I use the results to improve the next cycle or close the brief well."]
            ].map(([n,t,c]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}
          </div>
        </div>
      </section>

      <section className="vb-cta" data-testid="home-contact-banner">
        <div className="vb-container vb-cta-inner">
          <div><span className="vb-kicker vb-kicker-orange">Start a conversation</span><h2>Have a brief in mind? Start with a written conversation.</h2><p>Tell Khushboo what you are trying to move forward, what support you need, and when you would like to begin.</p></div>
          <Link to="/contact" className="vb-button vb-button-orange">Contact Khushboo <ArrowRight className="size-4" /></Link>
        </div>
      </section>
    </PageFrame>
  );
}
