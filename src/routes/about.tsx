import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Heart, Users, Calendar, Stethoscope } from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";
import { CLINIC } from "@/lib/clinic";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. M. Himabindu | Dermatologist & Founder" },
      { name: "description", content: "Learn about Dr. M. Himabindu (MBBS, DDVL) — dermatologist with 14+ years of experience and founder of Dr Himabindu's Skin, Hair & Aesthetics Clinic." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="pt-32 pb-16 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">About</span>
            <h1 className="font-display mt-3 text-4xl md:text-6xl max-w-3xl">Care, expertise & a personal touch.</h1>
            <p className="mt-5 text-muted-foreground max-w-2xl text-lg">
              {CLINIC.name} was founded in {CLINIC.established} with one mission — to make world-class dermatology accessible, comfortable and effective for every patient.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 gradient-gold rounded-3xl blur-xl opacity-30" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant sticky top-28">
                <img src={doctorImg} alt={CLINIC.doctor} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl">{CLINIC.doctor}</h2>
            <p className="text-primary mt-1 font-medium">{CLINIC.qualification} · Dermatologist · Cosmetologist</p>

            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                With {CLINIC.experience} of clinical practice, Dr. Himabindu has helped thousands of patients achieve healthy skin and renewed confidence. Her expertise spans medical dermatology, trichology and aesthetic procedures.
              </p>
              <p>
                Trained in the latest evidence-based dermatology, she believes in transparent communication, ethical recommendations, and gentle yet effective treatments — never more than what you actually need.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, t: "Qualification", d: CLINIC.qualification },
                { icon: Award, t: "Experience", d: CLINIC.experience },
                { icon: Stethoscope, t: "Reg. Number", d: CLINIC.regNo },
                { icon: Calendar, t: "Established", d: CLINIC.established },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="p-5 rounded-2xl bg-card border border-border/60">
                  <Icon className="w-5 h-5 text-primary" />
                  <p className="text-xs text-muted-foreground mt-2">{t}</p>
                  <p className="font-semibold mt-0.5">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal><SectionHeading eyebrow="Our Philosophy" title="Mission, Vision & Care" /></Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, t: "Mission", d: "To deliver evidence-based dermatology with empathy, transparency, and outcomes that genuinely change lives." },
              { icon: Users, t: "Vision", d: "To be the most trusted destination for skin, hair and aesthetic care — known for honesty as much as results." },
              { icon: Award, t: "Care Philosophy", d: "Every treatment is personalized. We listen first, recommend only what's needed, and walk with you through your journey." },
            ].map(({ icon: Icon, t, d }) => (
              <Reveal key={t}>
                <div className="h-full p-8 rounded-3xl bg-card border border-border/60 hover-lift">
                  <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl mt-5">{t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Reveal><SectionHeading eyebrow="Journey" title="Milestones along the way" /></Reveal>
          <div className="space-y-8 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-border">
            {[
              { y: "2010", t: "MBBS Graduation", d: "Began the journey in medicine with strong foundations." },
              { y: "2014", t: "DDVL Specialization", d: "Specialized in Dermatology, Venereology & Leprology." },
              { y: "2019", t: "Clinic Established", d: "Founded Dr Himabindu's Skin, Hair & Aesthetics Clinic." },
              { y: "2023", t: "10,000+ Patients", d: "Crossed 10,000 happy patients with consistent 4.9★ ratings." },
              { y: "Today", t: "14+ Years Strong", d: "Continuing to evolve with the latest in dermatology." },
            ].map((m, i) => (
              <Reveal key={m.y} delay={i * 0.05}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <span className="text-gradient font-display text-3xl">{m.y}</span>
                    <h3 className="font-semibold text-lg mt-1">{m.t}</h3>
                    <p className="text-muted-foreground mt-1">{m.d}</p>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 w-8 h-8 rounded-full gradient-hero shadow-glow" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
