import { achievements, additionalProjects, experiences, projects, researchWork, skills } from "@/data/portfolio";

export type SearchResult = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: "Project" | "Skill" | "Experience" | "Achievement" | "Section";
};

export const searchableItems: SearchResult[] = [
  { id: "about", title: "About", description: "Profile, education, focus, and current stack.", href: "#about", type: "Section" },
  { id: "skills", title: "Skills", description: "Frontend, backend, AI, database, mobile, language, tool, and core concept skills.", href: "#skills", type: "Section" },
  { id: "experience", title: "Experience", description: "AI and MERN internship timeline.", href: "#experience", type: "Section" },
  { id: "projects", title: "Projects", description: "Case studies and project filters.", href: "#projects", type: "Section" },
  { id: "research", title: "Research", description: "Academic research at Punjabi University Patiala.", href: "#research", type: "Section" },
  { id: "certifications", title: "Certificates", description: "Cybersecurity, AI, and database certifications.", href: "#certifications", type: "Section" },
  { id: "assistant", title: "AI Assistant", description: "Ask questions about Gawandeep's portfolio.", href: "/assistant", type: "Section" },
  { id: "github", title: "GitHub Dashboard", description: "Repository and technology analytics.", href: "/github", type: "Section" },
  ...[...projects, ...additionalProjects].map((project) => ({
    id: project.slug,
    title: project.title,
    description: project.overview,
    href: "#projects",
    type: "Project" as const,
  })),
  ...skills.map((skill) => ({
    id: `skill-${skill.name}`,
    title: skill.name,
    description: `${skill.category} skill marked as ${skill.level}.`,
    href: "#skills",
    type: "Skill" as const,
  })),
  ...experiences.map((experience) => ({
    id: `${experience.role}-${experience.organization}`,
    title: experience.role,
    description: experience.organization,
    href: "#experience",
    type: "Experience" as const,
  })),
  ...achievements.map((achievement) => ({
    id: achievement.label,
    title: achievement.label,
    description: achievement.description,
    href: "#achievements",
    type: "Achievement" as const,
  })),
  ...researchWork.map((research) => ({
    id: `research-${research.duration}`,
    title: research.title,
    description: research.description,
    href: "#research",
    type: "Section" as const,
  })),
];

export function searchPortfolio(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return searchableItems.slice(0, 8);

  return searchableItems
    .filter((item) => `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(normalized))
    .slice(0, 12);
}
