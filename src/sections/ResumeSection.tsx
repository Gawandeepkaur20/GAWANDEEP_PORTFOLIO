import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { currentStack } from "@/data/portfolio";
import { fadeUp } from "@/animations/motion";

export function ResumeSection() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="A clean summary of the engineering profile."
      description="The resume area is ready for a final PDF while still giving visitors a fast overview of skills and focus."
    >
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <Card elevated className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-border/70 bg-background/45 p-6">
            <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-5 font-display text-2xl font-semibold">Gawandeep Kaur</h3>
            <p className="mt-2 text-muted-foreground">AI Engineer | Full Stack Developer</p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Building intelligent software that combines applied AI, thoughtful interfaces, and maintainable full stack architecture.
            </p>
            <LinkButton href="/GAWANDEEPKAUR_CV.pdf" className="mt-6">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </LinkButton>
          </div>
          <div>
            <h4 className="font-semibold">Skills Summary</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {currentStack.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Focus", "AI products and full stack systems"],
                ["Education", "B.Tech CSE, Punjabi University Patiala"],
                ["Experience", "AI intern and GDG web lead"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-border/70 bg-background/45 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
