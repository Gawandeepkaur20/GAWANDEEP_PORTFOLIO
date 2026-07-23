import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { aboutCards, currentStack } from "@/data/portfolio";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A builder with a product mind and an engineer's discipline."
      description="Gawandeep's work sits at the intersection of AI, full stack systems, and human-centered interfaces."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {aboutCards.map((card) => (
          <motion.div key={card.title} variants={fadeUp} whileHover={hoverLift}>
            <Card className="h-full">
              <h3 className="font-display text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.body}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-6 rounded-lg border border-border/75 bg-surface/60 p-5 backdrop-blur-xl"
      >
        <h3 className="font-display text-lg font-semibold">Current Tech Stack</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {currentStack.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/45 px-3 py-1.5 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
