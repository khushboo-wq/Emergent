export interface FaqGroup { id: string; title: string; items: { q: string; a: string }[] }

export const faqGroups: FaqGroup[] = [
  { id: "getting-started", title: "Getting started", items: [
    { q: "Who is behind Arcturus Professional Services?", a: "Arcturus is the independent solo freelance practice of Khushboo Tomar, based in New Delhi, India. I work directly with businesses in the UK, Ireland and wider Europe. You always deal with the person doing the work." },
    { q: "How do I start working with you?", a: "Send a short written brief by email, WhatsApp, LinkedIn or the contact form. I reply in writing with the scope, price and timing. Once the 50% advance and the required access are in place, work begins." },
    { q: "Which service should I choose?", a: "If you want conversations on LinkedIn, start with LinkedIn Management. For cold email, you need B2B Email Outreach, usually with Email Setup and Lead Generation. For admin and research, choose Business Support. If you are unsure, send a brief and I will tell you where I would start." },
    { q: "How quickly can work start?", a: "Requirements, invoice, advance payment and access are usually confirmed in the first 1–2 days, and setup follows in days 3–5. Some services have their own timelines, for example a minimum one-month warm-up before email outreach." },
  ]},
  { id: "pricing-payment", title: "Pricing and payment", items: [
    { q: "How much do your services cost?", a: "LinkedIn Management €400/month, B2B Email Outreach €500/month, Business Support €30/hour, Lead Generation €250 per 100 verified contacts, AI Video Creation €400/month and Email Setup €200 one-time. All prices are in euro and listed on the Pricing page." },
    { q: "How does payment work?", a: "Work starts after a 50% advance. Monthly services are paid 50% at the start and 50% at the end of each month. For one-time work, Lead Generation and Business Support, the remaining 50% is paid on delivery." },
    { q: "How do I pay?", a: "Payments are made via Wise, in euro. You receive a written invoice before each payment." },
    { q: "Are there any extra costs?", a: "Paid third-party tools stay in your name and are paid by you: LinkedIn Sales Navigator, Hootsuite, domains, email accounts, hosting and similar subscriptions. Anything outside the agreed scope is quoted in writing first." },
    { q: "Is there a long contract or minimum term?", a: "No. Monthly services run month to month. If you stop, the current billing month is completed in full." },
  ]},
  { id: "working-together", title: "Working together", items: [
    { q: "Do you take calls or video meetings?", a: "No. All communication is in writing by email, WhatsApp or LinkedIn. It keeps every decision, approval and instruction documented so nothing gets lost." },
    { q: "Which hours do you work?", a: "I work Monday to Friday, aligned with UK and Irish working hours." },
    { q: "Do I keep control of my accounts?", a: "Yes. You keep ownership and control of your LinkedIn, email, domain and other accounts and settings. I only use the access needed for the agreed work." },
    { q: "How will I know what has been done?", a: "You get written updates and reporting for each service, for example connection and reply activity for LinkedIn or open, reply and bounce rates for email outreach." },
    { q: "Do you outsource any of the work?", a: "No. I do the core work myself. There are no account managers or hand-offs." },
  ]},
  { id: "services", title: "Services and results", items: [
    { q: "Do I need LinkedIn Sales Navigator?", a: "Yes, for LinkedIn Management and Lead Generation. You provide your own Sales Navigator subscription and I use it for targeting and research." },
    { q: "Why does email outreach need a warm-up?", a: "New domains and inboxes need time to build sender reputation. I apply a minimum one-month warm-up before active outreach so emails have a better chance of reaching the inbox." },
    { q: "Do you guarantee leads, meetings or sales?", a: "No. Results depend on your offer, market and platform limits. I guarantee the agreed work is done properly and reported clearly, not specific outcomes." },
    { q: "What do you not offer?", a: "I do not offer graphic design, project or calendar management, CRM management or YouTube SEO. I would rather do a few things well." },
  ]},
  { id: "data-compliance", title: "Data and compliance", items: [
    { q: "Is cold email outreach GDPR compliant?", a: "I use a B2B-only, GDPR and PECR-aware approach: business-professional data only, proper unsubscribe handling and confidential handling of your data. This is not legal advice; each client remains responsible for confirming the lawful basis that applies to their activity." },
    { q: "How do you handle my business information?", a: "Client information is treated as confidential and used only for the agreed work." },
  ]},
];

export const allFaqs = faqGroups.flatMap((g) => g.items);
