import { motion } from "framer-motion";
import { BrainCircuit, Code2, Layers3, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { fadeUp, staggerContainer } from "@/animations/motion";

const pillars = [
  {
    title: "AI Product Thinking",
    description: "Interfaces and workflows designed around model behavior, evaluation, and real user trust.",
    icon: BrainCircuit,
  },
  {
    title: "Full Stack Systems",
    description: "Composable frontend architecture with clean boundaries for future services and data modules.",
    icon: Code2,
  },
  {
    title: "Design Infrastructure",
    description: "Centralized tokens, theme variables, motion presets, and reusable section primitives.",
    icon: Layers3,
  },
  {
    title: "Production Discipline",
    description: "Accessibility, SEO, responsive behavior, and performance are built into the foundation.",
    icon: ShieldCheck,
  },
];

export function FoundationSection() {
  return (
    <Section
      id="foundation"
      eyebrow="Foundation"
      title="A portfolio system built to grow with the work."
      description="This first release establishes the visual language, layout architecture, interaction model, routing, and theme system that future portfolio modules can plug into cleanly."
      className="border-y border-border/70 bg-surface/30"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {pillars.map((pillar) => {
          const Icon = pillar.icon;

          return (
            <motion.div key={pillar.title} variants={fadeUp}>
              <Card className="h-full">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-md bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
