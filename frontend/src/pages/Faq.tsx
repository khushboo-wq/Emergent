import { ArrowUpRight, ChevronDown, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";
import { faqGroups } from "@/lib/faq";
import { WHATSAPP_LINK } from "@/lib/site";

export default function Faq() {
  return (
    <PageFrame>
      <Seo path="/faq" />
      <section className="luxury-hero faq-hero" data-testid="faq-hero">
        <div className="luxury-shell faq-hero-inner">
          <p className="luxury-eyebrow"><span>?</span> Frequently asked questions</p>
          <h1>Quick answers before you get in touch.</h1>
          <p className="luxury-hero-lead">Pricing, payment, how we work together, results and data. If your question is not here, send it in writing and I will reply.</p>
          <nav className="faq-jump" aria-label="FAQ topics">
            {faqGroups.map((g) => <a key={g.id} href={`#${g.id}`}>{g.title}</a>)}
          </nav>
        </div>
      </section>

      <section className="faq-body" data-testid="faq-body">
        <div className="luxury-shell faq-groups">
          {faqGroups.map((g, gi) => (
            <div key={g.id} id={g.id} className="faq-group">
              <div className="faq-group-head"><span>0{gi + 1}</span><h2>{g.title}</h2></div>
              <div className="faq-list">
                {g.items.map((item, i) => (
                  <details key={item.q} className="faq-item" open={gi === 0 && i === 0}>
                    <summary><h3>{item.q}</h3><ChevronDown size={20} aria-hidden="true" /></summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-cta" data-testid="faq-cta">
        <div className="luxury-shell faq-cta-inner">
          <div><h2>Still have a question?</h2><p>Send it in writing. I reply by email or WhatsApp.</p></div>
          <div className="faq-cta-actions">
            <a href={WHATSAPP_LINK + encodeURIComponent("Question from the FAQ page")} target="_blank" rel="noreferrer" className="luxury-button luxury-button-light"><MessageCircle size={16} /> Ask on WhatsApp</a>
            <Link to="/contact" className="luxury-button luxury-button-ghost">Contact form <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
