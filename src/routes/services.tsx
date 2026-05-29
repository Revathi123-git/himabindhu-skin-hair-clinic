import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Stethoscope } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Reveal } from "@/components/site/Reveal";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Skin, Hair, Laser & Aesthetic Treatments" },
      { name: "description", content: "Featured dermatology surgeries, advanced lasers, hair regrowth and luxury aesthetic treatments by Dr. M. Himabindu." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const surgeries = SERVICES.filter((s) => s.highlightStyle === "surgery");
  const aesthetics = SERVICES.filter((s) => s.highlightStyle === "aesthetic");
  const rest = SERVICES.filter((s) => !s.featured);

  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-12 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Our Services</span>
            <h1 className="font-display mt-3 text-4xl md:text-6xl">Treatments crafted around you</h1>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
              From signature dermatologic surgeries to luxurious aesthetic therapies — every treatment is personalized for your skin, your goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED SURGERIES */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-primary/[0.04]" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Reveal>
            <div className="flex items-center gap-2 text-primary">
              <Stethoscope className="w-5 h-5" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase">Doctor's Specialty</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-3">
              <h2 className="font-display text-3xl md:text-5xl max-w-2xl">Featured Dermatologic Surgeries</h2>
              <p className="text-muted-foreground max-w-md">
                In-office procedures performed personally by Dr. Himabindu with precision suturing and cosmetic finesse.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgeries.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block rounded-3xl overflow-hidden h-full shadow-elegant hover-lift border border-primary/20"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <div className="relative aspect-[5/4] overflow-hidden">
  <img
    src={s.image}
    alt={s.title}
    width={1280}
    height={896}
    loading="lazy"
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold tracking-[0.2em] uppercase shadow-glow">
                      Surgery
                    </span>
                    <div className="absolute top-4 right-4 w-11 h-11 rounded-2xl bg-background/90 backdrop-blur flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <div className="p-6 bg-card">
                    <h3 className="font-display text-xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                    <ul className="mt-4 space-y-1.5">
                      {s.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="text-xs text-foreground/70 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary" /> {b}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED AESTHETICS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase">Signature Aesthetics</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl mt-3 max-w-2xl">Premium aesthetic experiences</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {aesthetics.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block rounded-3xl overflow-hidden h-full shadow-elegant hover-lift"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                     src={s.image}
                      alt={s.title}
                      width={1280}
                      height={896}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="w-11 h-11 rounded-2xl gradient-hero flex items-center justify-center mb-4 shadow-glow">
                        <s.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-2xl">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ALL OTHER TREATMENTS */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">All Treatments</span>
            <h2 className="font-display text-3xl md:text-5xl mt-3">Skin, hair, laser & medical care</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block p-7 rounded-3xl bg-card border border-border/60 hover-lift h-full"
                >
                  <div className="w-14 h-14 rounded-2xl gradient-soft flex items-center justify-center mb-5 group-hover:gradient-hero transition-smooth">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary/80">{s.category}</span>
                  <h3 className="font-display text-2xl mt-1">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{s.short}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.benefits.map((b) => (
                      <li key={b} className="text-sm text-foreground/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
