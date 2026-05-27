import { createFileRoute } from "@tanstack/react-router";
import { Star, Play } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { useEffect } from "react";
const testimonials = [
  { id: 1, video: "/videos/video1.mp4" },
  { id: 2, video: "/videos/video2.mp4" },
  { id: 3, video: "/videos/video3.mp4" },
];
declare global {
  interface Window {
    __ELFSIGHT__?: {
      refresh: () => void;
    };
  }
}

export const Route = createFileRoute("/testimonials")({
head: () => ({
  title: "Testimonials | Real Patient Reviews",
  meta: [
    {
      name: "description",
      content:
        "Read patient stories and reviews about Dr Himabindu's Skin, Hair & Aesthetics Clinic.",
    },
  ],
}),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  // ✅ SAFE ELFSIGHT LOAD (no crash + SPA safe)
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        window.__ELFSIGHT__?.refresh?.();
      } catch (err) {
        console.log("Elfsight not ready yet");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
   <section className="pt-32 pb-12 gradient-soft relative overflow-hidden">
  <div className="absolute inset-0 gradient-radial" />

  <div className="container mx-auto px-4 lg:px-8 relative text-center">
    <Reveal>
      <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
        Patient Stories
      </span>

      <h1 className="font-display mt-3 text-4xl md:text-6xl">
        Loved by 10,000+ patients
      </h1>

      {/* ⭐ STAR RATING */}
      <div className="mt-6 inline-flex items-center gap-2">
        <div className="flex text-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <span className="text-muted-foreground">
          Google Reviews
        </span>
      </div>

      {/* ⭐ GOOGLE REVIEWS WIDGET (MOVED HERE) */}
     <div className="mt-10 flex justify-center">
  <div className="relative w-full max-w-5xl">
    
    {/* glow background */}
    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-3xl opacity-50" />

    {/* glass container */}
    <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-elegant">
      <div
        className="elfsight-app-3837175f-cdec-4eda-848f-717925583f9a w-full"
        data-elfsight-app-lazy
      />
    </div>
  </div>
</div>
    </Reveal>
  </div>
</section>
    
      {/* VIDEO TESTIMONIALS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Video Stories"
              title="Hear it from our patients"
            />
          </Reveal>
<div className="grid md:grid-cols-3 gap-6">
  {testimonials.map((item, i) => (
    <div
      key={item.id}
      className="aspect-[9/16] rounded-3xl relative overflow-hidden group cursor-pointer hover-lift bg-black"
    >
      {/* VIDEO */}
      <video
        className="w-full h-full object-cover"
        preload="metadata"
        controls
      >
        <source src={item.video} type="video/mp4" />
      </video>

      {/* DARK OVERLAY (like your old design) */}
<div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-smooth pointer-events-none" />
      {/* PLAY ICON OVERLAY (optional UI feel) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <Play className="w-6 h-6 text-foreground ml-1" />
        </div>
      </div>

      {/* TEXT LABEL */}
      <span className="absolute bottom-4 left-4 text-primary-foreground text-sm z-10">
        Patient Story #{i + 1}
      </span>
    </div>
  ))}
</div>
        </div>
      </section>
    </div>
  );
}