export const SITE_NAME = "Arcturus Professional Services";
export const CONTACT_EMAIL = "khushboo@arcturusprofessional.com";
export const CANONICAL_BASE = "https://arcturusprofessional.com";
export const SOURCE_PDF_URL = "https://customer-assets-wrfwihn1.emergentagent.net/job_khushboo-services/artifacts/b7ljm8g9_APS.pdf";

export interface ServiceProcessStep {
  label: string;
  detail: string;
}

export interface RelatedService {
  slug: string;
  title: string;
  description: string;
  price: string;
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
  price: string;
  priceNote: string;
  tools?: string[];
  sourceNote?: string;
  relatedServices?: RelatedService[];
  metaTitle: string;
  metaDescription: string;
  featured?: boolean;
}

export const services: ServiceContent[] = [
  {
    slug: "linkedin-management",
    navLabel: "LinkedIn Management",
    title: "LinkedIn Management",
    eyebrow: "01 / Profile & Outreach Management",
    description: "Build a stronger presence. Reach the right people. Every connection followed through, never left on read.",
    overview: "Arcturus manages the practical LinkedIn work behind a more consistent professional presence: profile preparation, targeted prospecting, connection outreach, follow-up, content scheduling, and regular reporting.",
    audience: "Best suited to founders, consultants, and B2B sales leaders who can provide access, context, and timely feedback.",
    inclusions: [
      "Professional review and optimisation of your LinkedIn profile",
      "Company page creation and setup if your business does not already have one",
      "Relevant businesses and decision-makers researched using LinkedIn Sales Navigator",
      "Structured connection requests sent to the agreed target audience",
      "Relevant InMails, engagement, and group participation where suitable",
      "Professional follow-ups for accepted connections, without aggressive sales messaging",
      "One LinkedIn post every day, using an image or video",
      "Four LinkedIn newsletters per month, one every week",
      "Content scheduled for 9:00 AM UK/Irish time using Hootsuite",
      "Regular reporting on outreach activity, connections, replies, and engagement",
    ],
    exclusions: [
      "LinkedIn Sales Navigator and Hootsuite subscriptions are separate and paid directly by the client",
      "LinkedIn platform limits and account activity can affect outreach volume",
      "No outcome or revenue guarantee is made for outreach activity",
    ],
    process: [
      { label: "Define your target", detail: "Agree the businesses, decision-makers, audience, and goals to work towards." },
      { label: "Build the outreach", detail: "Prepare the profile, content rhythm, targeting, and outreach approach." },
      { label: "Connect & follow up", detail: "Send agreed connection invitations and manage relevant follow-ups." },
      { label: "Engage & maintain", detail: "Keep the agreed content and conversation rhythm moving." },
      { label: "Track & report", detail: "Share activity, connections, replies, and engagement in regular reporting." },
    ],
    timeline: "Initial setup takes 2–3 working days once required access, verification, and business information are available. Outreach is approximately 200 connection invitations per week, depending on account activity, audience targeting, and LinkedIn platform limits.",
    requirements: [
      "LinkedIn Sales Navigator",
      "Any LinkedIn profile verification required before outreach begins",
      "Hootsuite for content scheduling",
      "Access and clear business information, audience, and content context",
    ],
    price: "€400 / month",
    priceNote: "Monthly managed service.",
    tools: ["LinkedIn", "LinkedIn Sales Navigator", "Hootsuite"],
    metaTitle: "B2B LinkedIn Management & Outreach | Arcturus",
    metaDescription: "Profile optimisation, daily LinkedIn content, targeted outreach, follow-ups, and reporting for European B2B businesses.",
    featured: true,
  },
  {
    slug: "email-outreach",
    navLabel: "Email Outreach",
    title: "Email Outreach",
    eyebrow: "02 / Cold Email Marketing & Deliverability Setup",
    description: "Reach the right people. Start better conversations with a structured cold email workflow.",
    overview: "Arcturus supports the preparation and management of a cold email campaign: from technical setup and a required warm-up period through campaign preparation, outreach, follow-ups, and reporting.",
    audience: "For businesses with a clear B2B offer, an agreed audience, and the capacity to respond when interest arrives.",
    inclusions: [
      "Professional, relevant outreach copy written for your business and audience",
      "Verified business contacts sourced for your campaign",
      "Campaign setup, sending, monitoring, and management through Instantly.ai",
      "Two to three follow-up emails included where appropriate",
      "Ongoing monitoring and adjustment for campaign performance",
      "Up to 10,000 unique emails per client campaign",
    ],
    exclusions: [
      "Lead lists are not included and are sourced separately according to your requirement",
      "Email Setup, where required, is priced separately",
      "Legal, privacy, or regulatory advice is not included",
      "No open, reply, meeting, sales, or inbox-placement guarantee is made",
    ],
    process: [
      { label: "Technical setup", detail: "Prepare the agreed email account and campaign setup." },
      { label: "Warm-up", detail: "Allow a minimum one-month warm-up period before active outreach." },
      { label: "Campaign preparation", detail: "Prepare the approved copy, audience, and campaign details." },
      { label: "Outreach", detail: "Run the agreed campaign with monitoring in place." },
      { label: "Follow-ups", detail: "Send two to three follow-up emails where appropriate." },
      { label: "Reporting", detail: "Provide regular reporting on metrics relevant to the service." },
    ],
    timeline: "A minimum one-month warm-up period applies before active outreach. The timing of technical setup, campaign preparation, outreach, follow-ups, and reporting is confirmed against the agreed brief.",
    requirements: [
      "An email account and domain for outreach",
      "Access or login details for the email account",
      "Basic company information and offer details",
      "Approval of email content and any target list before sending",
    ],
    price: "€450 / month",
    priceNote: "Monthly service; lead lists and Email Setup are separate.",
    tools: ["Instantly.ai"],
    relatedServices: [
      { slug: "lead-generation", title: "Lead Generation", description: "Finding & verifying the right contacts for a focused campaign.", price: "€0.80 / verified business contact" },
      { slug: "email-setup", title: "Email Setup", description: "Professional email and DNS configuration before outreach begins.", price: "€80 one-time" },
    ],
    metaTitle: "B2B Email Outreach & Prospect Sourcing | Arcturus",
    metaDescription: "Cold email marketing, deliverability setup, tailored outreach copy, follow-ups, and campaign reporting for European businesses.",
    featured: true,
  },
  {
    slug: "business-support",
    navLabel: "Business Support",
    title: "Business Support",
    eyebrow: "03 / Day-to-Day Admin & Back-Office Support",
    description: "Practical support for the recurring administrative and back-office work that keeps a business moving.",
    overview: "Arcturus provides task-based support for routine administration, online research, data entry, spreadsheets, documents, and other agreed back-office needs.",
    audience: "Useful for founders and small teams who need an organised extra pair of hands without a full-time hire.",
    inclusions: [
      "Support with routine administrative tasks and business organisation",
      "Research into businesses, information, competitors, suppliers, or agreed topics",
      "Accurate data entry, spreadsheet updates, and business information organisation",
      "Creating, updating, formatting, and organising business documents",
      "Practical support for recurring or one-off back-office tasks",
      "Tasks agreed in advance based on business requirements and available time",
    ],
    exclusions: [
      "Financial, legal, HR, or specialist professional advice",
      "Unbounded availability or same-minute response cover",
      "Work requiring access or information that has not been provided",
      "Significant additional research or extended time without a scope conversation",
    ],
    process: [
      { label: "Task shared", detail: "Share a clear description of the task and the expected result." },
      { label: "Work started", detail: "Arcturus begins the agreed task with the relevant information and access." },
      { label: "Task completed", detail: "The task is completed within the agreed scope and available time." },
      { label: "Result delivered", detail: "The completed work is delivered in an organised format." },
    ],
    timeline: "Turnaround is task-specific and agreed before work begins. Business Support is billed according to the actual time spent on agreed tasks.",
    requirements: [
      "A clear description of the task",
      "Relevant files or information",
      "Instructions or guidelines",
      "Access to the tools or platforms needed",
    ],
    price: "€12 / hour",
    priceNote: "Billed according to actual time spent on agreed work.",
    sourceNote: "Tasks requiring significant additional research or extended time are discussed and agreed before work continues.",
    metaTitle: "Executive Business & Administrative Support | Arcturus",
    metaDescription: "Day-to-day administration, research, data entry, documents, and back-office support for European business owners and small teams.",
    featured: true,
  },
  {
    slug: "ai-video-creation",
    navLabel: "AI Video Creation",
    title: "AI Video Creation",
    eyebrow: "04 / Custom AI-Generated Video Content",
    description: "Fresh content every single day without the production overhead.",
    overview: "Arcturus creates short-form AI-generated videos for social channels, using your business information, brand assets, content themes, and preferred style as the basis for the prompts and production flow.",
    audience: "For businesses that need a consistent stream of concise social content for Instagram, TikTok, YouTube, or LinkedIn.",
    inclusions: [
      "Two short-form AI-generated videos every day",
      "Content created seven days a week, Monday to Sunday",
      "Approximately 10-second videos designed for social media viewing",
      "Your logo, business details, and brand style incorporated where suitable",
      "Custom content ideas based on your business, services, products, and themes",
      "Content prepared for Instagram, TikTok, YouTube, and LinkedIn",
      "Content scheduled through Hootsuite",
    ],
    exclusions: [
      "Manual filming or manual editing",
      "Long-form or complex live-action production",
      "Unlimited changes outside prompt adjustments",
      "Hootsuite subscription costs are separate and paid directly by the client",
    ],
    process: [
      { label: "Idea", detail: "Agree the topics, products, services, and content direction." },
      { label: "Create", detail: "Generate each video directly from a tailored AI prompt." },
      { label: "Brand", detail: "Apply the agreed logo, business details, and brand style." },
      { label: "Schedule", detail: "Schedule the finished content through Hootsuite." },
    ],
    timeline: "Two videos are produced per day, seven days a week. Videos are approximately 10 seconds long; sample videos can be shared before work begins.",
    requirements: [
      "Your logo and branding",
      "Business information",
      "Preferred content topics",
      "Products, services, or offers to feature",
      "Examples of content styles you like",
    ],
    price: "€400 / month",
    priceNote: "Monthly service; Hootsuite subscription is separate.",
    tools: ["Google Gemini", "Google Flow", "Google Veo 3", "Hootsuite"],
    sourceNote: "Changes are made by adjusting the prompt, not through manual editing.",
    metaTitle: "AI Video Creation & Product Explainers | Arcturus",
    metaDescription: "Custom AI-generated short-form videos for social media, with branded content ideas and daily scheduling for European businesses.",
    featured: true,
  },
  {
    slug: "lead-generation",
    navLabel: "Lead Generation",
    title: "Lead Generation",
    eyebrow: "05 / Finding & Verifying the Right Contacts",
    description: "Quality over quantity: a clean, verified list of the kind of people you want to reach.",
    overview: "Arcturus defines the ideal client profile, researches relevant businesses and decision-makers, cleans and verifies contact data, and delivers the result in an organised spreadsheet.",
    audience: "For businesses that need a focused prospecting list prepared against clear industry, location, company-size, and role criteria.",
    inclusions: [
      "Ideal Client Profile covering industry, company size, location, job titles, and other requirements",
      "Targeted research of relevant businesses and decision-makers",
      "Relevant business contact details sourced using suitable research tools",
      "Decision-maker identification within each target business",
      "Contact data checked and organised before delivery",
      "Email addresses checked as part of the verification process",
      "Completed contacts delivered in a clear, easy-to-use spreadsheet",
    ],
    exclusions: [
      "Companies you do not want included must be identified in the brief",
      "The service does not provide legal, privacy, or regulatory advice",
      "The first delivery depends on target criteria being confirmed",
    ],
    process: [
      { label: "Define your ICP", detail: "Confirm the industries, locations, company size, roles, and exclusions." },
      { label: "Research & source", detail: "Find businesses and contacts against the agreed criteria." },
      { label: "Verify & clean", detail: "Check and organise contact details before delivery." },
      { label: "Organise & deliver", detail: "Provide the completed contacts in an easy-to-use spreadsheet." },
    ],
    timeline: "The first list is normally delivered within 5–7 working days once target criteria are confirmed.",
    requirements: [
      "Target industries",
      "Target locations",
      "Preferred company size",
      "Job titles or decision-maker roles",
      "Companies you do not want included",
      "Any specific targeting requirements",
    ],
    price: "€0.80 / verified business contact",
    priceNote: "Payable before the completed list is delivered, according to the agreed requirement.",
    tools: ["LinkedIn Sales Navigator", "Apollo", "UseBouncer"],
    metaTitle: "B2B Lead Generation & Verified Contacts | Arcturus",
    metaDescription: "Find and verify relevant B2B contacts by industry, location, company size, and role with organised spreadsheet delivery.",
  },
  {
    slug: "email-setup",
    navLabel: "Email Setup",
    title: "Email Setup",
    eyebrow: "06 / Professional Email & DNS Configuration",
    description: "A one-time setup that gets your domain outreach-ready.",
    overview: "Arcturus configures the professional email and domain records needed to establish the technical foundation for an outreach workflow.",
    audience: "For businesses that need their email and domain configuration prepared before an Email Outreach campaign begins.",
    inclusions: [
      "Professional email account configuration",
      "Domain authentication with SPF, DKIM, and DMARC",
      "DNS record setup and verification",
      "A technical foundation for deliverable outreach",
    ],
    exclusions: [
      "Email hosting or domain purchase costs",
      "Third-party software, platforms, domains, email accounts, or paid tools unless specifically stated otherwise",
      "Ongoing campaign management, which is covered separately under Email Outreach",
    ],
    process: [
      { label: "Confirm access", detail: "Agree the domain, email account, and DNS access needed for setup." },
      { label: "Configure", detail: "Set up the professional email account and authentication records." },
      { label: "Verify", detail: "Check the DNS records and confirm the agreed configuration." },
      { label: "Hand over", detail: "Confirm the setup is ready for the next agreed service step." },
    ],
    timeline: "A setup schedule is confirmed after the required domain and account access are available.",
    requirements: [
      "The domain and email account to be configured",
      "Access to the relevant email and DNS provider",
      "The account details required to verify the configuration",
    ],
    price: "€80 one-time",
    priceNote: "Billed once, before setup begins.",
    tools: ["DNS provider", "Email provider"],
    sourceNote: "Required before Email Outreach campaigns can begin if this setup is not already in place.",
    metaTitle: "Professional Email & DNS Setup | Arcturus",
    metaDescription: "Professional email account configuration, SPF, DKIM, DMARC, and DNS record setup for outreach-ready domains.",
  },
];

export const featuredServices = services.filter((service) => service.featured);
export const supportingServices = services.filter((service) => !service.featured);

export function getService(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}

export function getContactHref(service?: ServiceContent) {
  const subject = service ? `${service.title} Enquiry - Arcturus` : "Enquiry via Arcturus Professional Website";
  const body = service
    ? `Hi Khushboo,\n\nI would like to discuss ${service.title} for my business.\n\nCompany:\nObjectives:\nTimeline:\n\nRegards,`
    : "Hi Khushboo,\n\nI would like to discuss services for my business.\n\nCompany:\nService of Interest:\nTimeline:\n\nRegards,";
  return `mailto:${CONTACT_EMAIL}?${new URLSearchParams({ subject, body }).toString()}`;
}
