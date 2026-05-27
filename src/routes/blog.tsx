import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Calendar, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import doctorImg from "@/assets/doctor.png";
import clinicImg from "@/assets/clinic.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Skin & Hair Care Tips by Dr Himabindu" },
      { name: "description", content: "Expert dermatology articles, skin care tips, and hair health awareness from Dr. M. Himabindu's clinic." },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  { id: 1, c: "Skin Care", t: "10 Daily Habits for Glowing Skin", e: "Simple, dermatologist-approved routines that transform your skin in weeks.", img: heroImg, d: "May 2, 2026" },
  { id: 2, c: "Hair Care", t: "PRP for Hair Loss: What to Expect", e: "Everything about platelet-rich plasma therapy — sessions, results, safety.", img: doctorImg, d: "Apr 24, 2026" },
  { id: 3, c: "Aesthetics", t: "Hydra Facial vs Chemical Peel — Which is Right for You?", e: "Compare benefits, downtime, and ideal candidates for both treatments.", img: clinicImg, d: "Apr 18, 2026" },
  { id: 4, c: "Skin Care", t: "Understanding Melasma: Causes & Solutions", e: "A complete guide to managing pigmentation safely and effectively.", img: heroImg, d: "Apr 10, 2026" },
  { id: 5, c: "Education", t: "Sunscreen 101: Picking the Right SPF", e: "What every Indian skin type should know about sun protection.", img: clinicImg, d: "Mar 28, 2026" },
  { id: 6, c: "Hair Care", t: "Why Hair Falls in Monsoon (and How to Stop It)", e: "Seasonal hair fall — explained by a dermatologist.", img: doctorImg, d: "Mar 19, 2026" },
];

const CATEGORIES = ["All", "Skin Care", "Hair Care", "Aesthetics", "Education"];

function BlogPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = POSTS.filter((p) =>
    (cat === "All" || p.c === cat) && p.t.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <section className="pt-32 pb-12 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Blog</span>
            <h1 className="font-display mt-3 text-4xl md:text-6xl">Skin & hair care, simplified</h1>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">Evidence-based articles, tips and education from our dermatology team.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-sm transition-smooth ${
                    cat === c ? "gradient-hero text-primary-foreground shadow-soft" : "bg-card border border-border hover:bg-muted"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.06}>
                <article className="group h-full rounded-3xl bg-card border border-border/60 overflow-hidden hover-lift">
                  <div className="aspect-[5/3] overflow-hidden">
                    <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{p.c}</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.d}</span>
                    </div>
                    <h3 className="font-display text-xl mt-4 leading-snug">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.e}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No articles match your search.</p>
          )}
        </div>
      </section>
    </div>
  );
}
