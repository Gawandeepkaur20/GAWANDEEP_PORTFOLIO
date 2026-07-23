import { useEffect,useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { fadeUp, hoverLift } from "@/animations/motion";
import { projects } from "@/data/portfolio";
import type { Project, ProjectCategory } from "@/types/portfolio";

const filters: Array<ProjectCategory | "All"> = ["All", "AI", "MERN", "Flutter", "Python", "Web", "Mobile", "Full Stack"];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {

  const [selectedIndex, setSelectedIndex] = useState(0);
const [lightboxOpen, setLightboxOpen] = useState(false);

useEffect(() => {
  setSelectedIndex(0);
}, [project]);
const currentImage = project.image[selectedIndex];
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!lightboxOpen) return;

    if (e.key === "Escape") {
      setLightboxOpen(false);
    }

    if (e.key === "ArrowRight") {
      setSelectedIndex((prev) => (prev + 1) % project.image.length);
    }

    if (e.key === "ArrowLeft") {
      setSelectedIndex(
        (prev) => (prev - 1 + project.image.length) % project.image.length
      );
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => window.removeEventListener("keydown", handleKeyDown);
}, [lightboxOpen, project.image.length]);
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-background/80 p-4 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <AnimatePresence>
  {lightboxOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
      onClick={() => setLightboxOpen(false)}
    >
      {/* Close */}

      <button
        onClick={() => setLightboxOpen(false)}
        className="absolute top-6 right-6 rounded-full bg-white/10 p-3 hover:bg-white/20"
      >
        <X className="h-6 w-6 text-white" />
      </button>

      {/* Previous */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedIndex((selectedIndex - 1 + project.image.length) % project.image.length);
        }}
        className="absolute left-6 rounded-full bg-white/10 p-4 hover:bg-white/20"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>

      {/* Next */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedIndex((selectedIndex + 1) % project.image.length);
        }}
        className="absolute right-6 rounded-full bg-white/10 p-4 hover:bg-white/20"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      {/* Image */}

      <motion.img
        key={selectedIndex}
        src={currentImage.src}
    alt={currentImage.title}
        initial={{ scale: .9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: .9, opacity: 0 }}
        transition={{ duration: .25 }}
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Counter */}

      <div className="absolute bottom-8 rounded-full bg-white/10 px-5 py-2 text-white">
        {selectedIndex + 1} / {project.image.length}
      </div>
    </motion.div>
  )}
</AnimatePresence>
      <motion.article
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        className="max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-lg border border-border bg-surface p-5 shadow-soft-xl sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Case Study</p>
            <h3 id="project-modal-title" className="mt-2 font-display text-3xl font-semibold">
              {project.title}
            </h3>
          </div>
          <Button aria-label="Close project details" size="icon" variant="ghost" onClick={onClose}>
            <X className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-border/75 bg-background/45 p-5">
            <p className="text-sm leading-7 text-muted-foreground">{project.overview}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Problem", project.problem],
                ["Solution", project.solution],
                ["Architecture", project.architecture],
                ["Timeline", project.timeline],
              ].map(([label, value]) => (
                <div key={label}>
                  <h4 className="font-semibold">{label}</h4>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border/75 bg-background/45 p-5">
           <h4 className="font-semibold">Project Gallery</h4>

<img
 
  src={currentImage.src}
  alt={currentImage.title}

  onClick={() => setLightboxOpen(true)}
  className="mt-4 h-72 w-full cursor-zoom-in rounded-xl border border-border object-cover transition hover:scale-[1.01]"
/>
<div className="mt-4 text-center">
    <h4 className="text-lg font-semibold">
        {currentImage.title}
    </h4>

</div>
<div className="mt-4 grid grid-cols-2 gap-3">
  {project.image.map((image, index) => (
    <button
      key={index}
      onClick={() => setSelectedIndex(index)}
      className={`overflow-hidden rounded-lg border transition duration-300 ${
        selectedIndex === index
          ? "border-primary ring-2 ring-primary"
          : "border-border hover:border-primary/60"
      }`}
    >
      <img
        src={image.src}
        alt={`${project.title} ${index + 1}`}
        className="aspect-[4/3] w-full object-cover"
      />
    </button>
  ))}
</div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <Badge key={metric}>{metric}</Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Key Features", project.keyFeatures],
            ["Challenges", project.challenges],
            ["Lessons Learned", project.lessons],
            ["Future Scope", project.futureScope],
          ].map(([title, items]) => (
            <div key={title as string} className="rounded-lg border border-border/75 bg-background/45 p-4">
              <h4 className="font-semibold">{title as string}</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <LinkButton href={project.githubUrl} target="_blank" rel="noreferrer" variant="outline">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </LinkButton>
            <LinkButton href={project.demoUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </LinkButton>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter = activeFilter === "All" || project.categories.includes(activeFilter);
      const searchable = `${project.title} ${project.overview} ${project.techStack.join(" ")}`.toLowerCase();
      return matchesFilter && searchable.includes(normalized);
    });
  }, [activeFilter, query]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Case studies for AI, full stack, mobile, and product systems."
      description="Each project is shaped as a product story: the problem, architecture, tradeoffs, outcomes, and future direction."
    >
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="relative block">
          <span className="sr-only">Search projects</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-12 w-full rounded-md border border-border bg-surface/70 pl-10 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-ring"
            placeholder="Search projects, stacks, or product areas"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "primary" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid gap-5 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.slug}
              layout
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.98 }}
              whileHover={hoverLift}
            >
              <Card className="group h-full cursor-pointer overflow-hidden p-0" onClick={() => setSelectedProject(project)}>
               <div className="aspect-[16/9] overflow-hidden border-b border-border/70">
  <img
      src={project.image[0].src}
    alt={project.title}
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
/>
</div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <Badge key={category}>{category}</Badge>
                    ))}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.overview}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <Badge key={tech} className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </Section>
  );
}
