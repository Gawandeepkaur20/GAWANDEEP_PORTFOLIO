import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { researchWork } from "@/data/portfolio";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";

export function ResearchSection() {
  return (
    <Section
      id="research"
      eyebrow="Research Work"
      title="Academic research in neural-network communication systems."
      description="Research experience from Punjabi University Patiala focused on reviewing technical literature."
      className="bg-surface/25"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 lg:grid-cols-2"
      >
        {researchWork.map((item) => (
          <motion.div key={`${item.title}-${item.duration}`} variants={fadeUp} whileHover={hoverLift}>
            <Card elevated className="h-full">
              <BrainCircuit className="h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {item.duration}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge>{item.type}</Badge>
                <Badge>Supervisor: {item.supervisor}</Badge>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
