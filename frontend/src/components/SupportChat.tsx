import { useState } from "react";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { apiPost } from "@/lib/api";

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
  service?: { slug: string; name: string };
};

type ServiceMatchResponse = {
  service_slug: string;
  service_name: string;
  rationale: string;
  confidence: number;
  needs_clarification: boolean;
  ai_classified: boolean;
};

const services = [
  { name: "LinkedIn Management", price: "€400/month", slug: "linkedin-management" },
  { name: "Email Outreach", price: "€450/month", slug: "email-outreach" },
  { name: "Lead Generation", price: "€0.80 per verified business contact", slug: "lead-generation" },
  { name: "Email Setup", price: "€80 one-time", slug: "email-setup" },
  { name: "Business Support", price: "€12/hour", slug: "business-support" },
  { name: "AI Video Creation", price: "€400/month", slug: "ai-video-creation" },
];

function localAnswer(input: string): string | null {
  const text = input.toLowerCase();

  if (/(price|pricing|cost|rate|how much|€|euro)/.test(text)) {
    return "Sure. Current starting prices are: LinkedIn Management €400/month, Email Outreach €450/month, Lead Generation €0.80 per verified business contact, Email Setup €80 one-time, Business Support €12/hour, and AI Video Creation €400/month.";
  }

  if (/(contact|whatsapp|phone|email|khushboo|talk|human|person)/.test(text)) {
    return "You can speak directly with Khushboo. WhatsApp is +91 99112 84362 and the business email is khushboo@arcturusprofessional.com.";
  }

  if (/(service|services|what do you|what can you|help me choose)/.test(text)) {
    return "I can help you choose between LinkedIn Management, Email Outreach, Lead Generation, Email Setup, Business Support, and AI Video Creation. Tell me what you are trying to achieve and I will match you to the closest service.";
  }

  if (/(location|where are you|india|delhi)/.test(text)) {
    return "Arcturus Professional Services is run independently by Khushboo from New Delhi, India, supporting businesses in Ireland, the UK and Europe.";
  }

  return null;
}

export default function SupportChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi! I’m Arcturus AI Support. Tell me what you need help with, or ask me about services and pricing.",
    },
  ]);

  const sendMessage = async (preset?: string) => {
    const value = (preset ?? input).trim();
    if (!value || busy) return;

    setInput("");
    setMessages((current) => [...current, { role: "user", text: value }]);
    setBusy(true);

    try {
      const direct = localAnswer(value);
      if (direct) {
        setMessages((current) => [...current, { role: "assistant", text: direct }]);
        return;
      }

      const match = await apiPost<ServiceMatchResponse>("/service-match", { brief: value });
      const service = services.find((item) => item.slug === match.service_slug);
      const confidenceText = match.needs_clarification
        ? "I’m not completely sure yet, but this looks closest."
        : "Based on what you described, this looks like the closest fit.";

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: `${confidenceText} ${match.rationale} ${service ? `The current price is ${service.price}.` : ""} If you want, I can also point you to the service page or connect you on WhatsApp.`,
          service: service ? { slug: service.slug, name: service.name } : undefined,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "I can still help with the basics. Tell me whether you need LinkedIn support, email outreach, lead generation, email setup, business support, or AI video creation. You can also message Khushboo directly on WhatsApp.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {open && (
        <section
          className="fixed bottom-[9.8rem] right-4 z-[70] flex w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#e1e4e8] bg-white shadow-[0_28px_70px_-28px_rgba(32,36,43,.42)]"
          aria-label="Arcturus AI Support chat"
          data-testid="ai-support-panel"
        >
          <header className="flex items-center justify-between bg-[#20242b] px-4 py-3.5 text-white">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-[#f58220]">
                <Bot className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-extrabold">AI Support</p>
                <p className="text-[11px] text-white/65">Arcturus Professional Services</p>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="grid size-9 place-items-center rounded-full text-white/70 hover:bg-white/10 hover:text-white" aria-label="Close AI Support">
              <X className="size-5" />
            </button>
          </header>

          <div className="max-h-[min(430px,52vh)] space-y-3 overflow-y-auto bg-[#f7f7f7] p-4" data-testid="ai-support-messages">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${message.role === "user" ? "rounded-br-md bg-[#f58220] text-white" : "rounded-bl-md border border-[#e3e5e8] bg-white text-[#30353c]"}`}>
                  {message.text}
                  {message.service && (
                    <a
                      href={`/services/${message.service.slug}`}
                      onClick={() => setOpen(false)}
                      className="mt-2 inline-flex items-center gap-1.5 font-bold text-[#d96c0d] underline underline-offset-2"
                    >
                      View {message.service.name}
                    </a>
                  )}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-[#e3e5e8] bg-white px-4 py-3 text-sm text-[#66707b]">
                  <span className="inline-flex items-center gap-2"><Sparkles className="size-4 text-[#f58220]" /> Thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-[#e3e5e8] bg-white p-3">
            <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
              {["What services do you offer?", "What does it cost?", "Which service fits me?"].map((prompt) => (
                <button key={prompt} type="button" onClick={() => sendMessage(prompt)} disabled={busy} className="shrink-0 rounded-full border border-[#dfe2e5] bg-white px-3 py-1.5 text-[11px] font-bold text-[#4b535d] hover:border-[#f58220] hover:text-[#d96c0d] disabled:opacity-50">
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={(event) => { event.preventDefault(); void sendMessage(); }} className="flex items-center gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about your project..."
                aria-label="Ask Arcturus AI Support"
                className="min-w-0 flex-1 rounded-xl border border-[#dfe2e5] bg-[#fafafa] px-3.5 py-2.5 text-sm text-[#20242b] outline-none placeholder:text-[#9aa1aa] focus:border-[#f58220] focus:ring-2 focus:ring-[#f58220]/15"
              />
              <button type="submit" disabled={!input.trim() || busy} className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#f58220] text-white transition hover:bg-[#d96c0d] disabled:cursor-not-allowed disabled:opacity-45" aria-label="Send message">
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="fixed bottom-[9.8rem] right-5 z-[71] flex items-center gap-2 rounded-full bg-[#20242b] px-3 py-2 text-white shadow-[0_18px_38px_-20px_rgba(32,36,43,.7)] transition hover:-translate-y-0.5 hover:bg-[#2d333b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f58220] md:right-6"
        aria-label={open ? "Close AI Support" : "Open AI Support"}
        data-testid="ai-support-button"
      >
        <span className="grid size-12 place-items-center rounded-full bg-[#f58220] shadow-[0_10px_24px_-12px_rgba(245,130,32,.9)]">
          <MessageCircle className="size-6" aria-hidden="true" />
        </span>
        <span className="pr-1 text-xs font-extrabold">AI Support</span>
      </button>
    </>
  );
}
