export const SITE_NAME = "Arcturus Professional Services";
export const CONTACT_EMAIL = "khushboo@arcturusprofessional.com";

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
  featured?: boolean;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePageExtras {
  summary: string;
  reporting: string[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  lastUpdated: string;
  paymentTerms: string;
  commercialHighlights: string[];
  workingNote?: string;
}

export const services: ServiceContent[] = [
  {
    slug: "linkedin-management",
    navLabel: "LinkedIn Management",
    title: "LinkedIn Management",
    eyebrow: "01 / Profile & Outreach Management",
    description: "Build a stronger presence. Reach the right people. Every connection followed through, never left on read.",
    overview: "I manage the practical LinkedIn work behind a more consistent professional presence: profile preparation, targeted prospecting, connection outreach, follow-up, content scheduling, and regular reporting.",
    audience: "Best suited to founders, consultants, and B2B sales leaders who can provide access, context, and timely feedback.",
    inclusions: [
      "Professional review and optimisation of your LinkedIn profile",
      "Company page creation and setup if your business does not already have one",
      "Relevant businesses and decision-makers researched using LinkedIn Sales Navigator",
      "Structured connection requests sent to the agreed target audience",
      "Relevant InMails, engagement, and group participation where suitable",
      "Professional follow-ups for accepted connections, without aggressive sales messaging",
      "Authority-led posts, lead magnets, and nurture content built around your offer",
      "A practical funnel from first connection to qualified conversation",
      "Daily LinkedIn content with images or video where suitable",
      "Weekly LinkedIn newsletter support, with content scheduled for 9:00 AM UK/Irish time using Hootsuite",
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
    featured: true,
  },
  {
    slug: "email-outreach",
    navLabel: "Email Outreach",
    title: "Email Outreach",
    eyebrow: "02 / Cold Email Marketing & Deliverability Setup",
    description: "Reach the right people. Start better conversations with a structured cold email workflow.",
    overview: "I prepare and manage each cold email campaign from technical setup and the required warm-up period through campaign preparation, outreach, follow-ups, and reporting.",
    audience: "For businesses with a clear B2B offer, an agreed audience, and the capacity to respond when interest arrives.",
    inclusions: [
      "Professional, relevant outreach copy written for your business and audience",
      "Verified business contacts sourced for your campaign",
      "Campaign setup, sending, monitoring, and management through Instantly.ai",
      "Two to three follow-up emails included where appropriate",
      "Ongoing monitoring and adjustment for campaign performance",
      "Up to 10,000 unique emails per client campaign",
      "Sending capacity of up to 500 emails per day per email account when the account, warm-up and platform limits allow",
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
    featured: true,
  },
  {
    slug: "business-support",
    navLabel: "Business Support",
    title: "Business Support",
    eyebrow: "03 / Day-to-Day Admin & Back-Office Support",
    description: "Practical support for the recurring administrative and back-office work that keeps a business moving.",
    overview: "I provide task-based support for routine administration, online research, content, website support, and other agreed back-office needs.",
    audience: "Useful for founders and small teams who need an organised extra pair of hands without a full-time hire.",
    inclusions: [
      "AI-assisted content writing based on your brief and source material",
      "Website support, including practical DNS management where agreed",
      "LinkedIn posting and scheduling support",
      "YouTube upload and channel support without YouTube SEO services",
      "Advertising campaign administration and agreed ad management tasks",
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
      { label: "Work started", detail: "I begin the agreed task with the relevant information and access." },
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
    featured: true,
  },
  {
    slug: "ai-video-creation",
    navLabel: "AI Video Creation",
    title: "AI Video Creation",
    eyebrow: "04 / Custom AI-Generated Video Content",
    description: "Fresh content every single day without the production overhead.",
    overview: "I create short-form AI-generated videos for social channels, using your business information, brand assets, content themes, and preferred style as the basis for the prompts and production flow.",
    audience: "For businesses that need a consistent stream of concise social content for Instagram, TikTok, YouTube, or LinkedIn.",
    inclusions: [
      "2 short-form AI-generated videos per day, 7 days a week, based on the agreed content plan",
      "Approximately 10-second videos designed for social media viewing",
      "Your logo, business details, brand style, and end cards added where suitable",
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
    timeline: "The agreed schedule is 2 short-form videos per day, 7 days a week, based on the content plan and brief. Videos are approximately 10 seconds long; sample videos can be shared before work begins.",
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
    featured: true,
  },
  {
    slug: "lead-generation",
    navLabel: "Lead Generation",
    title: "Lead Generation",
    eyebrow: "05 / Finding & Verifying the Right Contacts",
    description: "Quality over quantity: a clean, verified list of the kind of people you want to reach.",
    overview: "I define the ideal client profile with you, research relevant businesses and decision-makers, clean and verify contact data, and deliver the result in an organised spreadsheet.",
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
  },
  {
    slug: "email-setup",
    navLabel: "Email Setup",
    title: "Email Setup",
    eyebrow: "06 / Professional Email & DNS Configuration",
    description: "A one-time setup that gets your domain outreach-ready.",
    overview: "I configure the professional email and domain records needed to establish the technical foundation for an outreach workflow.",
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
  },
];

const SERVICE_ORDER = ["linkedin-management", "email-outreach", "lead-generation", "email-setup", "business-support", "ai-video-creation"];
export const orderedServices = SERVICE_ORDER.map((slug) => services.find((service) => service.slug === slug)).filter((service): service is ServiceContent => Boolean(service));
export const featuredServices = orderedServices.slice(0, 5);
export const supportingServices = orderedServices.slice(5);

export const servicePageExtras: Record<string, ServicePageExtras> = {
  "linkedin-management": {
    summary: "I manage LinkedIn profiles, content, targeted outreach, and nurture for UK and Irish businesses that want a consistent B2B presence. The service costs €400 per month, and you provide your own Sales Navigator subscription.",
    reporting: ["Connection acceptance percentage", "Engagement growth across agreed content", "Qualified conversations created through outreach"],
    relatedSlugs: ["lead-generation", "business-support"],
    lastUpdated: "7 October 2026",
    paymentTerms: "€400 / month, paid upfront at the start of each month. The current paid billing month is completed in full.",
    commercialHighlights: ["Initial setup: 2–3 working days once access, verification and business information are available.", "Outreach is approximately 200 connection invitations per week, depending on account activity, audience targeting and LinkedIn limits.", "LinkedIn Sales Navigator and Hootsuite are separate subscriptions paid directly by the client.", "Weekly LinkedIn newsletter support and regular reporting are included where relevant to the agreed brief."],
    workingNote: "LinkedIn platform limits and account activity can affect outreach volume. No revenue or outcome guarantee is made.",
    faqs: [
      { question: "What does LinkedIn management include?", answer: "Profile optimisation, regular posting, connection outreach, follow-ups, lead magnets, nurture sequences and authority content, depending on what your goals need." },
      { question: "Do I need Sales Navigator?", answer: "Yes. You provide your own LinkedIn Sales Navigator subscription, and I use it for targeting and research." },
      { question: "Will you post from my account?", answer: "Yes, with your approval of the content direction. You keep control of your account and settings." },
      { question: "How do I know it's working?", answer: "I report on connection acceptance rate, engagement growth, and qualified conversations generated." },
      { question: "Is this a long contract?", answer: "No. It's a flat monthly price, paid upfront. If you cancel, the current billing month is completed in full." },
    ],
  },
  "email-outreach": {
    summary: "I set up and manage B2B cold email campaigns for UK and Irish businesses that need careful targeting, proper warm-up, and clear reporting. The managed service costs €450 per month, with lead research and email setup priced separately when required.",
    reporting: ["Open percentage", "Reply percentage", "Click-through percentage", "Bounce rate", "Inbox placement observations"],
    relatedSlugs: ["email-setup", "lead-generation"],
    lastUpdated: "7 October 2026",
    paymentTerms: "€450 / month, paid upfront. Email Setup and lead lists are separate where required.",
    commercialHighlights: ["Minimum one-month warm-up period before active outreach.", "Up to 10,000 unique emails per client campaign.", "Two to three follow-ups included where appropriate.", "Campaigns can send up to 500 emails per day per email account depending on account condition, platform limits and campaign readiness.", "Email Setup is €80 one-time when technical configuration is needed."],
    workingNote: "No open, reply, meeting, sales or inbox-placement guarantee is made.",
    faqs: [
      { question: "What's included?", answer: "Campaign setup, copywriting, sending, follow-ups, and monthly reporting." },
      { question: "Why do new domains need warm-up?", answer: "Warm-up builds sender reputation so emails have a better chance of reaching inboxes. New domains are warmed for one month before scaling." },
      { question: "Is cold email legal?", answer: "The service uses a B2B-only, GDPR and PECR-aware approach, business-professional data, and proper unsubscribe handling. This is not legal advice, and each client remains responsible for confirming the lawful basis and requirements that apply to their campaign." },
      { question: "What do you report on?", answer: "Open rate, reply rate, click-through rate, bounce rate, and inbox placement insights." },
      { question: "Do email list costs come with the €450?", answer: "The monthly price covers my work. Data costs, where needed, are discussed and charged separately." },
    ],
  },
  "business-support": {
    summary: "I provide remote business support for founders and small teams that need reliable help with research, admin, websites, content, and recurring digital tasks. The service costs €12 per hour and is billed for the time spent on agreed work.",
    reporting: ["Time used against agreed tasks", "Completed work and outstanding dependencies", "Clear written notes for each delivery"],
    relatedSlugs: ["linkedin-management", "ai-video-creation"],
    lastUpdated: "7 October 2026",
    paymentTerms: "€12 / hour. Hours and scope are agreed in writing before work begins, and payment is made upfront for the agreed work.",
    commercialHighlights: ["Task-based support covering administration, research, data entry, documents, back-office tasks and agreed website/digital support.", "Tasks requiring significant additional research or extended time are discussed before work continues.", "Work is billed according to actual time spent on agreed tasks."],
    workingNote: "Business Support is practical task-based support, not a substitute for legal, financial, HR or other specialist advice.",
    faqs: [
      { question: "What can you help with?", answer: "Research, AI-assisted content writing, website support including DNS management, LinkedIn posting, YouTube support without SEO, and ad management." },
      { question: "How are hours tracked?", answer: "I share a written summary of tasks and hours so you always see what you paid for." },
      { question: "Do you handle CRM management?", answer: "No, I don't offer CRM management." },
      { question: "Can I send tasks any time?", answer: "Yes, in writing. I'll confirm and reply in writing." },
      { question: "Is there a minimum?", answer: "Hours are agreed in writing before work starts and paid upfront." },
    ],
  },
  "lead-generation": {
    summary: "I research and verify B2B contacts for businesses targeting Ireland, the UK, and Europe by company size, role, industry, and location. The service costs €0.80 per verified business contact.",
    reporting: ["Source fields included with delivered records", "Verification status and cleaned contact data", "Delivery count against the agreed target profile"],
    relatedSlugs: ["email-outreach", "linkedin-management", "email-setup"],
    lastUpdated: "7 October 2026",
    paymentTerms: "€0.80 per verified business contact, payable before the completed list is delivered.",
    commercialHighlights: ["First list normally delivered within 5–7 working days once target criteria are confirmed.", "Targeting can include industry, location, company size, job titles, exclusions and specific requirements.", "Research workflow uses LinkedIn Sales Navigator, Apollo and UseBouncer as shown in the service materials."],
    workingNote: "Delivery timing depends on the confirmed target criteria and list size.",
    faqs: [
      { question: "What counts as a verified contact?", answer: "A business contact I've researched and checked, with name, role, company and email." },
      { question: "Where does the data come from?", answer: "I explain my data sources in writing so you know exactly how the list was built." },
      { question: "Can I choose who you target?", answer: "Yes: company size, job title, industry and location." },
      { question: "Do I need Sales Navigator?", answer: "Yes, you provide your own subscription." },
      { question: "Is the data GDPR-safe?", answer: "I use a B2B-only, GDPR and PECR-aware approach and work with business-professional data. This is not legal advice, and each client remains responsible for confirming the lawful basis and requirements that apply to their activity." },
    ],
  },
  "ai-video-creation": {
    summary: "I create basic custom AI videos and reels for businesses that need regular branded social content without professional video editing. The service costs €400 per month and follows a schedule of 2 videos per day, 7 days a week, based on the agreed brief and content direction.",
    reporting: ["Video output against the agreed 2-per-day schedule", "Content topics and delivery status", "Prompt revisions and approved branding elements"],
    relatedSlugs: ["business-support", "linkedin-management"],
    lastUpdated: "7 October 2026",
    paymentTerms: "€400 / month, paid upfront. Hootsuite subscription costs are separate and paid directly by the client.",
    commercialHighlights: ["2 videos per day, 7 days a week, based on the agreed content schedule and brief.", "Short-form videos are approximately 10 seconds and include agreed branding, business details and end cards where suitable.", "Content can be prepared for Instagram, TikTok, YouTube and LinkedIn and scheduled through Hootsuite.", "Prompt-based revisions are included; this is not manual professional video editing or live-action production."],
    workingNote: "Video output follows the agreed prompt, content direction and platform requirements.",
    faqs: [
      { question: "What kind of videos are these?", answer: "Basic to custom AI-generated videos and reels, not professional video editing." },
      { question: "Can you add my branding?", answer: "Yes: logo, business details and end cards." },
      { question: "How many videos do I get?", answer: "The agreed schedule is 2 videos per day, 7 days a week, based on the content plan and brief." },
      { question: "What do you need from me?", answer: "A short written brief, your logo and the message you want each video to carry." },
      { question: "Can you make videos for any industry?", answer: "I'll confirm in writing after seeing your brief." },
    ],
  },
  "email-setup": {
    summary: "I configure professional business email and DNS authentication for businesses that need a sound technical foundation for deliverability. The one-time service costs €80 and covers SPF, DKIM, DMARC, and DNS verification.",
    reporting: ["Records configured during setup", "DNS verification status", "Written handover and any outstanding provider actions"],
    relatedSlugs: ["email-outreach", "lead-generation"],
    lastUpdated: "7 October 2026",
    paymentTerms: "€80 one-time, paid upfront before setup begins.",
    commercialHighlights: ["Professional email configuration plus SPF, DKIM and DMARC.", "DNS records are configured and verified against the agreed email provider.", "This setup is separate from the ongoing €450/month Email Outreach service.", "Third-party domains, hosting, email accounts and software are paid separately by the client unless expressly included in writing."],
    workingNote: "A setup schedule is confirmed after the required domain, email and DNS access are available.",
    faqs: [
      { question: "What's included?", answer: "Business email and DNS configuration so your domain is ready for sending, including authentication records." },
      { question: "Why does it matter?", answer: "Correct setup helps emails have a better chance of reaching inboxes instead of spam." },
      { question: "Is it a monthly cost?", answer: "No, it's a one-time €80." },
      { question: "Do I need this before email outreach?", answer: "If your domain isn't set up properly, yes." },
      { question: "How long does setup take?", answer: "I'll confirm in writing once I have your domain access." },
    ],
  },
};

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
