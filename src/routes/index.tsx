import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, MessageCircle, Star, Award, Users, Calendar, ShieldCheck,
  Sparkles, Heart, CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import doctorImg from "@/assets/doctor.png";
import clinicImg from "@/assets/clinic7.png";
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
      {/* HERO — full-bleed cinematic */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">

        {/* Background image layer */}
        <div className="absolute inset-0 -z-30">
          <motion.img
            src={heroImg}
            alt="Radiant glowing skin — premium dermatology care"
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {/* Overlays */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[oklch(0.18_0.04_200/0.85)] via-[oklch(0.22_0.05_210/0.7)] to-[oklch(0.3_0.08_180/0.6)]" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,oklch(0.7_0.13_185/0.35),transparent_55%),radial-gradient(circle_at_80%_70%,oklch(0.78_0.1_78/0.25),transparent_55%)]" />

        {/* Floating decorative orbs */}
        <motion.div
          className="absolute top-24 right-[8%] w-72 h-72 rounded-full bg-gradient-to-br from-primary-glow/40 to-transparent blur-3xl -z-10"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-[5%] w-96 h-96 rounded-full bg-gradient-to-tr from-gold/30 to-transparent blur-3xl -z-10"
          animate={{ y: [0, -40, 0], x: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Sparkle particles */}
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/70 -z-10"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        <div className="container relative mx-auto px-4 lg:px-8 pt-28 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-dark border border-white/20 text-xs font-medium text-white/90 tracking-[0.25em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Welcome · Trusted Since {CLINIC.established}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display italic mt-8 text-2xl md:text-3xl text-gold"
          >
            Hello, Welcome to
          </motion.p>

          <h1 className="font-display mt-3 text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white max-w-5xl mx-auto">
            {"Dr Himabindu's".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block bg-gradient-to-r from-gold via-secondary to-gold bg-clip-text text-transparent"
            >
              Skin, Hair &amp; Aesthetics Clinic
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-7 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Personalized, evidence-based dermatology by {CLINIC.doctor} — combining medical excellence with luxurious, gentle care for the radiant, confident you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/appointment"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-hero text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-smooth"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-dark border border-white/30 text-white font-medium hover:bg-white/10 transition-smooth"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp Consultation
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/85"
          >
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="w-4 h-4 text-gold" /> Reg. No. {CLINIC.regNo}
            </div>
            <div className="hidden md:block w-px h-5 bg-white/20" />
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-gold" /> {CLINIC.experience}
            </div>
            <div className="hidden md:block w-px h-5 bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="flex text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
              <span className="text-sm">Loved by 10,000+ patients</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 2, duration: 0.6 }, y: { duration: 2, repeat: Infinity } }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.3em] uppercase"
        >
          Scroll
        </motion.div>
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
  {
    n: "Anonymous001",
    t: "Hair Regrowth Treatment",
    q: "Almost 5 months into my treatment and most of my hair near the crown is back. Great doctor who constantly supports you throughout the treatment. There are many other procedures available as well based on Dr. Himabindu’s suggestions.",
  },
  {
    n: "Urvish Markad",
    t: "Skin Treatment",
    q: "I have been consulting Dr. Himabindu for a long time now for all of my skin-related problems and have always received the right solution. The doctor attentively listens to my concerns first and then recommends the appropriate treatment.",
  },
  {
    n: "Vanyakanthu",
    t: "Dermatology Consultation",
    q: "The doctor understands the problem very well and suggested medicines that helped me recover. The staff are polite and professional. Highly recommend this skin clinic.",
  },
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
           <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-foreground font-medium hover-lift">
              View all<ArrowRight className="w-4 h-4" />
            </Link>
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
