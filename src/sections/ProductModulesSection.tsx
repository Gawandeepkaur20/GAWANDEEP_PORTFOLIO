import { Bot, BarChart3, Github, Mail, Search, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";

const modules = [
  { title: "AI Assistant", description: "Ask portfolio-aware questions backed by a local knowledge base.", href: "/assistant", icon: Bot },
  { title: "GitHub Dashboard", description: "Live profile, repositories, languages, stars, forks, and search.", href: "/github", icon: Github },
  { title: "Contact System", description: "Validated EmailJS-ready contact flow with spam and rate protection.", href: "/contact", icon: Mail },
  { title: "Resume Viewer", description: "Preview, zoom, print, fullscreen, and download resume controls.", href: "/resume", icon: FileText },
  { title: "Analytics", description: "Animated portfolio metrics with analytics integration points.", href: "/analytics", icon: BarChart3 },
  { title: "Global Search", description: "Press Ctrl+K to search projects, skills, sections, and achievements.", href: "#projects", icon: Search },
];

export function ProductModulesSection() {
  return (
    <Section
      id="product-modules"
      eyebrow="Product Modules"
      title="The portfolio now behaves like a polished web application."
      description="These modules demonstrate AI retrieval, API integration, contact workflows, analytics, search, and rich visitor controls."
      className="bg-surface/25"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {modules.map((module) => (
          <motion.div key={module.title} variants={fadeUp} whileHover={hoverLift}>
            <Link to={module.href} className="block h-full">
              <Card className="group h-full">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/12 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <module.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{module.description}</p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
