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
/* import surgeryImg from "@/assets/surgery.jpg";
import aestheticImg from "@/assets/aesthetic.jpg"; */
import nailSurgeryImg from "@/assets/nail.png";
import skinBiopsyImg from "@/assets/biopsy.png";
import earLobeRepairImg from "@/assets/ear.png";
import  earLobeReattachImg from "@/assets/ear2.png";
import lipomaImg from "@/assets/lipoma.png";
import earPiercingImg from "@/assets/ear3.png";
import skinBooster from "@/assets/booster.png";
import rejuvinationImg from "@/assets/glow.png";
import antiAgingImg from "@/assets/anti-aging.png";
/* =========================
   TYPES
   ========================= */
export const ICONS = {
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
} as const;

export type HighlightStyle = "surgery" | "aesthetic" | "default";

export type ServiceItem = {
  slug: string;
  title: string;
  icon: any;
  image: string;
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
 image: earLobeRepairImg, 
  category: "Featured Surgery",
  featured: true,
  highlightStyle: "surgery",
  short:
    "Expert correction of torn, stretched, or damaged ear lobes with cosmetic precision.",
  benefits: [
    "Restores natural ear shape",
    "Minimal scarring",
    "Quick recovery",
  ],
},

{
  slug: "ear-lobe-reattachment",
  title: "Ear Lobe Reattachment",
  icon: Shield,
  image: earLobeReattachImg,
  category: "Featured Surgery",
  featured: true,
  highlightStyle: "surgery",
  short:
    "Specialized surgical repair for split or detached ear lobes.",
  benefits: [
    "Precise surgical correction",
    "Safe outpatient procedure",
    "Improved appearance",
  ],
},

{
  slug: "lipoma-removal",
  title: "Lipoma Removal Surgery",
  icon: Layers,
  image: lipomaImg,
  category: "Featured Surgery",
  featured: true,
  highlightStyle: "surgery",
  short:
    "Safe and effective removal of fatty lumps with advanced dermatology care.",
  benefits: [
    "Quick procedure",
    "Minimal discomfort",
    "Cosmetic closure techniques",
  ],
},

{
  slug: "nail-surgery",
  title: "Nail Surgery",
  icon: Wand2,
  image: nailSurgeryImg,
  category: "Featured Surgery",
  featured: true,
  highlightStyle: "surgery",
  short:
    "Advanced nail procedures for ingrown nails, infections, and nail deformities.",
  benefits: [
    "Pain relief",
    "Improved nail health",
    "Prevents recurring infection",
  ],
},

{
  slug: "skin-biopsy",
  title: "Skin Biopsy",
  icon: Stethoscope,
  image: skinBiopsyImg,
  category: "Featured Surgery",
  featured: true,
  highlightStyle: "surgery",
  short:
    "Accurate diagnostic skin biopsy procedures performed with expert precision.",
  benefits: [
    "Accurate diagnosis",
    "Quick healing",
    "Expert dermatology care",
  ],
},

{
  slug: "medical-ear-piercing",
  title: "Medical Ear Piercing",
  icon: Star,
  image: earPiercingImg,
  category: "Featured Surgery",
  featured: true,
  highlightStyle: "surgery",
  short:
    "Safe and hygienic dermatologist-supervised ear piercing procedure.",
  benefits: [
    "Sterile technique",
    "Minimal pain",
    "Reduced infection risk",
  ],
},

  // =========================
  // FEATURED SKIN BOOSTERS
  // =========================

  {
    slug: "skin-boosters",
    title: "Skin Boosters",
    icon: Sparkles,
    image: skinBooster,
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
    image: rejuvinationImg,
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
    image: antiAgingImg,
    category: "Featured Aesthetic",
    featured: true,
    highlightStyle: "aesthetic",
    short: "Modern dermatology injectables for youthful and refreshed skin.",
    benefits: ["Wrinkle reduction", "Skin tightening", "Natural-looking enhancement"],
  },

  // =========================
  // SKIN & HAIR TREATMENTS
  // =========================

  /* {
    slug: "acne-treatment",
    title: "Acne Treatment",
    icon: ShieldCheck,
    image: earPiercingImg,
    category: "Skin Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Targeted therapies for active acne, scars, and breakouts.",
    benefits: ["Clear, balanced skin", "Reduced inflammation", "Scar prevention"],
  }, */

  {
    slug: "pigmentation",
    title: "Pigmentation Treatment",
    icon: Sun,
    image: earPiercingImg,
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
    image: earPiercingImg,
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
    image: earPiercingImg,
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
    image: earPiercingImg,
    category: "Laser Treatment",
    featured: false,
    highlightStyle: "default",
    short: "FDA-approved diode laser for permanent hair reduction.",
    benefits: ["Smooth skin", "Painless sessions", "Suitable for all skin tones"],
  },

 /*  {
    slug: "anti-aging",
    title: "Anti-Aging Treatments",
    icon: Flower2,
    image: earPiercingImg,
    category: "Aesthetic Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Advanced therapies to restore youthful skin and elasticity.",
    benefits: ["Firmer skin", "Reduced fine lines", "Radiant glow"],
  }, */

  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    icon: Layers,
    image: earPiercingImg,
    category: "Skin Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Medical-grade peels for texture, tone, and skin clarity.",
    benefits: ["Smoother texture", "Brighter tone", "Minimal downtime"],
  },

 /*  {
    slug: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    icon: Sparkles,
    image: earPiercingImg,
    category: "Aesthetic Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Personalized skin rejuvenation for healthy radiant skin.",
    benefits: ["Healthy radiance", "Even tone", "Refined pores"],
  }, */

  {
    slug: "botox-fillers",
    title: "Botox & Fillers",
    icon: Syringe,
    image: earPiercingImg,
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
    image: earPiercingImg,
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
    image: earPiercingImg,
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
    image: earPiercingImg,
    category: "Hair Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Mesotherapy, GFC, and advanced combination regrowth therapies.",
    benefits: ["Thicker hair", "Reduced hair fall", "Improved scalp health"],
  },
];

export type Service = ServiceItem;