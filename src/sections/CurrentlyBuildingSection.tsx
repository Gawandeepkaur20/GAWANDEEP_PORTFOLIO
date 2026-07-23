import { motion } from "framer-motion";
import { Rocket, Target, Wrench, GitPullRequest } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";

const items = [
  {
    title: "Current AI Projects",
    description: "AI planning tools, reflective interfaces, and automation workflows that make complex tasks feel lighter.",
    icon: Rocket,
  },
  {
    title: "Learning Goals",
    description: "Model evaluation, cloud deployment, stronger backend architecture, and better observability habits.",
    icon: Target,
  },
  {
    title: "Future Plans",
    description: "Turn portfolio case studies into deeper technical writeups with demos, metrics, and architecture diagrams.",
    icon: Wrench,
  },
  {
    title: "Open Source Interests",
    description: "Developer tools, documentation improvements, accessible UI primitives, and student-friendly starter kits.",
    icon: GitPullRequest,
  },
];

export function CurrentlyBuildingSection() {
  return (
    <Section
      id="currently-building"
      eyebrow="Currently Building"
      title="A living roadmap for the next layer of craft."
      description="The portfolio is designed to evolve as new projects, experiments, and public work become ready to share."
      className="bg-surface/25"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2"
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div key={item.title} variants={fadeUp} whileHover={hoverLift}>
              <Card className="h-full">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
