import { motion } from "framer-motion";
import { BookOpen, Coffee, Code2, HeartHandshake, Lightbulb, Rocket } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";

const facts = [
  { label: "Favorite technologies", value: "React, Python, AI tools", icon: Code2 },
  { label: "Coffee count", value: "240+ thoughtful cups", count: 240, suffix: "+", icon: Coffee },
  { label: "Projects completed", value: "12+ builds and prototypes", count: 12, suffix: "+", icon: Rocket },
  { label: "Years coding", value: "3+ years", count: 3, suffix: "+", icon: Lightbulb },
  { label: "Open source goals", value: "Contribute to useful dev tools", icon: HeartHandshake },
  { label: "Books", value: "Product, systems, and learning", icon: BookOpen },
];

export function FunFactsSection() {
  return (
    <Section
      id="fun-facts"
      eyebrow="Fun Facts"
      title="A few human details behind the engineering work."
      description="Small signals of curiosity, consistency, and the learning philosophy that keeps the work moving."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {facts.map((fact) => {
          const Icon = fact.icon;

          return (
            <motion.div key={fact.label} variants={fadeUp} whileHover={hoverLift}>
              <Card className="h-full">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{fact.label}</h3>
                <p className="mt-3 font-display text-2xl font-semibold">
                  {typeof fact.count === "number" ? <AnimatedCounter value={fact.count} suffix={fact.suffix} /> : fact.value}
                </p>
                {typeof fact.count === "number" && <p className="mt-2 text-sm text-muted-foreground">{fact.value}</p>}
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
