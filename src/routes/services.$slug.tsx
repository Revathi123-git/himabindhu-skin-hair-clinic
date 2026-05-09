import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Clock, Sparkles, ShieldCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SERVICES } from "@/lib/services";
import { Reveal } from "@/components/site/Reveal";
import clinicImg from "@/assets/clinic.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.title} | Dr Himabindu's Clinic` },
      { name: "description", content: loaderData?.service.short ?? "" },
    ],
  }),
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div className="pt-40 pb-20 text-center">
      <h1 className="font-display text-4xl">Treatment not found</h1>
      <Link to="/services" className="text-primary mt-4 inline-block">Back to services</Link>
    </div>
  ),
});

const FAQS = [
  { q: "Is the treatment safe?", a: "Yes — we follow USFDA-approved protocols and use medical-grade equipment. Every session is supervised by Dr. Himabindu." },
  { q: "How many sessions are required?", a: "Most treatments require 3–6 sessions for visible results, but a personalized plan is created after consultation." },
  { q: "Is there any downtime?", a: "Most aesthetic treatments have minimal to no downtime. You can resume your routine immediately." },
  { q: "Are results permanent?", a: "Many results are long-lasting with proper maintenance. We share a clear after-care plan." },
];

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <section className="pt-32 pb-12 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            <div>
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-5 shadow-glow">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-6xl">{service.title}</h1>
              <p className="mt-5 text-muted-foreground text-lg">{service.short}</p>
              <Link to="/appointment" className="mt-7 inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-hero text-primary-foreground font-medium shadow-elegant hover-lift">
                Book Consultation
              </Link>
            </div>
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-elegant">
              <img src={clinicImg} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl">Overview</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.title} at Dr Himabindu's Clinic combines clinical expertise with the latest technology. Each plan is tailored after a one-on-one consultation to ensure safety, comfort and visible results.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div>
              <h2 className="font-display text-2xl">Benefits</h2>
              <ul className="mt-3 space-y-2">
                {service.benefits.map((b: string) => (
                  <li key={b} className="flex items-start gap-2 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3">
              <div className="p-5 rounded-2xl bg-card border border-border/60">
                <Clock className="w-5 h-5 text-primary" />
                <p className="text-xs text-muted-foreground mt-2">Duration</p>
                <p className="font-semibold">30–60 mins / session</p>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border/60">
                <Sparkles className="w-5 h-5 text-primary" />
                <p className="text-xs text-muted-foreground mt-2">Sessions</p>
                <p className="font-semibold">3–6 (personalized)</p>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border/60">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <p className="text-xs text-muted-foreground mt-2">Safety</p>
                <p className="font-semibold">USFDA-approved</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl text-center">The Procedure</h2>
            <div className="mt-10 grid md:grid-cols-4 gap-6">
              {["Consultation", "Skin Analysis", "Treatment", "Follow-up"].map((step, i) => (
                <div key={step} className="p-6 rounded-2xl bg-card border border-border/60 text-center">
                  <div className="w-10 h-10 mx-auto rounded-full gradient-hero text-primary-foreground flex items-center justify-center font-display">{i + 1}</div>
                  <h3 className="font-semibold mt-4">{step}</h3>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-center">FAQs</h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-card border border-border/60 overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <div className="px-5 pb-5 text-muted-foreground">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-3xl gradient-hero p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground">Ready to begin your journey?</h2>
            <Link to="/appointment" className="mt-6 inline-block px-8 py-4 rounded-full bg-background text-foreground font-medium shadow-elegant hover-lift">
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
