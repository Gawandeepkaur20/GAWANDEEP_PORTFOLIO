import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/portfolio";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";
import { iconMap } from "@/utils/iconMap";

const categories = ["Frontend", "Backend", "AI", "Databases", "Mobile Development", "Languages", "Tools", "Core Concepts"] as const;

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A practical toolkit for intelligent product engineering."
      description="Skills are grouped by how they support shipping reliable, useful software rather than by a flat resume list."
      className="bg-surface/25"
    >
      <div className="space-y-8">
        {categories.map((category) => (
          <motion.div
            key={category}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h3 className="mb-4 font-display text-xl font-semibold">{category}</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => {
                  const Icon = iconMap[skill.icon];

                  return (
                    <motion.div key={skill.name} variants={fadeUp} whileHover={hoverLift}>
                      <Card className="group h-full p-4">
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/12 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                            {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                          </div>
                          <div>
                            <p className="font-semibold">{skill.name}</p>
                            <p className="text-xs text-muted-foreground">{skill.level}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
