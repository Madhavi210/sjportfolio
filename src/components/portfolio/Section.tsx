import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id, eyebrow, title, action, children,
}: { id: string; eyebrow?: string; title?: string; action?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 md:py-16">
      {(eyebrow || title || action) && (
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
            {title && (
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                <span className="border-l-2 border-primary pl-3">{title}</span>
              </h2>
            )}
          </div>
          {action}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}