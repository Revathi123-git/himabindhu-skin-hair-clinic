import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import doctorImg from "@/assets/doctor.png";
import clinicImg from "@/assets/clinic.jpg";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Clinic, Equipment & Results" },
      { name: "description", content: "Take a tour of Dr Himabindu's Clinic — modern interiors, advanced equipment and real patient results." },
    ],
  }),
  component: GalleryPage,
});

const IMAGES = [
  { src: clinicImg, alt: "Treatment room", h: "tall" },
  { src: heroImg, alt: "Skin care results", h: "short" },
  { src: doctorImg, alt: "Consultation", h: "short" },
  { src: clinicImg, alt: "Laser equipment", h: "tall" },
  { src: heroImg, alt: "Glowing results", h: "tall" },
  { src: doctorImg, alt: "Doctor at work", h: "short" },
  { src: clinicImg, alt: "Clinic interior", h: "short" },
  { src: heroImg, alt: "Hydra facial result", h: "tall" },
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      <section className="pt-32 pb-12 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Gallery</span>
            <h1 className="font-display mt-3 text-4xl md:text-6xl">A glimpse inside our world</h1>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">Modern interiors, advanced equipment, and beautiful patient results.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal><SectionHeading eyebrow="Visual Journey" title="Clinic, equipment & results" /></Reveal>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setOpen(img.src)}
                className={`block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-smooth ${
                  img.h === "tall" ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[60] bg-foreground/90 backdrop-blur flex items-center justify-center p-4 animate-fade-in">
          <button className="absolute top-6 right-6 text-background"><X className="w-7 h-7" /></button>
          <img src={open} alt="" className="max-h-[90vh] max-w-full rounded-2xl shadow-elegant" />
        </div>
      )}
    </div>
  );
}
