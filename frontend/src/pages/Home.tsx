import { ArrowRight } from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { resources } from "@/lib/resources";
import AmbientScene from "@/components/AmbientScene";


export default function Home() {
  return (
    <PageFrame>
      <Seo
        path="/"
        title="Arcturus Professional Services | Independent Business Support"
        description="Independent LinkedIn management, email outreach, lead generation, business support, and email setup for businesses in the UK and Ireland."
      />

      <section className="luxury-hero home-hero-rich" data-testid="home-hero">
        <AmbientScene type="office" className="home-ambient-scene" />
        <div className="luxury-shell luxury-hero-inner">
          <Reveal className="luxury-hero-copy" delay={40}>
            <p className="luxury-eyebrow"><span>01</span> Independent freelancer · New Delhi</p>
            <h1 data-testid="home-hero-heading">
              B2B growth work,
              <em> managed personally.</em>
            </h1>
            <p className="luxury-hero-lead" data-testid="home-hero-description">
              LinkedIn management, email outreach, lead generation, business support, email setup and AI content for founders and small teams across the UK, Ireland and Europe.
            </p>
            <div className="luxury-hero-actions">
              <Link to="/services" className="luxury-button luxury-button-dark">Explore services <ArrowRight size={16} /></Link>
              <Link to="/contact" className="luxury-button luxury-button-ghost">Talk to me</Link>
            </div>
          </Reveal>

          <Reveal className="luxury-hero-art-wrap" delay={150}>
            <HeroShowcase kicker="Arcturus" index="01 / 05" title="Arcturus Professional Services" subtitle="" slug="linkedin-management" chips={["LinkedIn","Email outreach","Lead generation","Business support","Email setup"]} note="A direct, considered way to keep the work behind your business moving." />
          </Reveal>
        </div>
      </section>

      <section className="arcturus-pillars-section" data-testid="home-pillars">
        <div className="luxury-shell arcturus-pillars-grid">
          {[
            ["Connect", "Reach the right businesses and decision-makers with focused outreach and useful content."],
            ["Communicate", "Keep the message clear, professional and consistent across the channels you actually use."],
            ["Grow", "Build visibility, conversations and practical momentum without adding an agency layer."],
            ["Manage", "Keep the research, admin, scheduling and follow-through moving."],
          ].map(([title, copy], index) => (
            <Reveal key={title} delay={index * 55} className="arcturus-pillar">
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="luxury-intro-section">
        <div className="luxury-shell luxury-two-col">
          <Reveal>
            <p className="luxury-section-kicker">What I do</p>
            <h2>One person. One point of contact. Less chasing, more finished work.</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="luxury-intro-copy">
              <p>I work directly with founders and small businesses on the practical work that keeps growth moving: outreach, research, admin, content and the tasks that otherwise stay on the list.</p>
              <p>You get a clear written scope before anything starts.</p>
              <Link to="/about" className="luxury-inline-link">More about how I work <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="luxury-facts-section" aria-label="Arcturus at a glance">
        <div className="luxury-shell luxury-facts-grid">
          <div><strong>12+</strong><span>years across email marketing, B2B outreach and lead research</span></div>
          <div><strong>05</strong><span>focused services with published pricing</span></div>
          <div><strong>UK · IE · EU</strong><span>where my clients are</span></div>
        </div>
      </section>



      <section className="luxury-resources-section">
        <div className="luxury-shell">
          <Reveal className="luxury-section-heading">
            <div>
              <p className="luxury-section-kicker">Resources</p>
              <h2>Practical guidance for the work behind your growth.</h2>
            </div>
            <Link to="/resources" className="luxury-inline-link">View all resources <ArrowRight size={16} /></Link>
          </Reveal>
          <div className="resource-home-grid">
            {resources.filter((resource) => ["linkedin-management-services-guide", "b2b-email-outreach-guide"].includes(resource.slug)).map((resource, index) => (
              <Reveal key={resource.slug} delay={index * 55}>
                <Link to={`/resources/${resource.slug}`} className="resource-home-card">
                  <span>{resource.category}</span>
                  <h3>{resource.title}</h3>
                  <span className="resource-home-link">Read guide <ArrowRight size={15} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-about-section">
        <div className="luxury-shell luxury-about-grid">
          <Reveal className="luxury-about-visual">
            <HeroShowcase kicker="Solo freelancer" index="New Delhi" title="Khushboo Tomar" subtitle="Independent solo freelancer behind Arcturus Professional Services." slug="email-outreach" chips={["Since 2020"]} />
          </Reveal>
          <Reveal delay={110}>
            <p className="luxury-section-kicker">About me</p>
            <h2>Hi, I'm Khushboo.</h2>
            <p className="luxury-about-copy">
              My working style is simple: understand the brief, do the agreed work properly, and keep you updated without you having to chase.
            </p>
            <Link to="/about" className="luxury-button luxury-button-dark">More about me <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

    </PageFrame>
  );
}
