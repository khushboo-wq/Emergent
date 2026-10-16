import { ArrowLeft, ArrowRight, Clock3, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { getResource, resources, type ResourceLink } from "@/lib/resources";
import { getService } from "@/lib/site";

export default function ResourceDetail() {
  const { slug } = useParams();
  const resource = getResource(slug);

  if (!resource) {
    return (
      <PageFrame>
        <section className="luxury-shell resource-not-found">
          <p className="luxury-section-kicker">404 / Resource not found</p>
          <h1>That guide is not here.</h1>
          <Link to="/resources" className="luxury-inline-link">Back to resources <ArrowRight size={16} /></Link>
        </section>
      </PageFrame>
    );
  }

  const relatedService = getService(resource.serviceSlug);

  return (
    <PageFrame key={resource.slug}>
      <Seo path={`/resources/${resource.slug}`} />
      <article className="resource-article">
        <header className="resource-article-hero">
          <div className="luxury-shell">
            <Link to="/resources" className="resource-back"><ArrowLeft size={14} /> All resources</Link>
            <p className="luxury-section-kicker">{resource.eyebrow}</p>
            <h1>{resource.title}</h1>
            <p className="resource-article-lead">{resource.excerpt}</p>
            <div className="resource-meta"><span>{resource.category}</span><span><Clock3 size={14} /> {resource.readTime}</span><span>Updated {resource.updated}</span></div>
          </div>
        </header>

        <div className="luxury-shell resource-layout">
          <main className="resource-content">
            {resource.sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 20} className="resource-section">
                <p className="resource-section-number">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                  {section.links?.length ? (
                    <ul className="resource-links" aria-label={`Links for ${section.heading}`}>
                      {section.links.map((item) => <li key={item.url}><ResourceAnchor item={item} /></li>)}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}
            {resource.sources?.length ? (
              <section className="resource-section resource-sources" aria-labelledby="resource-sources-title">
                <p className="resource-section-number">{String(resource.sections.length + 1).padStart(2, "0")}</p>
                <div>
                  <h2 id="resource-sources-title">Sources</h2>
                  <ol className="resource-links">
                    {resource.sources.map((item) => <li key={item.url}><ResourceAnchor item={item} /></li>)}
                  </ol>
                </div>
              </section>
            ) : null}
          </main>

          <aside className="resource-sidebar">
            <div className="resource-sidebar-card">
              <p className="luxury-section-kicker">Related service</p>
              <h2>{relatedService?.title ?? "Arcturus service"}</h2>
              <p>{relatedService?.description ?? "Direct, practical business support managed personally."}</p>
              {relatedService ? <Link to={`/services/${relatedService.slug}`} className="luxury-button luxury-button-dark">View the service <ArrowRight size={16} /></Link> : null}
            </div>
            <div className="resource-sidebar-card resource-sidebar-dark">
              <MessageCircle size={19} />
              <p>Want me to take this work off your list?</p>
              <Link to="/contact" className="luxury-button luxury-button-light">Start a written enquiry</Link>
            </div>
          </aside>
        </div>

        <section className="luxury-shell resource-related">
          <div>
            <p className="luxury-section-kicker">More on {relatedService?.title ?? resource.category}</p>
            <h2>Keep reading.</h2>
          </div>
          <div className="resource-related-list">
            {resources.filter((item) => item.slug !== resource.slug).map((item) => (
              <Link key={item.slug} to={`/resources/${item.slug}`} className="resource-related-link">
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <ArrowRight size={17} />
              </Link>
            ))}
          </div>
        </section>
      </article>
    </PageFrame>
  );
}

function ResourceAnchor({ item }: { item: ResourceLink }) {
  const internal = item.url.startsWith("/");
  return (
    <>
      {internal
        ? <Link to={item.url}>{item.label}</Link>
        : <a href={item.url} target="_blank" rel="noopener">{item.label}<span className="sr-only"> (opens in a new tab)</span></a>}
      {item.note ? <span className="resource-link-note"> — {item.note}</span> : null}
    </>
  );
}
