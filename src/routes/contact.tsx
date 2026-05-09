import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { CLINIC, MAIL_URL, TEL_URL, WHATSAPP_URL } from "@/lib/clinic";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Dr Himabindu's Clinic" },
      { name: "description", content: "Reach Dr Himabindu's Skin, Hair & Aesthetics Clinic by phone, WhatsApp, or email. View hours and location." },
    ],
  }),
  component: ContactPage,
});

const CARDS = [
  { icon: Phone, t: "Call us", v: CLINIC.phone, href: TEL_URL },
  { icon: MessageCircle, t: "WhatsApp", v: CLINIC.whatsapp, href: WHATSAPP_URL },
  { icon: Mail, t: "Email", v: CLINIC.email, href: MAIL_URL },
  { icon: Clock, t: "Hours", v: CLINIC.hours },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || !form.email.includes("@") || form.message.trim().length < 5) {
      toast.error("Please fill in all fields correctly.");
      return;
    }
    toast.success("Message sent! We'll respond within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <section className="pt-32 pb-12 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Contact</span>
            <h1 className="font-display mt-3 text-4xl md:text-6xl">We'd love to hear from you</h1>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">Questions, bookings, follow-ups — we're a message away.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARDS.map((c, i) => {
              const Inner = (
                <div className="h-full p-6 rounded-3xl bg-card border border-border/60 hover-lift">
                  <c.icon className="w-6 h-6 text-primary" />
                  <p className="text-xs text-muted-foreground mt-3 uppercase tracking-wider">{c.t}</p>
                  <p className="font-semibold mt-1">{c.v}</p>
                </div>
              );
              return (
                <Reveal key={c.t} delay={i * 0.06}>
                  {c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block h-full">{Inner}</a> : Inner}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-soft border border-border/60 h-full min-h-[400px]">
              <iframe
                title="Clinic location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC.address)}&output=embed`}
                className="w-full h-full min-h-[400px]"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="p-8 rounded-3xl bg-card border border-border/60 shadow-soft space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">{CLINIC.name}</p>
                  <p className="text-sm text-muted-foreground">{CLINIC.address}</p>
                </div>
              </div>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={80} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="Email address" maxLength={120} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Your message" maxLength={500} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              <button type="submit" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-hero text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-smooth">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
