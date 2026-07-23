import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { fadeUp } from "@/animations/motion";

const coursework = ["Data Structures", "Database Systems", "Operating Systems", "Computer Networks", "Software Engineering", "AI Fundamentals"];
const interests = ["Applied AI", "Full Stack Architecture", "Automation", "Cloud Systems", "Developer Tools"];

export function EducationSection() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Computer science foundation with an applied product lens."
      description="Academic work supports Gawandeep's focus on intelligent software, reliable systems, and strong implementation fundamentals."
      className="bg-surface/25"
    >
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <Card elevated className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-lg bg-primary/12 text-primary">
              <GraduationCap className="h-7 w-7" aria-hidden="true" />
            </div>
            <h3 className="font-display text-2xl font-semibold">Punjabi University Patiala</h3>
            <p className="mt-2 text-muted-foreground">B.Tech Computer Science Engineering</p>
            <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Expected Graduation: 2027
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">Relevant Coursework</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {coursework.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Academic Interests</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <Badge key={item} className="bg-primary/10 text-primary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
