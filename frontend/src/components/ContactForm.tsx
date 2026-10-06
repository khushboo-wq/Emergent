import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2, Send } from "lucide-react";
import { apiPost, ApiError } from "@/lib/api";
import { orderedServices } from "@/lib/site";

interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface ContactResponse {
  status: "success";
  message: string;
}

const initialValues: ContactSubmission = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactSubmission>(initialValues);
  const mutation = useMutation<ContactResponse, ApiError, ContactSubmission>({
    mutationFn: (payload) => apiPost<ContactResponse>("/contact", payload),
    onSuccess: () => setValues(initialValues),
  });

  const update = (field: keyof ContactSubmission, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (mutation.isError) mutation.reset();
  };

  if (mutation.isSuccess) {
    return (
      <div className="rounded-xl border border-[#8ab8a5] bg-[#eef8f1] p-8 sm:p-10" data-testid="contact-form-success">
        <CheckCircle2 className="size-8 text-[#23734b]" />
        <h2 className="mt-5 font-serif text-3xl text-[#0f2942]" data-testid="contact-form-success-heading">Your enquiry is on its way.</h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-[#365f4b]" data-testid="contact-form-success-copy">I have received your message and will reply in writing. Thank you for sharing the context.</p>
        <button type="button" onClick={() => mutation.reset()} className="mt-7 text-sm font-semibold text-[#0f2942] underline decoration-[#c59b27] underline-offset-4" data-testid="contact-form-send-another-button">Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={(event) => { event.preventDefault(); mutation.mutate(values); }} className="rounded-xl border border-[#e2dfd8] bg-white p-6 shadow-[0_18px_48px_-32px_rgba(15,41,66,0.45)] sm:p-9" data-testid="contact-form">
      <div className="grid gap-6 sm:grid-cols-2">
        <div><label htmlFor="contact-name" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748b]" data-testid="contact-name-label">Name</label><input id="contact-name" value={values.name} onChange={(event) => update("name", event.target.value)} required minLength={2} maxLength={100} autoComplete="name" className="mt-2 h-12 w-full rounded-md border border-[#cbd5e1] bg-[#faf9f6] px-4 text-sm text-[#0f2942] outline-none transition-colors duration-200 focus:border-[#c59b27] focus:ring-2 focus:ring-[#c59b27]/20" data-testid="contact-name-input" /></div>
        <div><label htmlFor="contact-email" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748b]" data-testid="contact-email-label">Email</label><input id="contact-email" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} required autoComplete="email" className="mt-2 h-12 w-full rounded-md border border-[#cbd5e1] bg-[#faf9f6] px-4 text-sm text-[#0f2942] outline-none transition-colors duration-200 focus:border-[#c59b27] focus:ring-2 focus:ring-[#c59b27]/20" data-testid="contact-email-input" /></div>
        <div><label htmlFor="contact-company" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748b]" data-testid="contact-company-label">Company</label><input id="contact-company" value={values.company} onChange={(event) => update("company", event.target.value)} required maxLength={160} autoComplete="organization" className="mt-2 h-12 w-full rounded-md border border-[#cbd5e1] bg-[#faf9f6] px-4 text-sm text-[#0f2942] outline-none transition-colors duration-200 focus:border-[#c59b27] focus:ring-2 focus:ring-[#c59b27]/20" data-testid="contact-company-input" /></div>
        <div><label htmlFor="contact-service" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748b]" data-testid="contact-service-label">Service</label><select id="contact-service" value={values.service} onChange={(event) => update("service", event.target.value)} required className="mt-2 h-12 w-full rounded-md border border-[#cbd5e1] bg-[#faf9f6] px-4 text-sm text-[#0f2942] outline-none transition-colors duration-200 focus:border-[#c59b27] focus:ring-2 focus:ring-[#c59b27]/20" data-testid="contact-service-select"><option value="">Select a service</option>{orderedServices.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}</select></div>
        <div className="sm:col-span-2"><label htmlFor="contact-message" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748b]" data-testid="contact-message-label">Message</label><textarea id="contact-message" value={values.message} onChange={(event) => update("message", event.target.value)} required minLength={10} maxLength={5000} rows={6} className="mt-2 w-full resize-y rounded-md border border-[#cbd5e1] bg-[#faf9f6] px-4 py-3 text-sm leading-6 text-[#0f2942] outline-none transition-colors duration-200 focus:border-[#c59b27] focus:ring-2 focus:ring-[#c59b27]/20" data-testid="contact-message-input" /></div>
      </div>
      {mutation.isError ? <p className="mt-5 rounded-md bg-[#fff2f0] px-4 py-3 text-sm leading-6 text-[#a13b2d]" role="alert" data-testid="contact-form-error">{mutation.error.message || "I could not send your enquiry. Please try again."}</p> : null}
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs leading-5 text-[#64748b]" data-testid="contact-form-note">Your details are used only to respond to this enquiry.</p><button type="submit" disabled={mutation.isPending} className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0f2942] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1e3a5f] disabled:cursor-wait disabled:opacity-60" data-testid="contact-form-submit-button">{mutation.isPending ? "Sending..." : "Send enquiry"}<Send className="size-4" /></button></div>
    </form>
  );
}
