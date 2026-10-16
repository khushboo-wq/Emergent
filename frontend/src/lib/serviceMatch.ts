// Suggests one of the five services from a short written brief.
// Runs entirely in the visitor's browser: nothing is sent anywhere, and it never goes down.

export type MatchSlug = "linkedin-management" | "email-outreach" | "business-support" | "lead-generation" | "email-setup";

export interface MatchResult {
  kind: "match" | "unclear" | "not-offered";
  slug?: MatchSlug;
  alsoSlug?: MatchSlug;
  reason: string;
}

type Rule = [RegExp, number];

const RULES: Record<MatchSlug, Rule[]> = {
  "linkedin-management": [
    [/\blinked ?in\b/, 4], [/\bsales navigator\b/, 4], [/\binmails?\b/, 4], [/\bconnection requests?\b/, 3],
    [/\bconnections?\b/, 2], [/\bpersonal brand(ing)?\b/, 3], [/\bthought leadership\b/, 3], [/\bprofile\b/, 2],
    [/\bpost(s|ing)?\b/, 1], [/\bfollowers?\b/, 2], [/\bnetwork(ing)?\b/, 1], [/\bcompany page\b/, 3], [/\bhootsuite\b/, 3],
  ],
  "email-outreach": [
    [/\bcold e-?mails?\b/, 5], [/\be-?mail (campaign|outreach|sequence|marketing)s?\b/, 4], [/\boutreach\b/, 2],
    [/\bsequences?\b/, 2], [/\bfollow[- ]?ups?\b/, 1], [/\bsend(ing)? (e-?mails|emails)\b/, 3], [/\bmail ?shots?\b/, 3],
    [/\binstantly\b/, 3], [/\breply rates?\b/, 3], [/\bmeetings? booked\b/, 2], [/\bwarm[- ]?up\b/, 2], [/\bnew clients\b/, 1],
  ],
  "business-support": [
    [/\badmin(istration|istrative)?\b/, 4], [/\binbox(es)?\b/, 3], [/\bmanag(e|ing) (my|our) (e-?mails?|inbox)\b/, 5],
    [/\bvirtual assistant\b/, 5], [/\bassistant\b/, 3], [/\bva\b/, 3], [/\bresearch\b/, 2], [/\bdata entry\b/, 5],
    [/\bspreadsheets?\b/, 3], [/\bdocuments?\b/, 3], [/\bwebsite\b/, 3], [/\bwordpress\b/, 3], [/\byou ?tube\b/, 4],
    [/\bcontent writing\b/, 3], [/\bblogs?\b/, 2], [/\bcopy ?writing\b/, 2], [/\bback[- ]office\b/, 4], [/\btasks?\b/, 2],
    [/\bad(s|vert)? (campaign|admin|management)s?\b/, 3], [/\btyping\b/, 3], [/\bupload(ing)?\b/, 2], [/\bschedul(e|ing) posts?\b/, 2],
    [/\bhelp with\b/, 1], [/\bbusy\b/, 1], [/\bdelegat(e|ing)\b/, 3],
    [/\b(data ?)?sheets?\b/, 3], [/\bexcel\b/, 4], [/\bgoogle (sheets|docs|drive)\b/, 4], [/\bdata\b/, 2],
    [/\b(organi[sz]e|organi[sz]ing|tidy|tidying|clean ?up|cleaning|sort(ing)? out|updat(e|ing)|maintain(ing)?|keep(ing)? track)\b/, 2],
    [/\brecords?\b/, 2], [/\bfiles?\b/, 2], [/\bforms?\b/, 1], [/\breports?\b/, 1], [/\bpresentations?|slides|decks?\b/, 3],
    [/\bproof ?read(ing)?|editing|formatting\b/, 3], [/\bwrit(e|ing) (content|articles|blogs?|copy|captions)\b/, 3],
    [/\bsocial media\b/, 3], [/\binstagram|facebook\b/, 3], [/\bcanva\b/, 2], [/\bshopify|wix|squarespace\b/, 3],
    [/\bonline (tasks|work|research)\b/, 3], [/\bpersonal assistant|executive assistant|pa\b/, 4], [/\bmy e-?mails\b/, 2],
    [/\b(market|competitor|supplier) research\b/, 4], [/\bpaperwork\b/, 2], [/\bchat ?gpt|ai tools?\b/, 1],
    [/\bmanag(e|ing)\b/, 1], [/\bhelp\b/, 1], [/\bsupport\b/, 1], [/\bextra (pair of )?hands\b/, 4],
  ],
  "lead-generation": [
    [/\bleads?\b/, 3], [/\blead (list|gen|generation)\b/, 5], [/\b(contact|prospect|b2b|email) (list|data|database)s?\b/, 5],
    [/\blists? of\b/, 3], [/\blist\b/, 2], [/\bdatabase\b/, 3], [/\bdecision[- ]makers?\b/, 4], [/\bverified\b/, 3],
    [/\bcontacts?\b/, 2], [/\b(directors|ceos|founders|owners|managers|heads of)\b/, 2], [/\bapollo\b/, 3],
    [/\bfind (companies|businesses|clients|people)\b/, 3], [/\bprospects?\b/, 2], [/\be-?mail addresses\b/, 3],
  ],
  "email-setup": [
    [/\bspf\b/, 6], [/\bdkim\b/, 6], [/\bdmarc\b/, 6], [/\bdns\b/, 4], [/\bdeliverability\b/, 5],
    [/\b(going|goes|land(s|ing)?|end(s|ing)? up) (in|to) (spam|junk)\b/, 6], [/\bspam\b/, 3], [/\bjunk\b/, 3],
    [/\bdomain\b/, 2], [/\bgoogle workspace\b/, 3], [/\bmailbox setup\b/, 4], [/\b(e-?mail|domain) (setup|set up|authentication)\b/, 5],
    [/\bauthenticat(e|ion)\b/, 3], [/\bnew domain\b/, 3],
  ],
};

