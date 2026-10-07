export interface ResourceSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Resource {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  readTime: string;
  keywords: string[];
  sections: ResourceSection[];
}

export const resources: Resource[] = [
  {
    slug: "linkedin-management-services-guide",
    title: "LinkedIn Management Services: What a Business Actually Needs",
    eyebrow: "LinkedIn Management Guide",
    excerpt: "A practical guide to LinkedIn management for founders and small B2B businesses, including profile optimisation, content, outreach, follow-ups and reporting.",
    description: "A practical guide to LinkedIn management services for founders and small B2B businesses. Learn what good management covers, what to expect and where a freelancer can help.",
    category: "LinkedIn Management",
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
          "At Arcturus, the LinkedIn management service is handled directly by Khushboo. The work includes profile management, professional content, targeted outreach, follow-ups, group engagement, company page setup where needed, Hootsuite scheduling and written performance reporting.",
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
];

export function getResource(slug: string | undefined) {
  return resources.find((resource) => resource.slug === slug);
}
