import {
  Sparkles,
  Sun,
  Scissors,
  Droplets,
  Zap,
  Flower2,
  Layers,
  Wand2,
  Syringe,
  ShieldCheck,
  Waves,
  HeartPulse,
  Star,
  Stethoscope,
  Shield,
} from "lucide-react";

/* =========================
   TYPES
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
   SERVICES DATA
   ========================= */

export const SERVICES: ServiceItem[] = [
  // =========================
  // FEATURED SURGICAL PROCEDURES
  // =========================

  {
    slug: "ear-lobe-repair",
    title: "Ear Lobe Repair Surgery",
    icon: Scissors,
    category: "Featured Surgery",
    featured: true,
    highlightStyle: "surgery",
    short:
      "Expert correction of torn, stretched, or damaged ear lobes with cosmetic precision.",
    benefits: ["Restores natural ear shape", "Minimal scarring", "Quick recovery"],
  },

  {
    slug: "ear-lobe-reattachment",
    title: "Ear Lobe Reattachment",
    icon: Shield,
    category: "Featured Surgery",
    featured: true,
    highlightStyle: "surgery",
    short: "Specialized surgical repair for split or detached ear lobes.",
    benefits: ["Precise surgical correction", "Safe outpatient procedure", "Improved appearance"],
  },

  {
    slug: "lipoma-removal",
    title: "Lipoma Removal Surgery",
    icon: Layers,
    category: "Featured Surgery",
    featured: true,
    highlightStyle: "surgery",
    short: "Safe and effective removal of fatty lumps with advanced dermatology care.",
    benefits: ["Quick procedure", "Minimal discomfort", "Cosmetic closure techniques"],
  },

  {
    slug: "nail-surgery",
    title: "Nail Surgery",
    icon: Wand2,
    category: "Featured Surgery",
    featured: true,
    highlightStyle: "surgery",
    short: "Advanced nail procedures for ingrown nails, infections, and nail deformities.",
    benefits: ["Pain relief", "Improved nail health", "Prevents recurring infection"],
  },

  {
    slug: "skin-biopsy",
    title: "Skin Biopsy",
    icon: Stethoscope,
    category: "Featured Surgery",
    featured: true,
    highlightStyle: "surgery",
    short: "Accurate diagnostic skin biopsy procedures performed with expert precision.",
    benefits: ["Accurate diagnosis", "Quick healing", "Expert dermatology care"],
  },

  {
    slug: "medical-ear-piercing",
    title: "Medical Ear Piercing",
    icon: Star,
    category: "Featured Surgery",
    featured: true,
    highlightStyle: "surgery",
    short: "Safe and hygienic dermatologist-supervised ear piercing procedure.",
    benefits: ["Sterile technique", "Minimal pain", "Reduced infection risk"],
  },

  // =========================
  // FEATURED SKIN BOOSTERS
  // =========================

  {
    slug: "skin-boosters",
    title: "Skin Boosters",
    icon: Sparkles,
    category: "Featured Aesthetic",
    featured: true,
    highlightStyle: "aesthetic",
    short: "Advanced injectable hydration treatments for glowing, youthful skin.",
    benefits: ["Deep hydration", "Glass skin glow", "Improved skin texture"],
  },

  {
    slug: "glow-rejuvenation",
    title: "Glow & Rejuvenation Therapy",
    icon: Sun,
    category: "Featured Aesthetic",
    featured: true,
    highlightStyle: "aesthetic",
    short: "Premium skin revitalization therapies for brighter and healthier skin.",
    benefits: ["Instant radiance", "Even skin tone", "Healthy glow"],
  },

  {
    slug: "anti-aging-injectables",
    title: "Anti-Aging Injectables",
    icon: Syringe,
    category: "Featured Aesthetic",
    featured: true,
    highlightStyle: "aesthetic",
    short: "Modern dermatology injectables for youthful and refreshed skin.",
    benefits: ["Wrinkle reduction", "Skin tightening", "Natural-looking enhancement"],
  },

  // =========================
  // SKIN & HAIR TREATMENTS
  // =========================

  {
    slug: "acne-treatment",
    title: "Acne Treatment",
    icon: ShieldCheck,
    category: "Skin Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Targeted therapies for active acne, scars, and breakouts.",
    benefits: ["Clear, balanced skin", "Reduced inflammation", "Scar prevention"],
  },

  {
    slug: "pigmentation",
    title: "Pigmentation Treatment",
    icon: Sun,
    category: "Skin Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Even skin tone with melasma, dark spot & sun damage care.",
    benefits: ["Brighter complexion", "Reduced dark patches", "Long-lasting results"],
  },

  {
    slug: "hair-fall",
    title: "Hair Fall Treatment",
    icon: Scissors,
    category: "Hair Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Root-cause analysis and clinical solutions for hair loss.",
    benefits: ["Reduced shedding", "Stronger follicles", "Visible regrowth"],
  },

  {
    slug: "prp-therapy",
    title: "PRP Therapy",
    icon: Droplets,
    category: "Hair Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Platelet-rich plasma therapy for hair regrowth and skin rejuvenation.",
    benefits: ["Natural healing", "Improved density", "Glowing skin"],
  },

  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    icon: Zap,
    category: "Laser Treatment",
    featured: false,
    highlightStyle: "default",
    short: "FDA-approved diode laser for permanent hair reduction.",
    benefits: ["Smooth skin", "Painless sessions", "Suitable for all skin tones"],
  },

  {
    slug: "anti-aging",
    title: "Anti-Aging Treatments",
    icon: Flower2,
    category: "Aesthetic Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Advanced therapies to restore youthful skin and elasticity.",
    benefits: ["Firmer skin", "Reduced fine lines", "Radiant glow"],
  },

  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    icon: Layers,
    category: "Skin Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Medical-grade peels for texture, tone, and skin clarity.",
    benefits: ["Smoother texture", "Brighter tone", "Minimal downtime"],
  },

  {
    slug: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    icon: Sparkles,
    category: "Aesthetic Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Personalized skin rejuvenation for healthy radiant skin.",
    benefits: ["Healthy radiance", "Even tone", "Refined pores"],
  },

  {
    slug: "botox-fillers",
    title: "Botox & Fillers",
    icon: Syringe,
    category: "Aesthetic Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Natural-looking facial enhancement procedures by experts.",
    benefits: ["Wrinkle reduction", "Volume restoration", "Youthful appearance"],
  },

  {
    slug: "scar-reduction",
    title: "Scar Reduction",
    icon: Wand2,
    category: "Skin Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Advanced microneedling, laser, and subcision treatments for scars.",
    benefits: ["Smoother skin surface", "Improved tone", "Boosted confidence"],
  },

  {
    slug: "hydra-facial",
    title: "Hydra Facial",
    icon: Waves,
    category: "Facial Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Deep cleansing and hydration facial for instant skin glow.",
    benefits: ["Instant glow", "Hydrated skin", "Zero downtime"],
  },

  {
    slug: "hair-regrowth",
    title: "Hair Regrowth Therapy",
    icon: HeartPulse,
    category: "Hair Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Mesotherapy, GFC, and advanced combination regrowth therapies.",
    benefits: ["Thicker hair", "Reduced hair fall", "Improved scalp health"],
  },
];

export type Service = ServiceItem;