const NOT_OFFERED: [RegExp, string][] = [
  [/\b(phone|video|cold) call(s|ing)?\b|\bcall(s|ing)\b|\btelemarketing\b/, "I don't do calling work of any kind."],
  [/\bgraphic design\b|\blogo design\b/, "I don't offer graphic design."],
  [/\bcrm\b/, "I don't offer CRM management."],
  [/\b(bookkeeping|accounting|accounts|tax(es)?|payroll|vat)\b/, "I don't offer bookkeeping, accounting or financial advice."],
  [/\b(legal|lawyer|contracts?)\b/, "I don't offer legal advice."],
  [/\bcalendar\b|\bdiary management\b/, "I don't offer calendar or project management."],
  [/\b(seo|search engine optimi[sz]ation)\b/, "I don't offer SEO or YouTube SEO."],
];

const REASONS: Record<MatchSlug, string> = {
  "linkedin-management": "Your brief is mostly about LinkedIn: your profile, posts or finding and following up with the right people.",
  "email-outreach": "Your brief is mostly about emailing new businesses: writing the emails, sending them and following up.",
  "business-support": "Your brief is mostly about everyday tasks you want off your list: admin, research, documents, website or content.",
  "lead-generation": "Your brief is mostly about finding the right companies and people, checked and ready in a spreadsheet.",
  "email-setup": "Your brief is mostly about your domain and email settings, so your emails are trusted and land in the inbox.",
};

const ORDER: MatchSlug[] = ["linkedin-management", "email-outreach", "business-support", "lead-generation", "email-setup"];

export function matchService(brief: string): MatchResult {
  const text = " " + brief.toLowerCase().replace(/[’']/g, "'") + " ";
  const scores = ORDER.map((slug) => ({ slug, score: RULES[slug].reduce((sum, [re, w]) => sum + (re.test(text) ? w : 0), 0) }));
  // LinkedIn outreach is LinkedIn work, not email outreach.
  if (/\blinked ?in\b/.test(text) && !/\be-?mails?\b/.test(text)) scores[1].score = Math.max(0, scores[1].score - 2);
  const ranked = [...scores].sort((a, b) => b.score - a.score || ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug));
  const best = ranked[0];
  const second = ranked[1];
  const refusal = NOT_OFFERED.find(([re]) => re.test(text));

  if (best.score < 2 && /\b(help|need|want|looking|someone|assist|manage|managing|do|handle)\b/.test(text) && !refusal && text.trim().split(/\s+/).length >= 4) {
    return { kind: "match", slug: "business-support", reason: "Business Support covers most everyday tasks you want off your list. Send me the details and I'll confirm before any work starts." };
  }
  if (best.score < 2) {
    return refusal
      ? { kind: "not-offered", reason: refusal[1] + " Have a look at the five services below, or send me your brief and I'll tell you honestly if I can help." }
      : { kind: "unclear", reason: "I couldn't tell from that. Add a little more detail, or pick a service below." };
  }
  return {
    kind: "match",
    slug: best.slug,
    alsoSlug: second.score >= 3 && second.score >= best.score * 0.6 ? second.slug : undefined,
    reason: REASONS[best.slug] + (refusal ? " Please note: " + refusal[1] : ""),
  };
}
