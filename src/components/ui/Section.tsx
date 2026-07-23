import { type HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/motion";
import { cn } from "@/utils/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Section({ className, eyebrow, title, description, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-24 sm:py-28", className)} {...props}>
      <div className="container">
        {(eyebrow || title || description) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 max-w-3xl"
          >
            {eyebrow && (
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
