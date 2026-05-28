import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
type BlogSection = {
  heading: string;
  text: string;
};

type Blog = {
  title: string;
  type: "skin" | "hair";
  content: BlogSection[];
};

const blogs: Record<string, Blog> = {
   "1": {
    title: "Dermatologist Guide: Complete Skincare Routine",
    type: "skin",
    content: [
      {
        heading: "☀️ Morning Routine: Protect & Prevent",
        text:
          "The morning routine focuses on protecting skin from UV rays, pollution, and environmental damage. It helps prevent premature aging and pigmentation.",
      },
      {
        heading: "🧴 Step 1: Gentle Cleansing",
        text:
          "Use a mild, non-soap cleanser with lukewarm water to remove overnight oil buildup without damaging the skin barrier.",
      },
      {
        heading: "🍊 Step 2: Antioxidant Serum (Optional)",
        text:
          "Apply Vitamin C serum to neutralize free radicals, brighten skin, and reduce pigmentation over time.",
      },
      {
        heading: "💧 Step 3: Lightweight Moisturizer",
        text:
          "Use a gel-based or non-comedogenic moisturizer with hyaluronic acid or glycerin to maintain hydration.",
      },
      {
        heading: "☀️ Step 4: Sunscreen (Most Important)",
        text:
          "Apply SPF 30+ sunscreen daily, even indoors. It is the most critical step to prevent skin cancer and aging.",
      },
      {
        heading: "🌙 Night Routine: Repair & Renew",
        text:
          "Night skincare focuses on repairing skin damage, boosting cell turnover, and restoring hydration.",
      },
      {
        heading: "🧼 Step 1: Deep Cleansing",
        text:
          "Remove sunscreen, dirt, and makeup using double cleansing (oil cleanser + water-based cleanser if needed).",
      },
      {
        heading: "🧪 Step 2: Active Treatments",
        text:
          "Use retinol or exfoliating acids (AHA/BHA) 2–3 times per week to improve acne, texture, and fine lines.",
      },
      {
        heading: "🧴 Step 3: Barrier Repair Moisturizer",
        text:
          "Use ceramide or niacinamide-based moisturizer to repair and strengthen the skin barrier overnight.",
      },
      {
        heading: "⚠️ Dermatologist Golden Rules",
        text:
          "Always apply products from thin to thick consistency. Avoid mixing retinol and exfoliating acids in the same routine. Never use DIY hacks like lemon or baking soda on skin.",
      },
    ],
  },

  "2": {
    title: "Advanced Hair Care Routine (Dermatologist Guide)",
    type: "hair",
    content: [
      {
        heading: "🧴 Scalp Cleansing (Foundation)",
        text:
          "Shampoo should be applied directly to the scalp, not hair length. This removes oil, dandruff, and product buildup effectively.",
      },
      {
        heading: "🧬 Conditioning & Repair",
        text:
          "Apply conditioner only on mid-length to ends to reduce breakage and improve smoothness without clogging follicles.",
      },
      {
        heading: "💧 Leave-in Moisture Protection",
        text:
          "Use leave-in conditioner or lightweight oils like argan or jojoba on damp hair to lock in moisture.",
      },
      {
        heading: "⚠️ Hair Protection Rules",
        text:
          "Avoid tight hairstyles that cause traction alopecia. Never sleep with wet hair. Always detangle from ends to roots.",
      },
      {
        heading: "🔥 Heat Styling Safety",
        text:
          "Always apply heat protectant spray before styling and keep heat tools at a safe distance to avoid damage.",
      },
      {
        heading: "🌿 Scalp Health Tip",
        text:
          "For hair thinning, dermatologist-approved treatments like Minoxidil or rosemary oil can improve scalp circulation and growth.",
      },
    ],
  },

  "3": {
    title: "Hydra Facial vs Chemical Peel — Which is Right for You?",
    type: "skin",
    content: [
      {
        heading: "💧 Hydra Facial Overview",
        text:
          "Hydra Facial is a non-invasive treatment that deeply cleanses, exfoliates, and hydrates the skin using serum infusion technology.",
      },
      {
        heading: "🧪 Chemical Peel Overview",
        text:
          "Chemical peels use acids like glycolic or salicylic acid to remove dead skin layers and improve pigmentation and acne scars.",
      },
      {
        heading: "⚖️ Key Difference",
        text:
          "Hydra Facial focuses on hydration and glow with zero downtime, while chemical peels focus on skin renewal with mild peeling and recovery time.",
      },
      {
        heading: "👩‍⚕️ Ideal Candidates",
        text:
          "Hydra Facial is best for dry, dull, and sensitive skin. Chemical peels are ideal for acne, pigmentation, and uneven skin texture.",
      },
    ],
  },

  // ---------------------------
  // 4. SKIN CARE BLOG
  // ---------------------------
  "4": {
    title: "Understanding Melasma: Causes & Solutions",
    type: "skin",
    content: [
      {
        heading: "🌞 What is Melasma?",
        text:
          "Melasma is a common skin condition that causes brown or gray-brown patches, usually on the face due to sun exposure and hormonal changes.",
      },
      {
        heading: "⚠️ Main Causes",
        text:
          "Sun exposure, hormonal changes (pregnancy or birth control), and genetic predisposition are major triggers of melasma.",
      },
      {
        heading: "🧴 Treatment Options",
        text:
          "Treatment includes sunscreen, topical creams like hydroquinone, retinoids, and dermatologist-guided chemical peels or laser therapy.",
      },
      {
        heading: "🛡️ Prevention",
        text:
          "Daily sunscreen use and avoiding direct sun exposure are essential to prevent worsening of pigmentation.",
      },
    ],
  },

  // ---------------------------
  // 5. EDUCATION BLOG
  // ---------------------------
  "5": {
    title: "Sunscreen 101: Picking the Right SPF",
    type: "skin",
    content: [
      {
        heading: "☀️ Why Sunscreen is Important",
        text:
          "Sunscreen protects your skin from harmful UVA and UVB rays that cause aging, pigmentation, and skin cancer.",
      },
      {
        heading: "🔢 What SPF Means",
        text:
          "SPF 30 blocks about 97% of UVB rays, while SPF 50 blocks about 98%. Higher SPF means slightly more protection, not double.",
      },
      {
        heading: "🧴 How to Apply Properly",
        text:
          "Apply sunscreen 15–20 minutes before sun exposure and reapply every 2–3 hours for maximum protection.",
      },
      {
        heading: "🇮🇳 Best for Indian Skin",
        text:
          "Gel-based, non-comedogenic SPF 30–50 sunscreen works best for oily and humid climates.",
      },
    ],
  },
  // ---------------------------
  // 6. HAIR CARE BLOG
  // ---------------------------
  "6": {
    title: "Why Hair Falls in Monsoon (and How to Stop It)",
    type: "hair",
    content: [
      {
        heading: "🌧️ Why Monsoon Causes Hair Fall",
        text:
          "Humidity increases scalp infections and weakens hair roots, leading to excessive shedding during monsoon season.",
      },
      {
        heading: "🧴 Scalp Hygiene is Key",
        text:
          "Wash your scalp regularly with mild shampoo to remove sweat, oil, and fungal buildup.",
      },
      {
        heading: "💊 Nutrition Support",
        text:
          "Protein, iron, and biotin-rich diet helps strengthen hair follicles and reduce seasonal shedding.",
      },
      {
        heading: "⚠️ What to Avoid",
        text:
          "Avoid keeping wet hair tied, heavy oiling in humid weather, and excessive heat styling.",
      },
    ],
  },
};

