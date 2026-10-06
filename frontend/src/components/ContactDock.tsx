import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CONTACT_EMAIL, getContactHref } from "@/lib/site";

const contacts = [
  { label: "WhatsApp", href: "https://wa.me/919911284362", icon: FaWhatsapp, colour: "bg-[#128c7e]", external: true, testId: "quick-contact-whatsapp" },
  { label: "Email", href: getContactHref(), icon: MdOutlineEmail, colour: "bg-[#0f2942]", external: false, testId: "quick-contact-email" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khushboo-tomar", icon: FaLinkedinIn, colour: "bg-[#0a66c2]", external: true, testId: "quick-contact-linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/arcturusprofessional", icon: FaInstagram, colour: "instagram-contact", external: true, testId: "quick-contact-instagram" },
];

export default function ContactDock() {
  return (
    <nav className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/70 bg-[#fbf8f1]/90 p-2 shadow-[0_18px_45px_-24px_rgba(15,41,66,0.75)] backdrop-blur-xl md:bottom-auto md:left-auto md:right-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:flex-col md:items-end md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none" aria-label="Quick contact" data-testid="quick-contact-dock">
      {contacts.map(({ label, href, icon: Icon, colour, external, testId }) => (
        <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} aria-label={`${label} ${label === "Email" ? CONTACT_EMAIL : "contact"}`} title={label} className={`group flex h-11 w-11 items-center overflow-hidden rounded-full text-white shadow-[0_12px_28px_-18px_rgba(15,41,66,0.9)] transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg focus-visible:w-40 md:h-12 md:w-12 md:hover:w-40 md:focus-visible:w-40 motion-reduce:transform-none motion-reduce:transition-none ${colour}`} data-testid={testId}>
          <span className="grid size-11 shrink-0 place-items-center md:size-12" aria-hidden="true"><Icon className="size-5" /></span>
          <span className="hidden whitespace-nowrap pr-4 text-sm font-semibold opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 md:block" data-testid={`${testId}-label`}>{label}</span>
        </a>
      ))}
    </nav>
  );
}
