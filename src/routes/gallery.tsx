import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import doctorImg from "@/assets/doctor.png";
import clinicImg from "@/assets/clinic2.png";
import clinicImg3 from "@/assets/clinic3.png";
import clinicImg4 from "@/assets/clinic4.png";
import clinicImg5 from "@/assets/clinic5.png";
import clinicImg6 from "@/assets/clinic6.png";
import clinicImg7 from "@/assets/clinic7.png";
import clinicImg8 from "@/assets/clinic8.png";
import clinicImg9 from "@/assets/clinic9.png";


/*
TEMPORARY:
If these images don't exist yet,
reuse existing images until you add real ones.
*/

import equipmentImg from "@/assets/equi1.png";
import equipmentImg2 from "@/assets/equi2.png";
import equipmentImg3 from "@/assets/equi3.png";
import equipmentImg4 from "@/assets/equi4.png";


import certificate1 from "@/assets/certificate1.png";
import certificate2 from "@/assets/certificate2.png";
import certificate3 from "@/assets/certificate3.png";
import certificate4 from "@/assets/certificate4.png";
import certificate5 from "@/assets/certificate5.png";
import certificate6 from "@/assets/certificate6.png";
import certificate7 from "@/assets/certificate7.png";
import certificate8 from "@/assets/certificate8.png";
import doctor2 from "@/assets/doctor2.png";
import doctor3 from "@/assets/doctor3.png";
import doctor4 from "@/assets/doctor4.jpg";

import hifu from "@/assets/hifu.png";


import staffImg from "@/assets/hero.jpg";

import { Reveal, SectionHeading } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Gallery | Clinic, Equipment & Achievements",
      },
      {
        name: "description",
        content:
          "Explore our clinic interiors, advanced dermatology equipment, certifications and medical team.",
      },
    ],
  }),

  component: GalleryPage,
});

const GALLERY_SECTIONS = [
  {
    title: "Clinic Infrastructure",
    description:
      "Explore our modern, clean and patient-friendly clinic environment.",

    images: [
      {
        src: clinicImg,
        alt: "Reception Area",
        h: "tall",
      },

      {
        src: clinicImg3,
        alt: "Waiting Lounge",
        h: "short",
      },

      {
        src: clinicImg4,
        alt: "Consultation Room",
        h: "short",
      },
      {
        src: clinicImg5,
        alt: "Consultation Room",
        h: "short",
      },

      {
        src: clinicImg6,
        alt: "Treatment Room",
        h: "tall",
      },
      {
        src: clinicImg7,
        alt: "Consultation Room",
        h: "short",
      },
      
      {
        src: clinicImg8,
        alt: "Consultation Room",
        h: "short",
      },
        {
        src: clinicImg9,
        alt: "Consultation Room",
        h: "tall",
      },
    ],
  },

  {
    title: "Advanced Equipment",
    description:
      "Modern dermatology equipment and advanced treatment technology.",

    images: [
      {
        src: equipmentImg,
        alt: "Laser Equipment",
        h: "tall",
      },

      {
        src: equipmentImg2,
        alt: "Skin Analysis Device",
        h: "tall",
      },

      {
        src: equipmentImg3,
        alt: "Hydra Facial Machine",
        h: "tall",
      },

      {
        src: equipmentImg4,
        alt: "Hair Treatment Equipment",
        h: "tall",
      },
      
      {
        src: clinicImg9,
        alt: "Hair Treatment Equipment",
        h: "tall",
      },
       {
        src:  hifu,
        alt: "skinb Treatment Equipment",
        h: "tall",
      },
        

    ],
  },

  {
    title: "Certificates & Awards",
    description:
      "Professional certifications, achievements and recognitions.",

    images: [
      {
        src: certificate1,
        alt: "Medical Certificate",
        h: "short",
      },
       
       {
        src: certificate3,
        alt: "Medical Certificate",
        h: "short",
      },
       {
        src: certificate4,
        alt: "Medical Certificate",
        h: "short",
      },
      {
        src: certificate5,
        alt: "Medical Certificate",
        h: "short",
      },
      {
        src: certificate6,
        alt: "Medical Certificate",
        h: "short",
      },
       {
        src: certificate7,
        alt: "Medical Certificate",
        h: "short",
      },
 {
        src: certificate8,
        alt: "Medical Certificate",
        h: "short",
      },
     
    ],
  },

  {
    title: "Doctor & Staff",
    description:
      "Meet our experienced doctor and dedicated clinic team.",

    images: [
      {
        src: certificate2,
        alt: "Clinic Staff",
        h: "short",
      },

      {
        src: doctor2,
        alt: "Doctor Consultation",
        h: "tall",
      },

      {
        src: doctor3,
        alt: "Team Collaboration",
        h: "tall",
      },

      {
        src: doctor4,
        alt: "Professional Consultation",
        h: "tall",
      },
    ],
  },
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      {/* HERO SECTION */}

      <section className="pt-32 pb-14 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
              Gallery
            </span>

            <h1 className="font-display mt-4 text-4xl md:text-6xl">
              A glimpse inside our clinic
            </h1>

            <p className="mt-5 text-muted-foreground max-w-3xl mx-auto text-lg">
              Explore our clinic interiors, advanced equipment,
              certifications, achievements and dedicated medical team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY SECTION */}

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Visual Journey"
              title="Clinic, equipment & achievements"
            />
          </Reveal>

          <div className="space-y-20">
            {GALLERY_SECTIONS.map((section, index) => (
              <div key={index}>
                <Reveal>
                  <div className="mb-10 text-center">
  <h2 className="text-3xl font-display">
                      {section.title}
                    </h2>

                   <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-center">
                      {section.description}
                    </p>
                  </div>
                </Reveal>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                  {section.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setOpen(img.src)}
                      className={`block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 ${
                        img.h === "tall"
                          ? "aspect-[3/4]"
                          : "aspect-square"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={open}
            alt="Gallery Preview"
            className="max-h-[90vh] max-w-full rounded-3xl shadow-elegant"
          />
        </div>
      )}
    </div>
  );
}