export const Route = createFileRoute("/blog/$id")({
  component: BlogDetail,
});

function BlogDetail() {
  const { id } = Route.useParams();

  const blog = blogs[id as keyof typeof blogs];

  if (!blog) {
    return (
      <div className="p-10 text-center text-red-500 text-lg">
        Blog not found ❌
      </div>
    );
  }

  return (
     <div className="min-h-screen bg-gradient-to-br from-[#e6fffb] via-white to-[#fff7ed]">

    {/* Background glow elements */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-[#008172] opacity-10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#f5c26b] opacity-10 blur-3xl rounded-full"></div>

    {/* Container */}
    <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-16">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {blog.title}
      </h1>

      {/* Category badge */}
      <span
        className={`inline-block mt-4 px-4 py-1 text-sm rounded-full font-medium shadow-sm
        ${
          blog.type === "skin"
            ? "bg-[#008172]/10 text-[#008172] border border-[#008172]/20"
            : "bg-[#f5c26b]/20 text-[#b7791f] border border-[#f5c26b]/30"
        }`}
      >
        {blog.type.toUpperCase()} CARE
      </span>

      {/* Divider */}
      <div className="w-20 h-1 bg-[#008172] rounded-full mt-6 mb-10"></div>

      {/* Content */}
      <div className="space-y-6">
        {blog.content.map((section: BlogSection, index: number) => (
          <div
            key={index}
            className="group bg-white/70 backdrop-blur-md border border-white
            rounded-2xl p-6 shadow-sm hover:shadow-xl
            transition-all duration-300 hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#008172] transition">
              {section.heading}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {section.text}
            </p>
          </div>
        ))}
      </div>

      {/* Back button (IMPORTANT UX) */}
      <div className="mt-12">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-full bg-[#008172] text-white
          shadow-lg hover:shadow-xl hover:scale-105
          transition-all duration-300"
        >
          ← Back to Blogs
        </button>
      </div>

    </div>
  </div>
  );
}