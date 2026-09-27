import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { currentStack } from "@/data/portfolio";
import { fadeUp } from "@/animations/motion";

export function ResumeSection() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="A concise resume snapshot."
      description="Download the current resume PDF or scan the core technologies and profile focus."
    >
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <Card elevated className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-border/70 bg-background/45 p-6">
            <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-5 font-display text-2xl font-semibold">Gawandeep Kaur</h3>
            <p className="mt-2 text-muted-foreground">AI & Full Stack Developer</p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Computer Science undergraduate with experience in AI and full-stack development through internships and hands-on projects.
            </p>
           
             <a
              href="/GAWANDEEPKAUR_CV.pdf"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background/45 px-4 text-sm font-semibold transition hover:bg-muted"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
          </a>
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
                ["CGPA", "8.72/10 up to 6th semester"],
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
