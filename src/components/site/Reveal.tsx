import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, description, center = true }: {
  eyebrow?: string; title: string; description?: string; center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}
