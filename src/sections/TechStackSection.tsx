import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/portfolio";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";
import { iconMap } from "@/utils/iconMap";

const descriptions: Record<string, string> = {
  Frontend: "Interfaces, animation systems, reusable components, and accessible user flows.",
  Backend: "APIs, orchestration, service boundaries, and data movement between product surfaces.",
  AI: "Prompted workflows, automation, reflective interfaces, and practical intelligent features.",
  Cloud: "Deployment thinking, Firebase-backed features, and Google Cloud learning paths.",
  Databases: "Data modeling for product workflows, dashboards, and persistent user state.",
  Languages: "Implementation languages used for web apps, prototypes, and technical coursework.",
  Tools: "Developer experience, iteration speed, version control, and build tooling.",
  "Soft Skills": "Leadership, communication, problem framing, and collaborative execution.",
};

const categories = Object.keys(descriptions);

export function TechStackSection() {
  return (
    <Section
      id="tech-stack"
      eyebrow="Tech Stack Visualization"
      title="A categorized map of the tools behind the portfolio."
      description="Hoverable groups reveal how each technology category contributes to Gawandeep's engineering workflow."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 lg:grid-cols-4"
      >
        {categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category);

          return (
            <motion.div key={category} variants={fadeUp} whileHover={hoverLift}>
              <Card className="group h-full overflow-hidden">
                <h3 className="font-display text-lg font-semibold">{category}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground opacity-80 transition group-hover:opacity-100">
                  {descriptions[category]}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {categorySkills.map((skill) => {
                    const Icon = iconMap[skill.icon];
                    return (
                      <Badge key={skill.name} className="gap-1.5">
                        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                        {skill.name}
                      </Badge>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
