import { ArrowRight, ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import PageFrame from "@/components/PageFrame";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { CONTACT_EMAIL, getContactHref } from "@/lib/site";
import AmbientScene from "@/components/AmbientScene";

export default function Contact() {
  return (
    <PageFrame>
      <Seo path="/contact" />
      <section className="luxury-hero contact-hero-rich" data-testid="contact-hero">
        <AmbientScene type="contact" className="contact-ambient-scene" />
        <div className="luxury-shell luxury-hero-inner">
          <Reveal className="luxury-hero-copy">
            <p className="luxury-eyebrow"><span>06</span> Written enquiries · direct support</p>
            <h1 data-testid="contact-heading">Tell me what you need to <em>move forward.</em></h1>
            <p className="luxury-hero-lead" data-testid="contact-intro">
              Send the business, service, objective and timeline. Written is enough. I will review the brief and reply with the most practical next step.
            </p>
            <div className="luxury-hero-actions">
              <Link to="/services" className="luxury-button luxury-button-dark">See services <ArrowRight size={16} /></Link>
              <a href={"mailto:" + CONTACT_EMAIL} className="luxury-button luxury-button-ghost">Email directly</a>
            </div>
          </Reveal>
          <Reveal className="luxury-hero-art-wrap" delay={120}>
            <div className="luxury-hero-art" aria-label="Arcturus contact">
              <div className="luxury-art-arch" />
              <div className="luxury-art-disc" />
              <div className="luxury-art-ring luxury-art-ring-one" />
              <div className="luxury-art-ring luxury-art-ring-two" />
              <div className="luxury-art-letter">C</div>
              <div className="luxury-art-word">CONTACT</div>
              <div className="luxury-art-caption">WRITTEN · DIRECT · CLEAR</div>
              <div className="luxury-art-side">EMAIL · LINKEDIN · WHATSAPP</div>
              <div className="luxury-art-index">06 / 06</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-facts-strip">
        <div className="luxury-shell contact-facts-grid">
          <div><strong>Advance</strong><span>Payment before work begins</span></div>
          <div><strong>Written</strong><span>Email, LinkedIn and WhatsApp</span></div>
          <div><strong>UK · IE</strong><span>Working hours aligned to UK & Irish time</span></div>
          <div><strong>Direct</strong><span>One freelancer from brief to delivery</span></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:px-10" data-testid="contact-main">
        <aside className="space-y-6">
          <Reveal className="premium-panel rounded-t-[7rem] rounded-b-[2rem] bg-[#0f2942] p-7 pt-16 text-white sm:p-10 sm:pt-20">
            <h2 className="break-words font-serif text-3xl text-white">Contact details</h2>
            <div className="mt-7 space-y-5 text-sm">
              <a href={"mailto:" + CONTACT_EMAIL} className="flex gap-3 text-[#dce6ff] transition-colors duration-200 hover:text-white" data-testid="contact-email-link"><Mail className="size-5 shrink-0" /><span className="break-all">{CONTACT_EMAIL}</span></a>
              <a href="https://wa.me/919911284362" target="_blank" rel="noreferrer" className="flex gap-3 text-[#dce6ff] transition-colors duration-200 hover:text-white" data-testid="contact-whatsapp-link"><MessageCircle className="size-5 shrink-0" />+91 99112 84362</a>
              <p className="flex gap-3 text-[#dce6ff]" data-testid="contact-location"><MapPin className="size-5 shrink-0" />New Delhi, India</p>
            </div>
            <a href={getContactHref()} className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-[#0f2942] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#dce6ff]" data-testid="contact-email-button">Open a prefilled email draft <ArrowUpRight className="size-4" /></a>
          </Reveal>

          <Reveal className="premium-panel rounded-[2rem] bg-[#ece8f4] p-7" delay={80}>
            <h2 className="font-serif text-2xl text-[#0f2942]">Before you start</h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-[#475569]">
              <p><strong>Payment:</strong> services are paid upfront before work begins unless otherwise agreed in writing.</p>
              <p><strong>Communication:</strong> work stays documented in writing. No phone calls or call-booking appointments.</p>
              <p><strong>Scope:</strong> send the service you have in mind, what you want done, target audience and timeline.</p>
              <p><strong>Third-party costs:</strong> paid subscriptions and platforms stay with the client unless specifically included.</p>
            </div>
          </Reveal>

          <Reveal className="premium-panel rounded-[2rem] bg-[#e7f1ef] p-7" delay={140}>
            <h2 className="font-serif text-2xl text-[#0f2942]">Find me online</h2>
            <div className="mt-5 space-y-3 text-sm">
              <a href="https://www.linkedin.com/in/khushboo-tomar" target="_blank" rel="noreferrer" className="block font-semibold text-[#4263aa] transition-colors duration-200 hover:text-[#0f2942]" data-testid="contact-linkedin-link">linkedin.com/in/khushboo-tomar</a>
              <a href="https://www.instagram.com/arcturusprofessional" target="_blank" rel="noreferrer" className="block font-semibold text-[#4263aa] transition-colors duration-200 hover:text-[#0f2942]" data-testid="contact-instagram-link">Instagram @arcturusprofessional</a>
            </div>
          </Reveal>
        </aside>

        <Reveal className="self-start" delay={90}>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2c7a73]">Secure enquiry form</p>
          <h2 className="mt-4 mb-7 break-words font-serif text-4xl text-[#0f172a]">Send the brief in writing</h2>
          <ContactForm />
        </Reveal>
      </section>
    </PageFrame>
  );
}
