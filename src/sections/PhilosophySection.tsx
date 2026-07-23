import { motion } from "framer-motion";
import { Accessibility, Code2, Gauge, Puzzle, Scaling, Sparkles, Wrench } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";

const principles = [
  { title: "Performance", description: "Design fast paths first, lazy-load heavy work, and keep interaction feedback immediate.", icon: Gauge },
  { title: "Scalability", description: "Create clear boundaries so features can grow without turning every change into a rewrite.", icon: Scaling },
  { title: "Accessibility", description: "Treat keyboard navigation, semantic HTML, contrast, and reduced motion as product quality.", icon: Accessibility },
  { title: "Maintainability", description: "Prefer readable modules, typed data, and reusable primitives over clever one-off code.", icon: Wrench },
  { title: "Clean Code", description: "Name concepts carefully and keep implementation details close to their domain.", icon: Code2 },
  { title: "Problem Solving", description: "Start from the real user problem, then choose technology that earns its place.", icon: Puzzle },
  { title: "Developer Experience", description: "Good systems help future contributors move confidently through the codebase.", icon: Sparkles },
];

export function PhilosophySection() {
  return (
    <Section
      id="philosophy"
      eyebrow="Engineering Philosophy"
      title="Principles that make software feel reliable."
      description="The best product engineering work is quiet: it loads quickly, behaves predictably, and stays understandable as it evolves."
      className="bg-surface/25"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {principles.map((principle) => {
          const Icon = principle.icon;

          return (
            <motion.div key={principle.title} variants={fadeUp} whileHover={hoverLift}>
              <Card className="h-full">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-md bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{principle.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
