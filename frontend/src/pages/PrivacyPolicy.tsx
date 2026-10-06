import PageFrame from "@/components/PageFrame";
import Seo from "@/components/Seo";

const sections = [
  ["Information I collect", "The contact form collects your name, email address, company, selected service, and message. I also receive information you choose to send by email or WhatsApp."],
  ["How I use information", "I use your details to review and reply to your enquiry, prepare a requested scope, and deliver an agreed service. I do not sell personal data or use enquiry details for unrelated bulk marketing."],
  ["Email delivery and providers", "Contact form messages are delivered through a managed transactional email provider. Website and communication providers may process limited technical data to operate their services."],
  ["Retention and security", "I keep enquiry and client records only as long as reasonably needed for communication, service delivery, accounting, or legal obligations. I use practical access controls and treat client business data as confidential."],
  ["Your choices", "You can ask what information I hold about you, request a correction, or ask for deletion where no legal retention requirement applies. Email khushboo@arcturusprofessional.com with a written request."],
  ["Contact", "Privacy questions can be sent to khushboo@arcturusprofessional.com. I am based in New Delhi, India and serve businesses in Ireland, the UK, and wider Europe."],
];

export default function PrivacyPolicy() {
  return <PageFrame><Seo path="/privacy-policy" /><article className="premium-panel mx-5 my-12 max-w-4xl rounded-[2rem] border border-[#ddd8cd] bg-white px-6 py-12 sm:mx-8 sm:px-10 sm:py-16 lg:mx-auto lg:my-20" data-testid="privacy-page"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4263aa]">Last updated 21 February 2026</p><h1 className="mt-5 break-words font-serif text-[2.4rem] text-[#0f172a] sm:text-6xl" data-testid="privacy-heading">Privacy Policy</h1><p className="mt-7 text-lg leading-8 text-[#475569]">I am Khushboo Tomar, trading as Arcturus Professional Services. This policy explains how I handle information submitted through this website.</p>{sections.map(([title, copy], index) => <section key={title} className="border-b border-[#e2dfd8] py-8 last:border-b-0" data-testid={`privacy-section-${index + 1}`}><h2 className="break-words font-serif text-3xl text-[#0f2942]">{title}</h2><p className="mt-4 text-base leading-8 text-[#64748b]">{copy}</p></section>)}</article></PageFrame>;
}
