export const SITE_NAME = "Arcturus Professional Services";
export const CONTACT_EMAIL = "khushboo@arcturusprofessional.com";
export const CANONICAL_BASE = "https://arcturusprofessional.com";

export interface ServiceProcessStep {
  label: string;
  detail: string;
}

export interface ServiceContent {
  slug: string;
  navLabel: string;
  title: string;
  eyebrow: string;
  description: string;
  overview: string;
  audience: string;
  inclusions: string[];
  exclusions: string[];
  process: ServiceProcessStep[];
  timeline: string;
  requirements: string[];
  metaTitle: string;
  metaDescription: string;
  accent: string;
}

export const services: ServiceContent[] = [
  {
    slug: "linkedin-management",
    navLabel: "LinkedIn Management",
    title: "LinkedIn Management",
    eyebrow: "01 / Presence & outreach",
    description:
      "A structured LinkedIn service for founders and sales teams that need consistent positioning, thoughtful outreach, and a clear weekly rhythm.",
    overview:
      "Arcturus can help turn an underused LinkedIn presence into a more considered channel for visibility and conversations. Work is shaped around your voice, your offer, and the audiences you want to reach rather than a one-size-fits-all posting schedule.",
    audience:
      "Best suited to founders, consultants, and B2B sales leaders who can provide access, context, and timely feedback.",
    inclusions: [
      "Profile and offer review to establish the starting point",
      "A practical content calendar with drafted posts or prompts",
      "Research-led connection and conversation targets",
      "Personalised outreach sequences for agreed audiences",
      "A simple weekly activity and learning summary",
    ],
    exclusions: [
      "Automated mass messaging or indiscriminate connection activity",
      "Guaranteed lead, meeting, or revenue outcomes",
      "Taking ownership of personal opinions without your review",
      "Paid media, sales closing, or CRM implementation",
    ],
    process: [
      { label: "Align", detail: "Clarify the offer, audience, voice, and practical goals." },
      { label: "Prepare", detail: "Review the profile and prepare the first content and outreach plan." },
      { label: "Deliver", detail: "Run the agreed weekly activity with review points built in." },
      { label: "Learn", detail: "Share observations and refine the next cycle from real responses." },
    ],
    timeline: "Initial setup is typically followed by a recurring weekly delivery rhythm. Exact availability and turnaround are agreed after the first conversation.",
    requirements: [
      "Access to the relevant LinkedIn profile or a reliable point of contact",
      "A clear description of your offer, audience, and preferred markets",
      "Timely review of drafts and conversations that need your input",
    ],
    metaTitle: "B2B LinkedIn Management | Arcturus Professional Services",
    metaDescription: "Structured LinkedIn positioning, content drafting, and thoughtful outreach for European founders and B2B sales teams.",
    accent: "gold",
  },
  {
    slug: "email-outreach",
    navLabel: "Email Outreach",
    title: "Email Outreach",
    eyebrow: "02 / Research & messaging",
    description:
      "Focused B2B email outreach built around a defined audience, clear messaging, and a delivery process you can understand.",
    overview:
      "A considered email outreach programme starts with who should hear from you and why. Arcturus supports the research, message preparation, and follow-up structure needed to create a more useful outbound workflow without making promises the process cannot support.",
    audience:
      "For businesses with a clear B2B offer, a defined market, and the capacity to respond when interest arrives.",
    inclusions: [
      "Target audience and prospect criteria planning",
      "Research and organisation of an agreed prospect set",
      "Initial email copy and follow-up message drafts",
      "Subject line or message angle variations where useful",
      "A delivery summary with practical observations",
    ],
    exclusions: [
      "Generic bulk lists or indiscriminate mass sending",
      "Legal, privacy, or regulatory advice",
      "Guaranteed open, reply, meeting, or sales rates",
      "Domain purchase, mailbox administration, or full CRM build",
    ],
    process: [
      { label: "Define", detail: "Agree the audience, offer, geography, and qualification signals." },
      { label: "Research", detail: "Build a focused prospecting brief and identify relevant organisations." },
      { label: "Draft", detail: "Prepare concise messages and a follow-up sequence for your review." },
      { label: "Review", detail: "Share delivery notes and use your feedback to sharpen the next cycle." },
    ],
    timeline: "Timing depends on the size and specificity of the agreed prospecting brief. A delivery schedule is confirmed before work begins.",
    requirements: [
      "A defined offer and the type of business you want to reach",
      "Target countries, sectors, job functions, or other useful filters",
      "An approved sending setup and a named person to handle replies",
    ],
    metaTitle: "B2B Email Outreach & Prospect Sourcing | Arcturus",
    metaDescription: "Research-led B2B email outreach, prospect sourcing, and tailored follow-up workflows for European businesses.",
    accent: "blue",
  },
  {
    slug: "business-support",
    navLabel: "Business Support",
    title: "Business Support",
    eyebrow: "03 / Operations & capacity",
    description:
      "Dependable day-to-day support for business owners who need more order around the work that keeps everything moving.",
    overview:
      "Arcturus provides practical support for recurring operational tasks, research, coordination, and administration. The aim is simple: create more capacity for the decisions and client work that need your attention.",
    audience:
      "Useful for founders and small teams who need an organised extra pair of hands but not a full-time hire.",
    inclusions: [
      "Inbox and task-list organisation",
      "Calendar, meeting, and follow-up coordination",
      "Business and market research summaries",
      "Spreadsheet, CRM, or information housekeeping",
      "Agreed recurring admin and operational support",
    ],
    exclusions: [
      "Unbounded availability or same-minute response cover",
      "Financial, legal, HR, or specialist professional advice",
      "Work requiring access that has not been provided or approved",
      "Tasks outside the agreed brief without a scope conversation",
    ],
    process: [
      { label: "Map", detail: "List the recurring tasks, tools, priorities, and handover points." },
      { label: "Prioritise", detail: "Agree what should happen first and how progress will be visible." },
      { label: "Support", detail: "Work through the agreed task list with clear written updates." },
      { label: "Adjust", detail: "Review the rhythm and reshape the support as your needs change." },
    ],
    timeline: "Support can be discussed as an agreed recurring arrangement or a defined project. Turnaround and working hours are confirmed in writing.",
    requirements: [
      "A written list of current priorities and recurring tasks",
      "Access to the tools and information needed for the agreed work",
      "A clear contact for decisions, approvals, and urgent questions",
    ],
    metaTitle: "Executive Business & Administrative Support | Arcturus",
    metaDescription: "Practical operational, research, coordination, and administrative support for European business owners and small teams.",
    accent: "green",
  },
  {
    slug: "ai-video-creation",
    navLabel: "AI Video Creation",
    title: "AI Video Creation",
    eyebrow: "04 / Scripts & visual communication",
    description:
      "Clear, useful video content for explainers, product walkthroughs, announcements, and internal communication.",
    overview:
      "Arcturus helps turn a message into a concise video concept and production brief. Depending on the agreed format, this may include scripting, synthetic voice or avatar elements, visual direction, and a considered revision round.",
    audience:
      "For businesses that need a practical way to explain an offer, share an update, or make internal information easier to absorb.",
    inclusions: [
      "A short brief to clarify the audience, purpose, and key message",
      "Script or storyboard drafting in an agreed tone",
      "AI-assisted visual, voice, or avatar production where suitable",
      "Basic edit direction and an agreed revision stage",
      "A final file specification agreed before production",
    ],
    exclusions: [
      "Unlimited revisions or open-ended creative development",
      "Filming, complex live-action production, or location work",
      "Unlicensed brand, music, voice, or third-party source material",
      "Guaranteed performance, reach, or conversion outcomes",
    ],
    process: [
      { label: "Brief", detail: "Confirm the audience, purpose, format, and assets available." },
      { label: "Shape", detail: "Turn the raw information into a concise script and visual plan." },
      { label: "Create", detail: "Produce the agreed version with clear review points." },
      { label: "Refine", detail: "Apply the included feedback and prepare the agreed final output." },
    ],
    timeline: "Delivery depends on the format, length, language, and availability of source material. A production schedule is agreed before creation starts.",
    requirements: [
      "A clear topic, audience, intended channel, and approximate length",
      "Approved brand assets, product information, and any required references",
      "One decision-maker who can consolidate feedback",
    ],
    metaTitle: "AI Video Creation & Product Explainers | Arcturus",
    metaDescription: "AI-assisted scripts, explainers, product walkthroughs, and internal communication videos for modern European businesses.",
    accent: "red",
  },
];

export function getService(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}

export function getContactHref(service?: ServiceContent) {
  const subject = service
    ? `${service.title} Enquiry - Arcturus`
    : "Enquiry via Arcturus Professional Website";
  const body = service
    ? `Hi Khushboo,\n\nI would like to discuss ${service.title} for my business.\n\nCompany:\nObjectives:\nTimeline:\n\nRegards,`
    : "Hi Khushboo,\n\nI would like to discuss services for my business.\n\nCompany:\nService of Interest:\nTimeline:\n\nRegards,";
  return `mailto:${CONTACT_EMAIL}?${new URLSearchParams({ subject, body }).toString()}`;
}
