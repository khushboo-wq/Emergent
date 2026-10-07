import { ArrowRight, BookOpen } from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { resources } from "@/lib/resources";
import AmbientScene from "@/components/AmbientScene";

export default function Resources() {
  return (
    <PageFrame>
      <Seo path="/resources" />
      <section className="luxury-hero resources-hero-rich" data-testid="resources-hero"><AmbientScene type="office" className="resources-ambient-scene" />
        <div className="luxury-shell luxury-hero-inner">
          <Reveal className="luxury-hero-copy">
            <p className="luxury-eyebrow"><span>03</span> Practical resources · B2B</p>
            <h1 data-testid="resources-heading">Practical guidance for the work behind your business.</h1>
            <p className="luxury-hero-lead" data-testid="resources-intro">
              Straightforward guides on LinkedIn management, email outreach, lead generation, business support, AI video content and email setup, based on the practical work behind each service.
            </p>
          </Reveal>
          <Reveal className="luxury-hero-art-wrap" delay={120}>
            <HeroShowcase kicker="Arcturus" index="05 / 06" title="Practical guides for B2B growth" subtitle="LinkedIn, email outreach and lead generation, explained plainly." slug="lead-generation" chips={["LinkedIn","Email outreach","Lead generation"]} />
          </Reveal>
        </div>
      </section>

      <section className="luxury-services-section">
        <div className="luxury-shell">
          <Reveal className="luxury-section-heading">
            <div>
              <p className="luxury-section-kicker">Guides</p>
              <h2>Read the useful parts first.</h2>
            </div>
          </Reveal>
          <div className="resource-grid">
            {resources.map((resource, index) => (
              <Reveal key={resource.slug} delay={index * 70}>
                <Link to={`/resources/${resource.slug}`} className="resource-card" data-testid={`resource-card-${resource.slug}`}>
                  <div className="resource-card-top"><span>{resource.category}</span><BookOpen size={17} /></div>
                  <h3>{resource.title}</h3>
                  <p>{resource.excerpt}</p>
                  <div className="resource-card-bottom"><span>{resource.readTime}</span><span>Read guide <ArrowRight size={15} /></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-contact-section">
        <div className="luxury-shell luxury-contact-inner">
          <Reveal>
            <div className="luxury-contact-overline">Need the work managed?</div>
            <h2>Use the guidance, then get back to the business.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>Arcturus provides direct LinkedIn management, email outreach, lead generation, business support, email setup and AI content.</p>
            <Link to="/services" className="luxury-button luxury-button-light">Explore all services <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </PageFrame>
  );
}
