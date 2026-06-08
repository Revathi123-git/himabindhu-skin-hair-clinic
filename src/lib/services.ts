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

import nailSurgeryImg from "@/assets/nail.png";
import skinBiopsyImg from "@/assets/biopsy.png";
import earLobeRepairImg from "@/assets/ear.png";
import sebaceousCystImg from "@/assets/ear2.png";
import lipomaImg from "@/assets/lipoma.png";
import earPiercingImg from "@/assets/ear3.png";
import skinBooster from "@/assets/booster.png";
import rejuvinationImg from "@/assets/glow.png";
import antiAgingImg from "@/assets/anti-aging.png";
import hairfall from "@/assets/hairfall.png"
import prp from "@/assets/prp.png"
import laser from "@/assets/laser.png"
import surgicalScarImg from "@/assets/surgical.png"
import pigm from "@/assets/pigm.png"
import chemical from "@/assets/chemical.png"
import botox from "@/assets/botox.png"
import hydra from "@/assets/hydra.png"
import hair from "@/assets/hair.png"
import hifu1 from "@/assets/hifu1.png"
import filers from "@/assets/fillers.png"
import skinDiseases from "@/assets/skin.png"
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
  slug: "sebaceous-cyst-removal",
  title: "Sebaceous Cyst Removal",
  icon: Shield,
  image: sebaceousCystImg,
  category: "Featured Surgery",
  featured: true,
  highlightStyle: "surgery",
  short:
    "Safe and effective removal of sebaceous cysts with minimal scarring.",
  benefits: [
    "Quick outpatient procedure",
    "Minimal discomfort",
    "Reduced risk of recurrence",
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
   short: "Our Skin Booster range includes Profhilo, Skinvive, Polynucleotide Therapy, and Hyaluronic Acid-based injectables that improve hydration, skin texture, elasticity, fine lines, and overall radiance.",
    benefits: ["Deep hydration", "Glass skin glow", "Improved skin texture"],
  },


{
  slug: "botox",
  title: "Botox",
  icon: Syringe,
  image: botox,
  category: "Aesthetic Treatment",
  featured: true,
  highlightStyle: "aesthetic",
  short: "Reduce fine lines and wrinkles with expert Botox treatments.",
  benefits: [
    "Wrinkle reduction",
    "Smoother skin",
    "Youthful appearance"
  ],
},

{
  slug: "dermal-fillers",
  title: "Dermal Fillers",
  icon: Syringe,
  image: filers,
  category: "Aesthetic Treatment",
  featured: true,
  highlightStyle: "aesthetic",
  short: "Enhance facial contours and restore lost volume with advanced dermal fillers.",
  benefits: [
    "Volume restoration",
    "Facial contouring",
    "Natural-looking enhancement"
  ],
},
{
  slug: "hifu",
  title: "HIFU",
  icon: Sparkles,
  image: hifu1,
  category: "Aesthetic Treatment",
  featured: true,
  highlightStyle: "aesthetic",
  short: "Non-surgical skin tightening and lifting treatment using advanced ultrasound technology.",
  benefits: [
    "Skin tightening",
    "Facial lifting",
    "Collagen stimulation"
  ],
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

 

   {
  slug: "scar-reduction",
  title: "Scar Reduction",
  icon: Wand2,
  image: surgicalScarImg,
  category: "Skin Treatment",
  featured: false,
  highlightStyle: "default",
  short:
    "Advanced scar reduction treatments for acne scars, accidental scars, surgical scars, and stretch marks to improve skin texture and appearance.",
  benefits: [
    "Reduced accidental scar visibility",
    "Improved appearance of surgical scars",
    "Minimized stretch marks",
  ],
},
{
  slug: "hydra-facial",
  title: "Hydra Facial",
  icon: Sparkles,
  image: hydra,
  category: "Skin Treatment",
  featured: false,
  highlightStyle: "default",
  short:
    "Deep cleansing, exfoliation, hydration, and skin rejuvenation treatment for a healthy, radiant glow.",
  benefits: [
    "Deep skin cleansing",
    "Intense hydration",
    "Instant glow and rejuvenation",
  ],
},
  {
    slug: "pigmentation",
    title: "Pigmentation Treatment",
    icon: Sun,
    image: pigm,
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
    image: hairfall,
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
    image: prp,
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
    image: laser,
    category: "Laser Treatment",
    featured: false,
    highlightStyle: "default",
    short: "FDA-approved diode laser for permanent hair reduction.",
    benefits: ["Smooth skin", "Painless sessions", "Suitable for all skin tones"],
  },



  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    icon: Layers,
    image: chemical,
    category: "Skin Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Medical-grade peels for texture, tone, and skin clarity.",
    benefits: ["Smoother texture", "Brighter tone", "Minimal downtime"],
  },

  {
    slug: "hair-regrowth",
    title: "Hair Regrowth Therapy",
    icon: Scissors,
    image: hair,
    category: "Hair Treatment",
    featured: false,
    highlightStyle: "default",
    short: "Mesotherapy, GFC, and advanced combination regrowth therapies.",
    benefits: ["Thicker hair", "Reduced hair fall", "Improved scalp health"],
  },
  {
  slug: "skin-diseases",
  title: "Skin Diseases",
  icon: Stethoscope,
  image: skinDiseases,
  category: "Skin Treatment",
  featured: false,
  highlightStyle: "default",
  short:
    "Expert care for acne, acne scars, eczema, psoriasis, fungal infections, vitiligo, melasma, rosacea, urticaria, warts, and other skin disorders.",
  benefits: [
    "Accurate diagnosis of skin conditions",
    "Personalized treatment for acute and chronic diseases",
    "Improved skin health and quality of life",
  ],
},
];

export type Service = ServiceItem;