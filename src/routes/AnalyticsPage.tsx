import { BarChart3 } from "lucide-react";
import { PageTransition } from "@/layouts/PageTransition";
import { Seo } from "@/components/Seo";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Card } from "@/components/ui/Card";
import { achievements, additionalProjects, certificates, experiences, projects, researchWork, skills } from "@/data/portfolio";

const metrics = [
  { label: "Featured projects", value: projects.length, description: "Resume-aligned project case studies." },
  { label: "Additional projects", value: additionalProjects.length, description: "Separate experiments and prototypes." },
  { label: "Technologies listed", value: new Set(skills.map((skill) => skill.name)).size, description: "Across resume-aligned skill categories." },
  { label: "Internships", value: experiences.length, description: "Resume-listed internship entries." },
  { label: "Research entries", value: researchWork.length, description: "Academic research records." },
  { label: "Certificates", value: certificates.length, description: "Listed certifications." },
  { label: "Achievements", value: achievements.length, description: "Leadership and achievement entries." },
];

export default function AnalyticsPage() {
  return (
    <PageTransition>
      <Seo title="Analytics" description="Lightweight portfolio analytics dashboard for Gawandeep Kaur." path="/analytics" />
      <section className="min-h-screen pt-32">
        <div className="container">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Analytics</p>
          <h1 className="mt-3 font-display text-4xl font-semibold">A lightweight signal dashboard.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Optional analytics IDs can enable Vercel Analytics or Google Analytics later while this local dashboard keeps portfolio signals visible.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="h-full">
                <BarChart3 className="h-5 w-5 text-primary" />
                <p className="mt-5 font-display text-4xl font-semibold"><AnimatedCounter value={metric.value} /></p>
                <h2 className="mt-3 font-semibold">{metric.label}</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
