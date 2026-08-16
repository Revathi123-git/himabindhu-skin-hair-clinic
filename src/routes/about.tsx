import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Heart, Users, Calendar, Stethoscope } from "lucide-react";
import doctorImg from "@/assets/certificate2.png";
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
    {/* About Hero */}
    <section className="pt-32 pb-16 gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
            About
          </span>

          <h1 className="font-display mt-3 text-4xl md:text-6xl max-w-3xl">
            Care, expertise & a personal touch.
          </h1>

          <p className="mt-5 text-muted-foreground max-w-2xl text-lg leading-relaxed">
            {CLINIC.name} was founded in {CLINIC.established} with a commitment
            to providing personalized, evidence-based dermatological care in a
            comfortable and patient-focused environment.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Doctor Profile */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">

        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 gradient-gold rounded-3xl blur-xl opacity-30" />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant sticky top-28">
              <img
                src={doctorImg}
                alt="Dr. M. Himabindu - Dermatologist, Cosmetologist, Dermatosurgeon and Pediatric Dermatologist"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl">
            {CLINIC.doctor}
          </h2>

          <p className="text-primary mt-1 font-medium">
            {CLINIC.qualification} · Dermatologist · Cosmetologist
          </p>

          <p className="text-primary mt-1 font-medium">
            Dermatosurgeon · Pediatric Dermatologist
          </p>

          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              With {CLINIC.experience} of clinical practice, Dr. M. Himabindu
              has helped thousands of patients achieve healthier skin, hair
              and renewed confidence. Her expertise encompasses medical
              dermatology, cosmetic dermatology, dermatosurgery,
              pediatric dermatology and aesthetic procedures.
            </p>

            <p>
              As the Director of Dr. Himabindu's Skin Clinic & Laser Centre,
              she focuses on personalized, evidence-based treatment plans
              tailored to each patient's individual concerns and needs.
            </p>

            <p>
              Dr. Himabindu believes in transparent communication, ethical
              recommendations and compassionate care — recommending treatments
              that are appropriate, effective and focused on the patient's
              well-being.
            </p>
          </div>

          {/* Doctor Credentials */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: GraduationCap,
                t: "Qualification",
                d: CLINIC.qualification,
              },
              {
                icon: Award,
                t: "Experience",
                d: CLINIC.experience,
              },
              {
                icon: Stethoscope,
                t: "Reg. Number",
                d: CLINIC.regNo,
              },
              {
                icon: Calendar,
                t: "Established",
                d: CLINIC.established,
              },
            ].map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="p-5 rounded-2xl bg-card border border-border/60"
              >
                <Icon className="w-5 h-5 text-primary" />

                <p className="text-xs text-muted-foreground mt-2">
                  {t}
                </p>

                <p className="font-semibold mt-0.5">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* Areas of Expertise */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="Areas of Dermatological Care"
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              icon: Stethoscope,
              t: "Medical Dermatology",
              d: "Diagnosis and management of a wide range of skin conditions with personalized treatment plans.",
            },
            {
              icon: Award,
              t: "Cosmetic Dermatology",
              d: "Personalized aesthetic treatments focused on healthy, natural-looking skin.",
            },
            {
              icon: Stethoscope,
              t: "Dermatosurgery",
              d: "Specialized dermatological surgical procedures performed with precision and patient care.",
            },
            {
              icon: Heart,
              t: "Pediatric Dermatology",
              d: "Dermatological care for children with an emphasis on gentle and appropriate treatment.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <Reveal key={t}>
              <div className="h-full p-7 rounded-3xl bg-card border border-border/60 hover-lift">
                <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <h3 className="font-display text-xl mt-5">
                  {t}
                </h3>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Professional Experience */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Professional Experience"
            title="Experience built on clinical expertise"
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Reveal>
            <div className="h-full p-8 rounded-3xl bg-card border border-border/60 hover-lift">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Current Position
              </p>

              <h3 className="font-display text-2xl mt-3">
                Director
              </h3>

              <p className="font-medium mt-2">
                Dr. Himabindu's Skin Clinic & Laser Centre
              </p>

              <p className="text-muted-foreground mt-4 leading-relaxed">
                Providing personalized dermatological, cosmetic and aesthetic
                care with a focus on evidence-based treatment and patient
                well-being.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full p-8 rounded-3xl bg-card border border-border/60 hover-lift">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Previous Position
              </p>

              <h3 className="font-display text-2xl mt-3">
                Consultant
              </h3>

              <p className="font-medium mt-2">
                Anchal Skin Institute, Jubilee Hills
              </p>

              <p className="text-muted-foreground mt-4 leading-relaxed">
                Served as a consultant providing specialist dermatological
                consultations and patient care.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Education & Awards */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Education & Recognition"
            title="Academic excellence & professional achievements"
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Education */}
          <Reveal>
            <div className="h-full p-8 rounded-3xl bg-card border border-border/60">
              <GraduationCap className="w-7 h-7 text-primary" />

              <h3 className="font-display text-2xl mt-5">
                Medical Education
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="font-semibold">
                    MBBS
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Kakatiya Medical College, Warangal
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    DDVL
                  </p>
                  <p className="text-muted-foreground mt-1">
                    SVS Medical College, Mahabubnagar
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Dermatology, Venereology & Leprology
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Award */}
          <Reveal delay={0.1}>
            <div className="h-full p-8 rounded-3xl bg-card border border-border/60">
              <Award className="w-7 h-7 text-primary" />

              <h3 className="font-display text-2xl mt-5">
                Honors & Awards
              </h3>

              <div className="mt-6">
                <p className="font-semibold text-lg">
                  Best Poster Award
                </p>

                <p className="text-primary mt-1">
                  CUTICON 2018
                </p>

                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Recognized with the Best Poster Award at CUTICON 2018,
                  reflecting her involvement in academic and professional
                  dermatology.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>


    {/* Professional Associations */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Professional Associations"
            title="Professional memberships"
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            "Telangana State Medical Council (TSMC)",
            "Indian Association of Dermatologists, Venereologists & Leprologists (IADVL)",
            "Indian Medical Association (IMA)",
          ].map((association) => (
            <Reveal key={association}>
              <div className="h-full p-7 rounded-3xl bg-card border border-border/60 hover-lift text-center">
                <Stethoscope className="w-6 h-6 text-primary mx-auto" />

                <p className="font-semibold mt-4 leading-relaxed">
                  {association}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Conferences */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Professional Development"
            title="Conferences & Academic Participation"
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {[
            "DERMACON 2020",
            "CUTICON 2018",
            "CUTICON 2019",
            "CUTICON 2020",
            "CUTICON 2021",
          ].map((conference) => (
            <Reveal key={conference}>
              <div className="p-6 rounded-2xl bg-card border border-border/60 hover-lift">
                <Award className="w-5 h-5 text-primary" />

                <p className="font-semibold mt-4">
                  {conference}
                </p>

                <p className="text-sm text-muted-foreground mt-1">
                  Dermatology Conference
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Dr. Himabindu actively participates in professional dermatology
            conferences and academic events, continuing to expand her
            knowledge and stay updated with developments in dermatological
            and aesthetic care.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Mission, Vision & Care"
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              t: "Mission",
              d: "To deliver evidence-based dermatology with empathy, transparency, and outcomes that genuinely improve our patients' quality of life.",
            },
            {
              icon: Users,
              t: "Vision",
              d: "To be a trusted destination for skin, hair and aesthetic care, known for clinical expertise, honesty and personalized attention.",
            },
            {
              icon: Award,
              t: "Care Philosophy",
              d: "Every treatment is personalized. We listen first, understand your concerns and recommend only what is appropriate for your individual needs.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <Reveal key={t}>
              <div className="h-full p-8 rounded-3xl bg-card border border-border/60 hover-lift">
                <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <h3 className="font-display text-2xl mt-5">
                  {t}
                </h3>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Journey / Milestones */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="Milestones along the way"
          />
        </Reveal>

        <div className="space-y-8 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-border">

          {[
            {
              y: "2006",
              t: "MBBS Graduation",
              d: "Completed medical education at Kakatiya Medical College, Warangal.",
            },
            {
              y: "2012",
              t: "DDVL Specialization",
              d: "Specialized in Dermatology, Venereology & Leprology at SVS Medical College, Mahabubnagar.",
            },
            {
              y: "2018",
              t: "Best Poster Award",
              d: "Received the Best Poster Award at CUTICON 2018.",
            },
            {
              y: "2019",
              t: "Clinic Established",
              d: "Founded Dr. Himabindu's Skin, Hair & Aesthetics Clinic.",
            },
            {
              y: "2023",
              t: "10,000+ Patients",
              d: "Crossed 10,000 patients with consistent 4.9★ ratings.",
            },
            {
              y: "Today",
              t: "14+ Years Strong",
              d: "Continuing to evolve with advances in dermatology, cosmetology and aesthetic care.",
            },
          ].map((m, i) => (
            <Reveal key={m.y} delay={i * 0.05}>
              <div
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1
                    ? "md:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:pl-8"
                  }`}
                >
                  <span className="text-gradient font-display text-3xl">
                    {m.y}
                  </span>

                  <h3 className="font-semibold text-lg mt-1">
                    {m.t}
                  </h3>

                  <p className="text-muted-foreground mt-1">
                    {m.d}
                  </p>
                </div>

                <div className="hidden md:block" />

                <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 w-8 h-8 rounded-full gradient-hero shadow-glow" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Closing */}
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
            Dr. Himabindu's
          </span>

          <h2 className="font-display text-3xl md:text-5xl mt-3">
            Skin · Hair · Aesthetics
          </h2>

          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Personalized, evidence-based dermatology by Dr. M. Himabindu —
            combining clinical expertise, compassionate care and
            individualized treatment for healthy, confident skin.
          </p>
        </Reveal>
      </div>
    </section>
  </div>
);
}
