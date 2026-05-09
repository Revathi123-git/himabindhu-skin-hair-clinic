import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote, Play } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Real Patient Reviews" },
      { name: "description", content: "Read patient stories and reviews about Dr Himabindu's Skin, Hair & Aesthetics Clinic." },
    ],
  }),
  component: TestimonialsPage,
});

const REVIEWS = [
  { n: "Priya R.", t: "Acne Treatment", q: "After years of struggling with acne, my skin is finally clear and glowing. Dr. Himabindu listens, explains and delivers." },
  { n: "Rohit K.", t: "Hair PRP", q: "Genuine, ethical advice. Visible regrowth in 3 months. The team is wonderful." },
  { n: "Sneha M.", t: "Hydra Facial", q: "Feels like a luxury spa. My skin has never been this hydrated. Highly recommend." },
  { n: "Arjun S.", t: "Laser Hair Reduction", q: "Painless sessions, smooth skin. Worth every rupee. Booking my next package now." },
  { n: "Meera D.", t: "Pigmentation", q: "My melasma improved significantly. Honest about timelines, never overpromises." },
  { n: "Karthik V.", t: "Hair Fall", q: "Finally a clinic that finds the root cause. Hair fall reduced dramatically." },
];

function TestimonialsPage() {
  return (
    <div>
      <section className="pt-32 pb-12 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Patient Stories</span>
            <h1 className="font-display mt-3 text-4xl md:text-6xl">Loved by 10,000+ patients</h1>
            <div className="mt-6 inline-flex items-center gap-2">
              <div className="flex text-gold">{[...Array(5)].map((_,i) => <Star key={i} className="w-5 h-5 fill-current" />)}</div>
              <span className="text-muted-foreground">4.9 / 5 · Google Reviews</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.n} delay={(i % 3) * 0.08}>
                <div className="h-full p-7 rounded-3xl bg-card border border-border/60 hover-lift relative">
                  <Quote className="absolute top-5 right-5 w-10 h-10 text-primary/10" />
                  <div className="flex text-gold">{[...Array(5)].map((_,j) => <Star key={j} className="w-4 h-4 fill-current" />)}</div>
                  <p className="mt-4 text-foreground/80 leading-relaxed">"{r.q}"</p>
                  <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-semibold">
                      {r.n[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{r.n}</p>
                      <p className="text-xs text-muted-foreground">{r.t}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal><SectionHeading eyebrow="Video Stories" title="Hear it from our patients" /></Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="aspect-video rounded-3xl gradient-hero relative overflow-hidden flex items-center justify-center group cursor-pointer hover-lift">
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-smooth" />
                <div className="relative w-16 h-16 rounded-full glass flex items-center justify-center">
                  <Play className="w-6 h-6 text-foreground ml-1" />
                </div>
                <span className="absolute bottom-4 left-4 text-primary-foreground text-sm">Patient Story #{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
