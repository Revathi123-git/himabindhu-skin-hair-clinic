import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Reveal } from "@/components/site/Reveal";

/* =========================
   TYPES (optional here)
   ========================= */
export type HighlightStyle = "surgery" | "aesthetic" | "default";

export type ServiceItem = {
  slug: string;
  title: string;
  icon: any;
  category: string;
  featured: boolean;
  highlightStyle: HighlightStyle;
  short: string;
  benefits: string[];
};

/* =========================
   ROUTE
   ========================= */
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services | Skin, Hair, Laser & Aesthetic Treatments",
      },
      {
        name: "description",
        content:
          "Comprehensive dermatology services: acne, pigmentation, PRP, laser hair reduction, anti-aging, fillers, hydra facial and more.",
      },
    ],
  }),
  component: ServicesPage,
});

/* =========================
   PAGE COMPONENT
   ========================= */
function ServicesPage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="pt-32 pb-12 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
              Our Services
            </span>

            <h1 className="font-display mt-3 text-4xl md:text-6xl">
              Treatments crafted around you
            </h1>

            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
              Medical dermatology, advanced lasers and luxurious aesthetics —
              every treatment is personalized for your skin, your goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className={`
group block p-7 rounded-3xl border hover-lift h-full relative overflow-hidden transition-all duration-500

${
  s.highlightStyle === "surgery"
    ? "bg-gradient-to-br from-rose-500/10 via-background to-red-500/10 border-rose-400/30 shadow-[0_0_35px_rgba(244,63,94,0.18)]"
    : s.highlightStyle === "aesthetic"
    ? "bg-gradient-to-br from-yellow-400/10 via-background to-pink-400/10 border-yellow-300/30 shadow-[0_0_35px_rgba(250,204,21,0.18)]"
    : "bg-card border-border/60"
}
`}
                >
                  {/* ICON */}
                  <div
                    className="
                      w-14 h-14 rounded-2xl gradient-soft flex items-center justify-center mb-5
                      group-hover:gradient-hero transition-smooth
                    "
                  >
                    <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-display text-2xl">{s.title}</h3>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-muted-foreground">{s.short}</p>

                  {/* BENEFITS */}
                  <ul className="mt-4 space-y-1.5">
                    {s.benefits.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-foreground/70 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
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