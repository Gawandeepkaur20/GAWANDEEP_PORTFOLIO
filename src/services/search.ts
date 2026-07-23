import { achievements, experiences, projects, skills } from "@/data/portfolio";

export type SearchResult = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: "Project" | "Skill" | "Experience" | "Achievement" | "Section";
};

export const searchableItems: SearchResult[] = [
  { id: "about", title: "About", description: "Profile, education, focus, and current stack.", href: "#about", type: "Section" },
  { id: "projects", title: "Projects", description: "Case studies and project filters.", href: "#projects", type: "Section" },
  { id: "assistant", title: "AI Assistant", description: "Ask questions about Gawandeep's portfolio.", href: "/assistant", type: "Section" },
  { id: "github", title: "GitHub Dashboard", description: "Repository and technology analytics.", href: "/github", type: "Section" },
  ...projects.map((project) => ({
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
];

export function searchPortfolio(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return searchableItems.slice(0, 8);

  return searchableItems
    .filter((item) => `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(normalized))
    .slice(0, 12);
}
