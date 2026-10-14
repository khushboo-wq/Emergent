export interface ResourceLink {
  /** Visible link text */
  label: string;
  /** Full https:// URL for an outside source, or a site path like /pricing */
  url: string;
  /** Optional one-line note shown after the link */
  note?: string;
}

export interface ResourceSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  /** Optional links shown under this section (authority sources or related pages) */
  links?: ResourceLink[];
}

export interface Resource {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  description: string;
  category: string;
  serviceSlug: string;
  published: string;
  updated: string;
  readTime: string;
  keywords: string[];
  sections: ResourceSection[];
  /** Optional sources listed at the end of the article and added to the Article schema as citations */
  sources?: ResourceLink[];
}

export const resources: Resource[] = [
  {
    slug: "linkedin-management-services-guide",
    title: "LinkedIn Management Services: What a Business Actually Needs",
    eyebrow: "LinkedIn Management Guide",
    excerpt: "A practical guide to LinkedIn management for founders and small B2B businesses, including profile optimisation, content, outreach, follow-ups and reporting.",
    description: "A practical guide to LinkedIn management services for founders and small B2B businesses. Learn what good management covers, what to expect and where a freelancer can help.",
    category: "LinkedIn Management",
    serviceSlug: "linkedin-management",
    published: "2026-10-07",
    updated: "2026-10-07",
    readTime: "8 min read",
    keywords: ["linkedin management services", "linkedin management", "linkedin for small business", "b2b linkedin management"],
    sections: [
      {
        heading: "What LinkedIn management actually means",
        paragraphs: [
          "LinkedIn management is the ongoing work required to keep a professional LinkedIn presence useful, credible and consistent. For a small B2B business, that can mean managing a founder profile, a company page, content publishing, targeted networking and the follow-up work that happens after a connection is accepted.",
          "The important word is management. Posting once a week is only one part of the job. A managed presence starts with positioning, keeps the profile or page accurate, publishes useful content, reaches the right audience and records what is happening so the activity can improve over time.",
        ],
      },
      {
        heading: "What a good LinkedIn management service should cover",
        paragraphs: [
          "A useful service should match the way the business actually sells. That usually means understanding the ideal client, the decision-makers involved, the offer being promoted and the kind of proof that gives a prospect confidence.",
        ],
        bullets: [
          "Profile review and optimisation so the first impression is clear.",
          "Professional content that supports the business rather than filling a calendar.",
          "Targeted research using LinkedIn Sales Navigator where appropriate.",
          "Structured connection requests and relevant InMails.",
          "Follow-ups that move a conversation forward without aggressive messaging.",
          "Group engagement and relationship building where it makes sense.",
          "Company page setup or improvement when a page is needed.",
          "Scheduling, activity tracking and written reporting.",
        ],
      },
      {
        heading: "Personal profile or company page?",
        paragraphs: [
          "For many founder-led B2B businesses, the personal profile is an important part of the system because people often want to understand who is behind the company. The company page still matters because it gives prospects a place to confirm the business, see recent activity and check basic credibility.",
          "The two should support each other instead of competing. A strong founder profile can create attention, while the company page provides a consistent home for the brand. The right balance depends on who buys from the business and how the business is positioned.",
        ],
      },
      {
        heading: "Why targeting matters more than volume",
        paragraphs: [
          "LinkedIn outreach works better when the target audience is defined before messages are written. Industry, company size, location, seniority and job title can all change what a useful message looks like.",
          "Higher activity does not automatically mean better activity. A smaller list of relevant decision-makers can be more useful than a large audience that is unlikely to buy, refer or engage with the business.",
        ],
      },
      {
        heading: "What reporting should tell you",
        paragraphs: [
          "A report should help answer practical questions. Are the right people accepting invitations? Are posts attracting meaningful engagement? Are conversations starting? Which audience segments respond better?",
          "Metrics are useful when they lead to a decision. The aim is not to produce a large spreadsheet of numbers, but to understand what should continue, change or stop.",
        ],
      },
      {
        heading: "What to expect from a managed service",
        paragraphs: [
          "LinkedIn is a relationship channel, so a sensible service should be measured over time rather than as a one-week sales promise. Good management creates a consistent presence, improves the quality of targeting and keeps follow-up from being forgotten.",
          "At Arcturus, the LinkedIn management service is managed directly by Khushboo. The work includes profile management, professional content, targeted outreach, follow-ups, group engagement, company page setup where needed, Hootsuite scheduling and written performance reporting.",
        ],
      },
      {
        heading: "When LinkedIn management makes sense",
        paragraphs: [
          "A managed service can make sense when the business knows who it wants to reach but does not have the time or internal resource to maintain the LinkedIn work consistently. It is particularly useful when a founder or small team needs one person to handle the practical work without adding an agency layer.",
        ],
      },
    ],
  },
  {
    slug: "linkedin-profile-optimization",
    title: "LinkedIn Profile Optimisation for B2B Founders",
    eyebrow: "Profile Optimisation Guide",
    excerpt: "How to make a LinkedIn profile clearer to the right buyers before you start posting or outreach.",
    description: "Learn how to optimise a LinkedIn profile for B2B visibility, credibility and outreach. This practical guide covers positioning, headline, About, experience, proof and calls to action.",
    category: "LinkedIn Management",
    serviceSlug: "linkedin-management",
    published: "2026-10-07",
    updated: "2026-10-07",
    readTime: "7 min read",
    keywords: ["linkedin profile optimisation", "linkedin profile optimization", "linkedin profile management", "linkedin for founders"],
    sections: [
      {
        heading: "Start with positioning, not keywords",
        paragraphs: [
          "The strongest LinkedIn profiles make it obvious who the person helps, what they help with and why the reader should care. Keywords matter, but adding a list of phrases to a profile does not create a useful position.",
          "Start with the buyer. Think about the industry, role and problem the profile should be relevant to. Then make the headline, About section and experience tell the same story.",
        ],
      },
      {
        heading: "Write a headline that explains the business value",
        paragraphs: [
          "A headline has to work for people who already know you and people who have never seen your profile before. It should explain the work clearly instead of relying on vague labels such as entrepreneur, growth expert or business consultant.",
          "A useful structure is: what you do, who you help, and the outcome or focus that makes the service relevant. Natural wording is more useful than a string of repeated search terms.",
        ],
      },
      {
        heading: "Make the About section easy to scan",
        paragraphs: [
          "The About section should quickly answer the questions a potential buyer is likely to have. What does the business do? Who is it for? What problems does it solve? What proof or experience supports the claim? What should the reader do next?",
        ],
        bullets: [
          "Open with a clear statement of the business problem you solve.",
          "Explain the audience and services in ordinary language.",
          "Add relevant experience, examples or proof where available.",
          "Keep paragraphs short enough to scan on a phone.",
          "End with a simple next step that matches how you actually communicate.",
        ],
      },
      {
        heading: "Use experience to build trust",
        paragraphs: [
          "Experience sections are stronger when they explain the work, not just the job title. Describe the responsibilities, the type of client or business involved and the kind of outcomes or expertise developed.",
          "Do not invent metrics or case studies. A specific, honest description is more useful than impressive-sounding claims that cannot be supported.",
        ],
      },
      {
        heading: "Optimise the profile before outreach",
        paragraphs: [
          "Outreach brings people to the sender profile. That means the profile itself is part of the outreach system. Before sending connection requests or InMails, check whether a prospect can understand the business in a few seconds.",
          "The profile should support the message. If the message talks about one service but the profile looks like it belongs to a completely different business, the prospect has less reason to continue the conversation.",
        ],
      },
      {
        heading: "Profile optimisation is an ongoing job",
        paragraphs: [
          "A profile should change as the business changes. New services, stronger proof, different target markets and clearer positioning can all justify a refresh. Treat the profile as a living business asset rather than a document that is finished once.",
        ],
      },
    ],
  },
  {
    slug: "linkedin-outreach-for-b2b-businesses",
    title: "LinkedIn Outreach for B2B Businesses: A Practical Framework",
    eyebrow: "B2B Outreach Guide",
    excerpt: "A practical framework for defining the audience, writing connection requests, following up and measuring LinkedIn outreach without turning it into spam.",
    description: "A practical LinkedIn outreach framework for B2B businesses covering target research, connection requests, follow-ups, relationship building and reporting.",
    category: "LinkedIn Outreach",
    serviceSlug: "linkedin-management",
    published: "2026-10-07",
    updated: "2026-10-07",
    readTime: "9 min read",
    keywords: ["linkedin outreach", "linkedin b2b outreach", "linkedin lead generation", "linkedin prospecting"],
    sections: [
      {
        heading: "Good outreach starts with the target audience",
        paragraphs: [
          "The first decision in LinkedIn outreach is not the message. It is the audience. Define the industries, company types, locations, seniority and job roles that make someone a reasonable prospect before you send an invitation.",
          "For targeted research, LinkedIn Sales Navigator can make it easier to narrow a market and build a prospecting list. The exact filters depend on the service being sold and the market being targeted.",
        ],
      },
      {
        heading: "A connection request should feel like a connection request",
        paragraphs: [
          "The invitation is a small first step. It does not need to carry the entire sales pitch. A short, relevant message can create context without turning the request into a brochure.",
          "Avoid fake personalisation, exaggerated praise and generic claims. If there is a real reason the person is relevant to the business, use that context. If there is not, a simple professional connection can be enough.",
        ],
      },
      {
        heading: "Follow-up is where many campaigns break down",
        paragraphs: [
          "A connection is not the end of the workflow. Relevant follow-up gives the prospect a chance to respond after the initial invitation, while a clear process prevents promising conversations from being forgotten.",
          "The best follow-up depends on the audience and the reason for outreach. It can be a useful question, a short piece of context or a practical offer to continue the conversation. It should not become an endless sequence of messages.",
        ],
      },
      {
        heading: "Keep outreach relationship-led",
        paragraphs: [
          "LinkedIn is a professional network, not just an email database in another interface. Comments, group participation, useful content and thoughtful replies can all contribute to familiarity before a commercial conversation starts.",
          "That is why outreach and content work well together. Content gives a prospect somewhere to go when they check the profile, while outreach provides a direct route to a relevant conversation.",
        ],
      },
      {
        heading: "Measure the whole journey",
        paragraphs: [
          "Do not judge outreach by connection volume alone. Track the stages that matter to the business, such as invitations sent, acceptance, replies, qualified conversations and engagement from the target audience.",
          "The point of measurement is improvement. If the right audience is not accepting requests, revisit the targeting. If people accept but do not reply, revisit the follow-up. If conversations start but do not progress, revisit the offer and qualification.",
        ],
      },
      {
        heading: "Stay inside sensible account limits",
        paragraphs: [
          "LinkedIn applies platform limits and account activity controls. A responsible outreach workflow should respect those limits and account health rather than treating volume as the only goal.",
          "At Arcturus, the service uses structured connection requests, relevant InMails, group engagement and follow-ups. Outreach volume is subject to LinkedIn account activity, audience targeting and platform limits.",
        ],
      },
      {
        heading: "When to combine LinkedIn with email outreach",
        paragraphs: [
          "Some B2B campaigns benefit from more than one channel. LinkedIn can provide context and relationship-building, while email can support a structured follow-up workflow. The right combination depends on the market, offer, audience and how the business handles replies.",
          "The important thing is to keep the message consistent across channels and to respect the rules and requirements that apply to each one.",
        ],
      },
    ],
  },
  {
    slug: "b2b-email-outreach-guide",
    title: "B2B Email Outreach: A Practical Guide for Small Businesses",
    eyebrow: "Email Outreach Guide",
    excerpt: "A practical look at B2B email outreach, from audience definition and verified contacts to warm-up, copy, follow-ups and reporting.",
    description: "Learn how B2B email outreach works for small businesses, including targeting, verified contacts, technical warm-up, copy, follow-ups and campaign reporting.",
    category: "Email Outreach",
    serviceSlug: "email-outreach",
    published: "2026-10-07",
    updated: "2026-10-07",
    readTime: "8 min read",
    keywords: ["b2b email outreach", "email outreach service", "cold email outreach", "b2b cold email"],
    sections: [
      {
        heading: "What B2B email outreach is",
        paragraphs: [
          "B2B email outreach is a structured way to introduce a relevant business offer to professional contacts who fit an agreed target profile. The work is more than sending a large list of emails. It combines audience research, contact verification, sender setup, copy, follow-ups and measurement.",
          "The objective is a useful business conversation. That means the campaign should be built around a clear offer and a realistic audience rather than volume alone.",
        ],
      },
      {
        heading: "Start with a clear target audience",
        paragraphs: [
          "Before a campaign is written, define the industries, locations, company sizes and job roles that are genuinely relevant. A campaign becomes difficult to optimise when almost anyone could be a prospect.",
        ],
        bullets: [
          "Define the type of business that can benefit from the offer.",
          "Identify the decision-maker or relevant professional role.",
          "Agree locations and company-size requirements.",
          "Create exclusions for industries or organisations that should not be contacted.",
        ],
      },
      {
        heading: "Verified contacts and clean lists",
        paragraphs: [
          "A campaign is only as useful as the contact data behind it. Business contacts should be researched against the agreed criteria, organised consistently and checked before they enter the campaign.",
          "At Arcturus, lead research can be provided separately from the managed Email Outreach service. This keeps the campaign work and contact sourcing transparent.",
        ],
      },
      {
        heading: "Why warm-up matters",
        paragraphs: [
          "Technical setup and sender reputation are part of the campaign. New or newly configured sending infrastructure may need a warm-up period before active outreach. Arcturus applies a minimum one-month warm-up period before active outreach on the managed service.",
          "Warm-up is not a guarantee of inbox placement. It is one part of a broader deliverability process that also includes domain authentication, list quality, sending behaviour and message quality.",
        ],
      },
      {
        heading: "Write for the person receiving the email",
        paragraphs: [
          "A useful cold email should make the relevance obvious quickly. The message should be specific enough to explain why the recipient is a reasonable prospect, without turning the first email into a long company brochure.",
          "Follow-ups should add a reason to continue the conversation, not simply repeat the same pitch.",
        ],
      },
      {
        heading: "What to measure",
        paragraphs: [
          "Email reporting can include opens, replies, clicks, bounces and inbox-placement observations. Metrics become useful when they lead to a decision about targeting, copy, sending or follow-up.",
          "There should be no promise of a fixed number of meetings or sales. The right performance benchmark depends on the offer, audience, market and campaign quality.",
        ],
      },
      {
        heading: "When managed email outreach makes sense",
        paragraphs: [
          "A managed campaign can suit a small B2B business that already knows what it sells but does not want to run research, technical setup, copy, sending and follow-up internally. Arcturus manages the agreed workflow directly, with written communication and reporting.",
        ],
      },
    ],
  },
  {
    slug: "b2b-lead-generation-guide",
    title: "B2B Lead Generation: How to Build a Useful Prospect List",
    eyebrow: "Lead Generation Guide",
    excerpt: "How to define an ICP, research decision-makers, verify business contacts and turn the final list into something a sales team can actually use.",
    description: "A practical B2B lead generation guide covering ICP definition, Sales Navigator research, decision-maker identification, verification and spreadsheet delivery.",
    category: "Lead Generation",
    serviceSlug: "lead-generation",
    published: "2026-10-07",
    updated: "2026-10-07",
    readTime: "8 min read",
    keywords: ["b2b lead generation", "lead generation service", "b2b lead lists", "verified business contacts"],
    sections: [
      {
        heading: "Lead generation starts with the ICP",
        paragraphs: [
          "An ideal client profile is the filter that keeps a prospecting project focused. For B2B work, it can include industry, company size, location, job title, seniority and exclusions.",
          "The clearer the ICP, the easier it becomes to judge whether a company and contact belongs in the final list.",
        ],
        bullets: [
          "Target industries and sub-industries.",
          "Countries, regions or cities.",
          "Approximate company size or revenue band where relevant.",
          "Decision-maker job titles and seniority.",
          "Companies, sectors or roles that should be excluded.",
        ],
      },
      {
        heading: "Research companies and decision-makers",
        paragraphs: [
          "The research step connects the ICP to real businesses. Tools such as LinkedIn Sales Navigator can help narrow a market before individual company and decision-maker details are researched.",
          "Good list building does not stop at the company name. The contact needs to be relevant to the offer and role, and the final record should be consistent enough to use in outreach or sales research.",
        ],
      },
      {
        heading: "Verification and data quality",
        paragraphs: [
          "Verification is about reducing obvious errors before the list is delivered. Contact fields should be checked and organised, and the final spreadsheet should make it easy to see what was researched and what was verified.",
          "No verification process can guarantee that every address will remain valid forever. People change roles, companies update systems and domains change. A clean list is still a snapshot at the time it is produced.",
        ],
      },
      {
        heading: "Why smaller, relevant lists can outperform volume",
        paragraphs: [
          "A list of the right businesses and decision-makers is more useful than a large database that contains people who are unlikely to need the service. Relevance also makes outreach easier because the message can be written for a defined audience.",
        ],
      },
      {
        heading: "What the final delivery should contain",
        paragraphs: [
          "The final file should be easy to understand and use. Consistent company, contact, role and email fields make it easier to move from research to the next stage of the sales process.",
          "Arcturus delivers completed contacts in an organised spreadsheet and explains the data sources used for the project in writing.",
        ],
      },
      {
        heading: "How long lead research takes",
        paragraphs: [
          "The first delivery is normally provided within 5–7 working days once target criteria are confirmed. Larger or more complex research requirements can require a different timeline, which should be agreed before work begins.",
        ],
      },
    ],
  },
  {
    slug: "business-support-for-founders-guide",
    title: "Business Support for Founders: What to Delegate First",
    eyebrow: "Business Support Guide",
    excerpt: "A practical guide to deciding which admin, research, document, spreadsheet and recurring digital tasks are suitable for remote business support.",
    description: "A practical guide to business support for founders and small teams, covering admin, research, spreadsheets, documents, website support and recurring digital tasks.",
    category: "Business Support",
    serviceSlug: "business-support",
    published: "2026-10-07",
    updated: "2026-10-07",
    readTime: "7 min read",
    keywords: ["business support freelancer", "virtual business support", "remote business support", "admin support"],
    sections: [
      {
        heading: "Business support is about removing friction",
        paragraphs: [
          "Founders often keep practical tasks because each one feels small. The problem is the combined time: research, spreadsheet updates, document formatting, website changes and recurring administration can interrupt higher-value work.",
          "Business support works best when the task has a clear result and can be explained in writing.",
        ],
      },
      {
        heading: "Good tasks to delegate first",
        paragraphs: [
          "The easiest tasks to delegate are usually repeatable, well-defined and not dependent on decisions only the founder can make.",
        ],
        bullets: [
          "Online research and information gathering.",
          "Data entry and spreadsheet updates.",
          "Creating, formatting and organising business documents.",
          "Website support and agreed DNS tasks.",
          "LinkedIn posting and scheduling support.",
          "YouTube upload and channel administration without YouTube SEO.",
          "Advertising administration and agreed campaign tasks.",
        ],
      },
      {
        heading: "Write the brief clearly",
        paragraphs: [
          "The quality of delegated work improves when the expected result is explicit. Share the task, source files, instructions, access and any examples of the finished format you want.",
          "For larger research or unexpected extra work, scope should be discussed before time is added.",
        ],
      },
      {
        heading: "Task-based support versus a full-time hire",
        paragraphs: [
          "Task-based support can be useful when workload is variable. Instead of paying for unused capacity, the business pays for agreed work and the actual time spent on that work.",
          "That makes it particularly useful for founders and small teams that have a list of practical tasks but do not yet need a full-time employee.",
        ],
      },
      {
        heading: "Keep the workflow simple",
        paragraphs: [
          "A simple workflow is often enough: task shared, work started, task completed, result delivered. Written updates keep dependencies visible and reduce the need for repeated meetings.",
          "Arcturus provides this kind of task-based support directly, at €16 per hour.",
        ],
      },
    ],
  },
  {
    slug: "ai-video-content-for-business-guide",
    title: "AI Video Content for Business: A Practical Approach",
    eyebrow: "AI Video Guide",
    excerpt: "How businesses can use short-form AI-generated video for consistent social content without treating it like a full video production service.",
    description: "A practical guide to AI video content for businesses, covering ideas, branding, prompts, short-form formats, scheduling and realistic scope.",
    category: "AI Video Creation",
    serviceSlug: "linkedin-management",
    published: "2026-10-07",
    updated: "2026-10-07",
    readTime: "7 min read",
    keywords: ["AI video creation", "AI video content for business", "AI videos for social media", "AI reels for business"],
    sections: [
      {
        heading: "What AI video creation is useful for",
        paragraphs: [
          "AI video creation can help a business maintain a regular flow of short-form social content when traditional filming or editing would take more time and budget. The most useful starting point is usually a clear business idea, message or visual concept rather than a complicated production brief.",
          "The service Arcturus offers is designed for basic to custom short-form content, not professional live-action production or manual video editing.",
        ],
      },
      {
        heading: "Start with the business message",
        paragraphs: [
          "A good prompt begins with what the viewer should understand. That could be a service benefit, a common customer problem, a product detail or a simple brand message.",
          "The more specific the business information, tone and visual direction, the easier it is to create content that feels like the brand rather than generic AI footage.",
        ],
      },
      {
        heading: "Build a repeatable brand system",
        paragraphs: [
          "Consistency matters more than making every short video completely different. A repeatable system can include logo placement, brand colours, end cards, business details, recurring themes and a consistent style of prompt.",
          "That gives the business a recognisable content pattern across Instagram, TikTok, YouTube and LinkedIn.",
        ],
      },
      {
        heading: "Keep the scope realistic",
        paragraphs: [
          "AI-generated short-form content is not the same thing as filming a commercial. There is still a need for review, prompt adjustment and approval, but the workflow is intentionally lightweight.",
          "At Arcturus, short AI videos are part of the LinkedIn Management content plan: one post every day (text, image or short AI video) for €450 per month, scheduled through Hootsuite.",
        ],
      },
      {
        heading: "Use scheduling to turn content into a system",
        paragraphs: [
          "The value of regular content increases when the videos actually get published. Scheduling reduces the need to manually upload every item and makes it easier to maintain a consistent rhythm across platforms.",
        ],
      },
    ],
  },
  {
    slug: "business-email-dns-setup-guide",
    title: "Business Email Setup: SPF, DKIM and DMARC Explained",
    eyebrow: "Email Setup Guide",
    excerpt: "A practical explanation of the DNS and authentication work behind professional business email, including SPF, DKIM and DMARC.",
    description: "Learn how business email setup works, including SPF, DKIM and DMARC, DNS verification and the technical foundation needed before outreach.",
    category: "Email Setup",
    serviceSlug: "email-setup",
    published: "2026-10-07",
    updated: "2026-10-07",
    readTime: "8 min read",
    keywords: ["business email setup", "SPF DKIM DMARC setup", "email DNS setup", "email authentication"],
    sections: [
      {
        heading: "Why business email setup matters",
        paragraphs: [
          "A professional mailbox is only one part of a reliable sending setup. The domain also needs the right authentication records so receiving systems can check that legitimate services are authorised to send mail for the domain.",
          "SPF, DKIM and DMARC are the core authentication records commonly involved in this setup. UK National Cyber Security Centre guidance recommends implementing these controls and monitoring them as part of email anti-spoofing. ",
        ],
      },
      {
        heading: "SPF: which senders are authorised",
        paragraphs: [
          "SPF is a DNS record that lists the IP addresses or services authorised to send email for a domain. The exact record depends on every legitimate sending service used by the business.",
          "Do not copy an SPF example blindly. The authorised services need to be based on the systems that actually send mail for the domain. ",
        ],
      },
      {
        heading: "DKIM: proving the message was signed",
        paragraphs: [
          "DKIM adds a cryptographic signature to outgoing mail so receiving systems can verify that the message was signed by an authorised domain. The exact selector and DNS record come from the email or sending provider.",
        ],
      },
      {
        heading: "DMARC: telling receivers what to do",
        paragraphs: [
          "DMARC tells receiving systems how to handle messages that do not pass authentication checks and can provide reporting on authentication results. A sensible rollout starts by monitoring the domain, fixing legitimate senders, and then tightening the policy when the business is confident the configuration is correct. ",
        ],
      },
      {
        heading: "DNS verification before outreach",
        paragraphs: [
          "Authentication records need to exist in the public DNS and then propagate. The exact steps depend on the DNS provider and the email platform. Arcturus provides one-time Email Setup for this technical foundation, including SPF, DKIM, DMARC and DNS verification.",
          "Email Setup is separate from the managed Email Outreach service so the technical configuration and campaign management remain clearly scoped.",
        ],
      },
      {
        heading: "What setup does not guarantee",
        paragraphs: [
          "Correct authentication is important, but it does not guarantee that every email reaches the inbox. Sender reputation, list quality, sending behaviour, message content and recipient systems also affect delivery.",
        ],
      },
    ],
  },
  {
    slug: "linkedin-company-page-vs-personal-profile-founder",
    title: "Company Page or Personal Profile: Where a B2B Founder Should Post",
    eyebrow: "LinkedIn Decision Guide",
    excerpt: "A practical answer for a one person B2B business: post from the profile, keep the page complete, and split the week between them without doubling the work.",
    description: "Where a one person B2B business in Ireland should post on LinkedIn: what prospects check on a profile, what they check on a company page, and a weekly split.",
    category: "LinkedIn Management",
    serviceSlug: "linkedin-management",
    published: "2026-10-13",
    updated: "2026-10-13",
    readTime: "7 min read",
    keywords: ["linkedin company page vs personal profile", "should a founder post from a company page", "linkedin for founders", "linkedin company page for sole trader"],
    sections: [
      {
        heading: "Which should a founder post from, the profile or the company page?",
        paragraphs: [
          "Post from your personal profile, and keep the company page complete, accurate and quiet. For a one person B2B business in Ireland, the profile is where a prospect decides whether to talk to you, and the page is where the same prospect checks that the business behind you is real. Both have a job. Only one of them needs your writing time every week.",
          "The profile. On LinkedIn a person connects with people, replies to people and remembers people. A company page cannot send a connection request or start a conversation, so anything that is meant to begin a relationship has to come from you, under your own name and face.",
          "That does not make the page optional. When someone is considering a reply to your message, they open the company page to confirm that the business exists, that it does what you say, and that the details match. An empty or half finished page answers those questions badly, and a prospect rarely says so. They simply do not reply.",
          "So the split is not profile or page. It is profile for conversation, page for confirmation.",
        ],
      },
      {
        heading: "What does a prospect look for on a personal profile?",
        paragraphs: [
          "A prospect reads a profile the way they read a letter from a stranger: quickly, looking for a reason to stop. In my experience of managing LinkedIn for B2B businesses, the things that keep them reading are the same each time.",
          "Nothing on that list needs a team behind it. It needs a few hours once, and a short review whenever the business changes.",
        ],
        bullets: [
          "A headline that says what you do and for whom, in plain words, rather than a job title.",
          "An About section that names the problem you solve and the kind of business you solve it for.",
          "Recent posts that sound like a person with a point of view, not a brochure.",
          "Experience entries that describe the work, not just the role.",
          "A photo and a banner that look like the business you are describing.",
        ],
        links: [
          { label: "LinkedIn profile optimisation for B2B founders", url: "/resources/linkedin-profile-optimization" },
        ],
      },
      {
        heading: "What does a prospect look for on a company page?",
        paragraphs: [
          "A prospect opens the page to confirm, not to be persuaded. They check that the name, the location and the services match what they read on your profile and on your website, that the page has been touched recently, and that the logo and the description look like one business rather than two.",
          "LinkedIn's own help centre describes three admin roles for a page, a super admin, a content admin and an analyst, and only a super admin can add or remove the others. For a sole trader that usually means your own profile holds the super admin role and nothing else needs adding.",
        ],
        bullets: [
          "The business name spelled the way it appears on your website and your invoices.",
          "A one paragraph description that matches the About section on your profile without repeating it word for word.",
          "The website link, the location and the industry filled in.",
          "A few posts, so the page does not look abandoned.",
          "The admin roles set so the page is not tied to an account you might lose access to.",
        ],
        links: [
          { label: "LinkedIn Page admin roles, from the LinkedIn help centre", url: "https://www.linkedin.com/help/linkedin/answer/4783" },
        ],
      },
      {
        heading: "How do the two support each other without doubling the work?",
        paragraphs: [
          "Write once, on the profile. Then decide, post by post, whether the page needs its own short version. Few of them will. A reflection on a client problem, a lesson from a campaign, or a question for your audience belongs to you, and reposting it on the page word for word only tells a prospect that one person runs both, which they already know.",
          "The page earns its own post when the news belongs to the business rather than to you: a new service, a change to how you work, a published guide, or a milestone you would put on an invoice footer. Keep those short and factual, and keep the first person voice on your profile.",
          "One habit saves most of the effort. When a profile post does well, add a one line comment from the page and move on. The page shows signs of life, you have written nothing new, and the two surfaces point at each other.",
        ],
      },
      {
        heading: "What goes on each surface in a typical week for one person?",
        paragraphs: [
          "This is the split I use when I manage LinkedIn for a business with one person behind it. It fits inside a working week without becoming the working week.",
          "If the week is short, drop the page tasks first. A quiet page costs you almost nothing. A quiet profile costs you the conversations.",
        ],
        bullets: [
          "On the profile: two or three posts a week, each making one point, written in the first person.",
          "On the profile: connection requests to the agreed audience, with a short note that gives a real reason.",
          "On the profile: follow ups for accepted connections, in writing, without a pitch in the first message.",
          "On the profile: replies to comments on your own posts and on a few posts from the people you want to reach.",
          "On the company page: one post every week or two, only when the business has news.",
          "On the company page: a comment from the page on your own best performing profile post.",
          "On the company page: a check once a month that the description, the link and the services are still correct.",
        ],
      },
      {
        heading: "When does the company page matter more than the profile?",
        paragraphs: [
          "Three situations move the balance.",
          "The first is advertising. LinkedIn runs sponsored content and job posts from a page rather than from a profile, so a business that intends to pay for reach needs the page set up and the admin roles in place before the first campaign.",
          "The second is hiring. Job posts live on the page, and a candidate checks the page before they check you.",
          "The third is the day you step back. If you sell the business, bring in a partner, or stop being its public face, the page carries on with its followers and its history. The profile goes with you.",
          "For a one person business none of those is urgent, but the second and the third are reasons to set the page up properly now rather than in a hurry later.",
        ],
      },
      {
        heading: "Questions founders ask",
        paragraphs: [],
        bullets: [
          "Do I need a company page if I am a sole trader? Not in order to post, but yes in order to be checked. A sole trader with a tidy page looks like a business. The same sole trader with no page looks like a person with a side project.",
          "Should I repost my profile posts on the company page? Rarely. Comment from the page instead, and give the page its own post only when the news belongs to the business.",
          "Can a company page run ads without a personal profile? Ads are created through the page's admin roles, and those roles are assigned to member profiles, so you need a profile with the right role to set them up.",
          "Who should hold the company page admin rights? You, as super admin, from the profile you use every day. If a freelancer manages the page, LinkedIn's help centre describes a content admin role that lets them post without being able to remove you or deactivate the page.",
        ],
      },
      {
        heading: "When managed LinkedIn makes sense",
        paragraphs: [
          "If you know which businesses you want to reach but the weekly work above keeps slipping, the LinkedIn Management service covers the profile, the page, the outreach and the written reporting, and I manage it myself rather than through an account manager. Send a short written brief through the contact page and I will reply in writing with the most practical next step.",
        ],
        links: [
          { label: "LinkedIn Management, the service", url: "/services/linkedin-management" },
          { label: "LinkedIn management services: what a business actually needs", url: "/resources/linkedin-management-services-guide" },
        ],
      },
    ],
    sources: [
      { label: "LinkedIn Page admin roles, LinkedIn help centre", url: "https://www.linkedin.com/help/linkedin/answer/4783" },
      { label: "Add admins on your LinkedIn Page, LinkedIn help centre", url: "https://www.linkedin.com/help/linkedin/answer/37594" },
      { label: "LinkedIn Pages for small business, LinkedIn", url: "https://business.linkedin.com/advertise/linkedin-pages/for-small-business" },
    ],
  },
];

export function getResource(slug: string | undefined) {
  return resources.find((resource) => resource.slug === slug);
}
