export const SITE_NAME = "Arcturus Professional Services";
export const CONTACT_EMAIL = "khushboo@arcturusprofessional.com";
export const WHATSAPP_MESSAGE = "Hi Khushboo, I found Arcturus Professional Services on your website and I'd like to discuss support for my business. Service I'm interested in: ";
export const WHATSAPP_LINK = `https://wa.me/919911284362?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
  /** Fixed pound sterling price for UK clients (invoices can be issued in euro or pounds) */
  priceGbp?: string;
  tiers?: { name: string; price: string; priceGbp?: string; detail: string }[];
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
  /** Plain-language explanation for non-technical readers */
  plain: { what: string; why: string; result: string };
  /** Jargon explained simply */
  glossary: { term: string; meaning: string }[];
}

export const services: ServiceContent[] = [
  {
    slug: "linkedin-management",
    navLabel: "LinkedIn Management",
    title: "LinkedIn Management",
    eyebrow: "01 / LinkedIn Management",
    description: "I run your LinkedIn for you: a stronger profile, the right connections and steady, polite follow-ups.",
    overview: "I look after the day-to-day LinkedIn work for you: your profile, finding the right people, connecting, following up, posting and reporting.",
    audience: "Founders, consultants and small B2B teams who want the right people to notice them on LinkedIn, but don't have time to do it every day.",
    inclusions: [
      "I improve your LinkedIn profile so people quickly understand what you do",
      "I find the right businesses and decision-makers for you, using LinkedIn Sales Navigator",
      "I send around 200 connection requests a week to people who match your target",
      "I follow up politely with people who accept, with no pushy sales messages",
      "I set up a company page if your business doesn't have one yet",
      "I send relevant InMails and join group conversations where it makes sense",
      "Weekly LinkedIn newsletter support, where it fits your brief",
      "Daily-post plan: one post every day (text, image or a short AI video), written around your offer",
      "Daily-post plan: posts go out at 9:00 AM UK/Irish time, scheduled with Hootsuite",
    ],
    exclusions: [
      "A promise of sales or results: LinkedIn's limits and your account's activity can change how many people I can reach",
    ],
    process: [
      { label: "You share a brief", detail: "Who you want to reach, and what you sell." },
      { label: "Setup, 2–3 working days", detail: "Starts once I have access and your business details." },
      { label: "Weekly outreach", detail: "The work listed above runs every week." },
      { label: "Updates", detail: "You see what's working and what I'll adjust." },
    ],
    timeline: "",
    requirements: [
      "A LinkedIn Sales Navigator subscription (you pay LinkedIn directly)",
      "Your LinkedIn profile verified, if LinkedIn asks for it",
      "A Hootsuite subscription, only for the daily-post plan",
      "A short brief: what you sell, who you want to reach, and any do's and don'ts",
    ],
    price: "From €250 / month",
    priceGbp: "From £200 / month",
    priceNote: "€250 / £200 outreach only · €450 / £375 with a daily post (text, image or AI video).",
    tiers: [
      { name: "Outreach", price: "€250 / month", priceGbp: "£200 / month", detail: "No posting." },
      { name: "Outreach + daily content", price: "€450 / month", priceGbp: "£375 / month", detail: "Adds one post every day." },
    ],
    tools: ["LinkedIn", "LinkedIn Sales Navigator", "Hootsuite"],
    featured: true,
  },
  {
    slug: "email-outreach",
    navLabel: "B2B Email Outreach",
    title: "B2B Email Outreach",
    eyebrow: "02 / B2B Email Outreach",
    description: "I email the right businesses for you, follow up, and tell you who replied.",
    overview: "I run your cold email campaigns from start to finish: getting the inbox ready, writing the emails, sending, following up and reporting.",
    audience: "Businesses that sell to other businesses, know who they want to reach, and can reply quickly when someone is interested.",
    inclusions: [
      "I write short, clear emails made for your business and your audience",
      "I set up, send and watch your campaign",
      "Sending tool (Instantly) and inbox warm-up tool (Mailivery) included: nothing extra to buy",
      "2 to 3 polite follow-up emails to people who haven't replied",
      "Up to 10,000 different people per campaign",
      "Up to 500 emails a day per email account, once the account is ready and limits allow",
      "I keep checking results and adjust the emails when needed",
    ],
    exclusions: [
      "Contact lists (who to email): ordered separately through Lead Generation",
      "Email Setup, if your domain isn't ready yet: €75 / £65 one-time per domain",
      "A faster start with ready-warmed inboxes costs extra",
      "Legal advice, for example on GDPR",
      "A promise of opens, replies, meetings or sales",
    ],
    process: [
      { label: "You share a brief", detail: "Your offer, your ideal client and the email account to send from." },
      { label: "Warm-up, month one", detail: "Your inbox is prepared before real sending starts." },
      { label: "You approve", detail: "Nothing is sent until you OK the emails and the contact list." },
      { label: "Sending, from month two", detail: "Your campaign runs on the agreed schedule." },
      { label: "Updates", detail: "You see the numbers listed further down." },
    ],
    timeline: "Exact dates are agreed with you in writing.",
    requirements: [
      "An email account and domain to send from",
      "Login access to that email account",
      "A short description of your business and offer",
    ],
    price: "€450 / month",
    priceGbp: "£375 / month",
    priceNote: "Sending and warm-up tools included. Contact lists and Email Setup are separate.",
    tools: ["Instantly.ai", "Mailivery"],
    relatedServices: [
      { slug: "lead-generation", title: "Lead Generation", description: "A checked list of the right people to email.", price: "€0.09 / £0.08 per verified lead" },
      { slug: "email-setup", title: "Email Setup", description: "Your domain set up so emails are trusted.", price: "€75 / £65 one-time per domain" },
    ],
    featured: true,
  },
  {
    slug: "business-support",
    navLabel: "Business Support",
    title: "Business Support",
    eyebrow: "03 / Business Support",
    description: "An extra pair of hands for admin, research, content and online tasks, paid by the hour.",
    overview: "You send me a task, I do it, and I send it back finished: research, admin, documents, content, website and social media tasks.",
    audience: "Founders and small teams who need reliable help with everyday tasks, without hiring someone full-time.",
    inclusions: [
      "Research: businesses, competitors, suppliers or any topic you need",
      "Data entry and keeping spreadsheets up to date",
      "Creating, updating and tidying business documents",
      "Content writing from your notes and material, with help from AI tools",
      "Website help, including DNS changes where agreed",
      "Posting and scheduling on LinkedIn",
      "Uploading videos and looking after your YouTube channel (not YouTube SEO)",
      "Admin for ad campaigns and other agreed ad tasks",
      "One-off or regular back-office tasks, agreed in advance",
    ],
    exclusions: [
      "Financial, legal or HR advice",
      "Being on call around the clock or replying within minutes",
      "Tasks where I don't have the access or information needed",
      "Big extra research or extra hours without checking with you first",
    ],
    process: [
      { label: "You share access", detail: "To the accounts listed under 'What I need from you'." },
      { label: "Setup", detail: "I make the changes on your domain." },
      { label: "Testing", detail: "I check that every record works." },
    ],
    timeline: "",
    requirements: [
      "A clear description of the task",
      "Any files or information I need",
      "Instructions or examples, if you have them",
      "Access to the tools or accounts involved",
    ],
    price: "€16 / hour",
    priceGbp: "£14 / hour",
    priceNote: "You pay for the actual time spent on agreed tasks.",
    sourceNote: "If a task needs a lot more research or time than expected, I check with you before carrying on.",
    featured: true,
  },
  {
    slug: "lead-generation",
    navLabel: "Lead Generation",
    title: "Lead Generation",
    eyebrow: "04 / Lead Generation",
    description: "A clean, checked list of the right people to contact, ready to use.",
    overview: "Together we decide who your ideal clients are. I find those businesses and the right person in each one, check their details, and send you a tidy spreadsheet.",
    audience: "Businesses that want a focused list of contacts for outreach, chosen by industry, location, company size and job title.",
    inclusions: [
      "I research businesses that match",
      "I find the decision-maker (the person who can say yes) in each business",
      "I check every email address, so fewer emails bounce",
      "I find their business contact details using research tools",
      "I clean and organise the details before sending",
    ],
    exclusions: [
      "Companies you don't want included need to be listed in your brief",
      "Legal or privacy advice",
    ],
    process: [
      { label: "Agree your ideal client", detail: "We decide the industries, locations, company size, job titles and anyone to leave out." },
      { label: "Research", detail: "I find matching businesses and the right people in them." },
      { label: "Check and clean", detail: "I verify emails and fix or remove bad data." },
      { label: "Deliver", detail: "You get the finished list in a spreadsheet." },
    ],
    timeline: "Your first list usually arrives within 5–7 working days after we confirm who to target.",
    requirements: [
      "Industries you want to target",
      "Locations",
      "Company size you prefer",
      "Job titles of the people you want to reach",
      "Companies to leave out",
      "Anything else specific",
    ],
    price: "€0.09 / verified lead",
    priceGbp: "£0.08 / verified lead",
    priceNote: "Minimum order 1,000 leads (€90 / £80).",
    tools: ["LinkedIn Sales Navigator", "Apollo", "UseBouncer"],
  },
  {
    slug: "email-setup",
    navLabel: "Email Setup",
    title: "Email Setup",
    eyebrow: "05 / Email Setup",
    description: "A one-time setup that gets your email domain ready to send outreach safely.",
    overview: "I set up the technical email settings on your existing domain, so email providers trust your emails. You keep your own domain and mailbox; I don't buy them.",
    audience: "Businesses about to start cold email who need their domain set up correctly first.",
    inclusions: [
      "I check the sending settings on your existing mailbox",
      "I add SPF, DKIM and DMARC records to your domain",
      "I add any other DNS records your email provider needs",
    ],
    exclusions: [
      "Buying a domain, mailbox or email hosting (you provide your own)",
      "Other paid tools or software, unless agreed in writing",
      "Running email campaigns (that's the Email Outreach service)",
    ],
    process: [
      { label: "Get access", detail: "You give me access to your domain settings and email account." },
      { label: "Set it up", detail: "I add the security records and check your mailbox settings." },
      { label: "Check it works", detail: "I test that every record is set up correctly." },
      { label: "Hand over", detail: "You get a short written note of what was done." },
    ],
    timeline: "We agree the date once I have access to your domain and email account.",
    requirements: [
      "The domain and email account to set up",
      "Access to your domain settings (DNS) and email provider",
      "Any login details needed to check the setup",
    ],
    price: "€75 one-time / domain",
    priceGbp: "£65 one-time / domain",
    priceNote: "One payment per domain. You keep your own domain and mailbox.",
    tools: ["Your domain (DNS) provider", "Your email provider"],
    sourceNote: "Needed before Email Outreach can start, if your domain isn't set up yet.",
  },
];

const SERVICE_ORDER = ["linkedin-management", "email-outreach", "business-support", "lead-generation", "email-setup"];
export const orderedServices = SERVICE_ORDER.map((slug) => services.find((service) => service.slug === slug)).filter((service): service is ServiceContent => Boolean(service));
export const featuredServices = orderedServices.slice(0, 4);
export const supportingServices = orderedServices.slice(4);

export const servicePageExtras: Record<string, ServicePageExtras> = {
  "linkedin-management": {
    summary: "LinkedIn management services for businesses in the UK and Ireland. I improve your profile, connect you with the right people, follow up, and can post for you every day.",
    plain: {
      what: "I use your LinkedIn account to find and connect with the people you want as clients, and keep in touch with them.",
      why: "Most good B2B conversations start with a connection. Doing it every day takes time you probably don't have.",
      result: "A stronger profile and more of the right people in your network.",
    },
    glossary: [
      { term: "Sales Navigator", meaning: "LinkedIn's paid tool for finding people by job, company and location." },
      { term: "Connection request", meaning: "An invite to connect on LinkedIn, like adding someone to your contacts." },
      { term: "InMail", meaning: "A LinkedIn message to someone you're not connected with yet." },
      { term: "Hootsuite", meaning: "A tool that schedules posts so they go out at a set time." },
      { term: "Acceptance rate", meaning: "Out of every 100 connection requests, how many people said yes." },
    ],
    reporting: ["How many people accepted your connection requests", "How your posts are doing: views, likes and comments", "Conversations that could turn into work"],
    relatedSlugs: ["lead-generation", "business-support"],
    lastUpdated: "16 October 2026",
    paymentTerms: "Monthly. 50% at the start of the month, 50% at the end.",
    commercialHighlights: [],
    workingNote: "LinkedIn's limits and your account's activity can change how many people I can reach. No sales or results are promised.",
    faqs: [
      { question: "Will you post from my account?", answer: "Yes, once you've agreed the content direction. It stays your account and you keep full control." },
    ],
  },
  "email-outreach": {
    summary: "B2B cold email outreach for businesses in the UK and Ireland. I warm up your inbox, write the emails, send them, follow up and report back.",
    plain: {
      what: "I email businesses that match your ideal client, on your behalf, from your own email address.",
      why: "A well-run campaign puts your offer in front of the right people every week, without you writing a single email.",
      result: "Replies from interested people land straight in your inbox.",
    },
    glossary: [
      { term: "Cold email", meaning: "An email to a business that hasn't heard from you before." },
      { term: "Warm-up", meaning: "Slowly increasing how many emails a new inbox sends, so Gmail and Outlook learn to trust it." },
      { term: "Domain", meaning: "The part after the @ in your email address, like yourcompany.co.uk." },
      { term: "Bounce", meaning: "An email that couldn't be delivered, usually because the address is wrong." },
      { term: "Open rate and reply rate", meaning: "Out of every 100 emails, how many were opened and how many got a reply." },
    ],
    reporting: ["Open rate: how many people opened", "Reply rate: how many people replied", "Click rate: how many clicked a link", "Bounce rate: emails that didn't arrive", "Notes on whether emails reach the inbox or spam"],
    relatedSlugs: ["email-setup", "lead-generation"],
    lastUpdated: "16 October 2026",
    paymentTerms: "Monthly. 50% at the start of the month, 50% at the end.",
    commercialHighlights: [],
    workingNote: "No opens, replies, meetings, sales or inbox placement are promised.",
    faqs: [
      { question: "Is cold email legal?", answer: "I only email businesses, follow a GDPR- and PECR-aware approach, use business contact data and include a way to unsubscribe. This is not legal advice: you stay responsible for confirming the rules that apply to your campaign." },
    ],
  },
  "business-support": {
    summary: "Virtual business support for founders and small teams in the UK and Ireland: research, admin, documents, content and online tasks, done by one person you can message directly.",
    plain: {
      what: "I take the small but necessary tasks off your list: research, admin, documents, posting and similar work.",
      why: "These tasks eat hours every week. Handing them over gives you time back for the work only you can do.",
      result: "Finished tasks, and more hours in your week.",
    },
    glossary: [
      { term: "Back-office tasks", meaning: "The behind-the-scenes work that keeps a business running, like admin and data." },
      { term: "DNS", meaning: "The settings that connect your domain name to your website and email." },
      { term: "Billed by the hour", meaning: "You pay only for the time actually spent, and the hours are agreed first." },
    ],
    reporting: ["Hours used on each task", "What's done, and what's waiting on you", "A short written note with every delivery"],
    relatedSlugs: ["linkedin-management", "lead-generation"],
    lastUpdated: "16 October 2026",
    paymentTerms: "We agree the hours first. You pay 50% of those hours upfront, and the rest on delivery, based on the time actually spent.",
    commercialHighlights: [],
    workingNote: "This is practical help with tasks, not legal, financial, HR or other specialist advice.",
    faqs: [
      { question: "Do you manage CRMs?", answer: "No, I don't offer CRM management." },
      { question: "Can I send tasks any time?", answer: "Yes, in writing. I'll confirm and reply in writing." },
    ],
  },
  "lead-generation": {
    summary: "B2B lead generation for businesses targeting the UK, Ireland and Europe. I research and verify the right decision-makers and deliver them in a clean spreadsheet.",
    plain: {
      what: "I build you a list of people who match your ideal client, with their checked business email.",
      why: "Outreach only works if you contact the right people. A good list means fewer wasted emails and messages.",
      result: "A ready-to-use spreadsheet of verified contacts you can email or connect with.",
    },
    glossary: [
      { term: "Lead", meaning: "A person at a business who could become your client." },
      { term: "Verified lead", meaning: "A contact whose email I've checked, so it's real and likely to arrive." },
      { term: "Ideal client profile (ICP)", meaning: "A short description of the businesses and people you most want to work with." },
      { term: "Decision-maker", meaning: "The person who can approve buying from you." },
      { term: "Apollo, Sales Navigator, UseBouncer", meaning: "The research and email-checking tools I use to find and verify contacts." },
    ],
    reporting: ["Where each contact was found", "Whether each email was verified", "How many contacts were delivered against your target"],
    relatedSlugs: ["email-outreach", "linkedin-management", "email-setup"],
    lastUpdated: "16 October 2026",
    paymentTerms: "Minimum order 1,000 leads (€90 / £80). 50% upfront, 50% when the finished list is delivered.",
    commercialHighlights: [],
    workingNote: "Delivery time depends on how specific your target is and how many leads you order.",
    faqs: [
      { question: "Is the data GDPR-safe?", answer: "I only collect business contacts and follow a GDPR- and PECR-aware approach. This is not legal advice: you stay responsible for confirming the rules that apply to how you use the list." },
    ],
  },
  "email-setup": {
    summary: "Email deliverability setup for businesses in the UK and Ireland. I set up the records that prove your emails are genuine, on the domain you already own.",
    plain: {
      what: "I set up the behind-the-scenes settings that tell Gmail and Outlook your emails are genuine.",
      why: "Without these settings, outreach emails are much more likely to land in spam.",
      result: "A domain that's set up correctly and ready for cold email.",
    },
    glossary: [
      { term: "SPF", meaning: "A list of who is allowed to send email from your domain." },
      { term: "DKIM", meaning: "A digital signature on your emails that proves nobody changed them." },
      { term: "DMARC", meaning: "A rule telling email providers what to do with emails that fail the checks." },
      { term: "DNS records", meaning: "Settings on your domain, like an address book for your website and email." },
      { term: "Deliverability", meaning: "How likely your emails are to reach the inbox instead of spam." },
    ],
    reporting: ["Which records I set up", "Whether each record passes the check", "Anything still to do on your side"],
    relatedSlugs: ["email-outreach", "lead-generation"],
    lastUpdated: "16 October 2026",
    paymentTerms: "One payment per domain: 50% before I start, 50% when it's done.",
    commercialHighlights: [],
    workingNote: "We agree the date once I have access to your domain and email account.",
    faqs: [
      { question: "Do I need this before email outreach?", answer: "Yes, if your domain isn't set up already. I'll check it first and tell you." },
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
