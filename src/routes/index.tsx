import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, MessageCircle, Star, Award, Users, Calendar, ShieldCheck,
  Sparkles, Heart, CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import doctorImg from "@/assets/doctor.jpg";
import clinicImg from "@/assets/clinic.jpg";
import { CLINIC, WHATSAPP_URL } from "@/lib/clinic";
import { SERVICES } from "@/lib/services";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr Himabindu's Skin, Hair & Aesthetics Clinic | Premium Dermatology" },
      { name: "description", content: "Advanced skin, hair & aesthetic care with personalized treatment by Dr. M. Himabindu (MBBS, DDVL). 14+ years experience." },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: "14+", label: "Years of Experience", icon: Award },
  { value: "10K+", label: "Happy Patients", icon: Users },
  { value: "25+", label: "Treatments Offered", icon: Sparkles },
  { value: "4.9★", label: "Patient Rating", icon: Star },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-soft -z-10" />
        <div className="absolute inset-0 gradient-radial -z-10" />
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Trusted Since {CLINIC.established}
            </span>
            <h1 className="font-display mt-6 text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Advanced <span className="text-gradient">Skin, Hair</span><br />
              & Aesthetic Care
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Personalized, evidence-based dermatology by {CLINIC.doctor} — combining medical excellence with luxurious, gentle care for radiant, confident you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-hero text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-smooth"
              >
                <Calendar className="w-4 h-4" /> Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-foreground font-medium hover-lift"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp Consultation
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br ${
                    ["from-primary to-accent","from-secondary to-gold","from-accent to-primary-glow","from-gold to-secondary"][i-1]
                  }`} />
                ))}
              </div>
              <div>
                <div className="flex text-gold">{[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <p className="mt-0.5">Loved by 10,000+ patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 gradient-hero rounded-[3rem] blur-2xl opacity-20" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-elegant">
              <img src={heroImg} alt="Glowing radiant skin — premium dermatology results" className="w-full h-full object-cover" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -left-4 lg:-left-10 bottom-10 glass p-4 rounded-2xl shadow-soft max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Reg No.</p>
                  <p className="font-semibold text-sm">{CLINIC.regNo}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-4 lg:-right-6 top-16 glass p-4 rounded-2xl shadow-soft"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Experience</p>
                  <p className="font-semibold text-sm">{CLINIC.experience}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 border-y border-border/60 bg-card">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <s.icon className="w-7 h-7 mx-auto text-primary" />
                <div className="font-display text-3xl md:text-4xl mt-3 text-gradient">{s.value}</div>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DOCTOR INTRO */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 gradient-gold rounded-3xl blur-xl opacity-30" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
                <img src={doctorImg} alt={`${CLINIC.doctor} — Dermatologist`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-5 rounded-2xl shadow-elegant max-w-[220px]">
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Founder</p>
                <p className="font-display text-xl mt-1">{CLINIC.doctor}</p>
                <p className="text-xs text-muted-foreground mt-1">{CLINIC.qualification}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Meet Your Dermatologist</span>
            <h2 className="font-display mt-3 text-3xl md:text-5xl leading-tight">A Compassionate Approach to Beautiful Skin</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {CLINIC.doctor} is a certified dermatologist with {CLINIC.experience} of experience treating thousands of patients with skin, hair and aesthetic concerns. Her practice blends advanced medical dermatology with a genuine, patient-first philosophy.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Board-certified dermatologist (MBBS, DDVL)",
                "Personalized treatment plans for every skin type",
                "FDA-approved technology & medical-grade products",
                "Confidential, judgement-free consultations",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Read full bio <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal><SectionHeading eyebrow="Our Services" title="Treatments Tailored To You" description="From medical dermatology to advanced aesthetics — discover holistic care for skin, hair and confidence." /></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.slice(0, 8).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.08}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block p-6 rounded-3xl bg-card border border-border/60 hover-lift h-full"
                >
                  <div className="w-12 h-12 rounded-2xl gradient-soft flex items-center justify-center mb-5 group-hover:gradient-hero transition-smooth">
                    <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-foreground font-medium hover-lift">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-elegant">
              <img src={clinicImg} alt="Modern dermatology clinic interior" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Why Choose Us</span>
            <h2 className="font-display mt-3 text-3xl md:text-5xl leading-tight">Premium Care, Honest Results</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { icon: ShieldCheck, t: "Safe & Certified", d: "USFDA-approved devices and protocols." },
                { icon: Heart, t: "Patient First", d: "Empathy-led, judgement-free consultations." },
                { icon: Sparkles, t: "Visible Results", d: "Transparent plans with measurable outcomes." },
                { icon: Award, t: "Expert Hands", d: "14+ years of dermatology experience." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="p-5 rounded-2xl bg-card border border-border/60">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="mt-3 font-semibold">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal><SectionHeading eyebrow="Patient Stories" title="Loved by thousands across the city" /></Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Priya R.", t: "Acne Treatment", q: "I struggled with acne for years. After 4 months at this clinic, my skin is clear and glowing. Forever grateful to Dr. Himabindu!" },
              { n: "Rohit K.", t: "Hair PRP", q: "Genuine, ethical advice and visible regrowth. The team explains everything beautifully — best decision I made." },
              { n: "Sneha M.", t: "Hydra Facial", q: "The clinic feels like a luxury spa. My skin has never felt this hydrated and radiant. Highly recommend." },
            ].map((rev, i) => (
              <Reveal key={rev.n} delay={i * 0.1}>
                <div className="h-full p-7 rounded-3xl bg-card border border-border/60 hover-lift">
                  <div className="flex text-gold mb-4">{[...Array(5)].map((_,j) => <Star key={j} className="w-4 h-4 fill-current" />)}</div>
                  <p className="text-foreground/80 leading-relaxed">"{rev.q}"</p>
                  <div className="mt-6 pt-5 border-t border-border/60">
                    <p className="font-semibold">{rev.n}</p>
                    <p className="text-xs text-muted-foreground">{rev.t}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-hero p-10 md:p-16 text-center shadow-elegant">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative">
              <Sparkles className="w-10 h-10 mx-auto text-primary-foreground" />
              <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mt-5 max-w-2xl mx-auto leading-tight">
                Ready to glow? Let's craft your treatment plan.
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
                Book a consultation today — speak directly with our team and get a personalized plan within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link to="/appointment" className="px-8 py-4 rounded-full bg-background text-foreground font-medium shadow-elegant hover-lift">
                  Book Appointment
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full glass-dark text-primary-foreground font-medium border border-white/30 hover:bg-white/10 transition-smooth">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
