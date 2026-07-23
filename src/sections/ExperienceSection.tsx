import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { experiences } from "@/data/portfolio";
import { fadeUp } from "@/animations/motion";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Leadership and applied AI experience with a builder's bias."
      description="An interactive vertical timeline focused on responsibilities, outcomes, and the technology behind the work."
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" aria-hidden="true" />
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.organization}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative grid gap-4 pl-12 md:grid-cols-2 md:pl-0"
            >
              <div className="absolute left-2.5 top-6 h-3.5 w-3.5 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" />
              <div className={index % 2 === 0 ? "md:pr-10" : "md:col-start-2 md:pl-10"}>
                <Card elevated className="h-full">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {item.duration}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-7 text-muted-foreground">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
