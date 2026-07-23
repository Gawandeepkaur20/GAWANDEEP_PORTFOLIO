import { knowledgeBase } from "@/data/knowledgeBase";
import type { Project } from "@/types/portfolio";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
};

export const suggestedQuestions = [
  "Tell me about Gawandeep.",
  "Explain Signal Zero.",
  "Explain Career Pilot AI.",
  "Explain Boutique Management System.",
  "Explain Object Detection & Tracking.",
  "Tell me about the AI Blog Website.",
  "What technologies does she use?",
  "Summarize her internship experience.",
  "Which AI projects has she built?",
  "What leadership experience does she have?"
];

function formatProject(project: Project) {
  return [
    `### ${project.title}`,
    project.overview,
    `**Problem:** ${project.problem}`,
    `**Solution:** ${project.solution}`,
    `**Architecture:** ${project.architecture}`,
    `**Tech:** ${project.techStack.join(", ")}`,
    `**Features:** ${project.keyFeatures.join(", ")}`,
    `**Timeline:** ${project.timeline}`,
  ].join("\n\n");
}

function answerFromLocalKnowledge(question: string) {
  const q = question.toLowerCase();
  
  const project = knowledgeBase.projects.find((item) => {
  const search = [
    item.title,
    item.slug,
    item.overview,
    ...item.techStack,
    ...item.categories,
  ]
    .join(" ")
    .toLowerCase();

  return q.split(" ").some((word) => search.includes(word));
});

  if (project) {
    return formatProject(project);
  }

  if (q.includes("about gawandeep") ||
q.includes("who is gawandeep") ||
q === "gawandeep" ||
q.includes("introduce yourself")) {
    return `${knowledgeBase.profile.summary}\n\n**Education:** ${knowledgeBase.education.degree}, ${knowledgeBase.education.university}.\n\n**Current strengths:** ${knowledgeBase.profile.strengths.join(", ")}.`;
  }



  if (q.includes("technology") || q.includes("stack") || q.includes("skills")) {
    const grouped = knowledgeBase.skills.reduce<Record<string, string[]>>((acc, skill) => {
      acc[skill.category] = [...(acc[skill.category] ?? []), skill.name];
      return acc;
    }, {});
    return Object.entries(grouped)
      .map(([category, items]) => `**${category}:** ${items.join(", ")}`)
      .join("\n\n");
  }

  if (
  q.includes("internship") ||
  q.includes("mirai") ||
  q.includes("dotsquares")
) {
 const internships = knowledgeBase.experience.filter((item) =>
  item.role.toLowerCase().includes("intern")
);

return internships
  .map(
    (item) =>
      `## ${item.role}\n**${item.organization}** (${item.duration})

${item.responsibilities.join("\n")}

**Achievements:** ${item.achievements.join(", ")}`
  )
  .join("\n\n---\n\n");
  }

  if (q.includes("ai project") || (q.includes("which project") && q.includes("ai"))) {
    const aiProjects = knowledgeBase.projects.filter((item) => item.categories.includes("AI"));
    return aiProjects.map(formatProject).join("\n\n---\n\n");
  }
if (
  q.includes("object detection") ||
  q.includes("tracking") ||
  q.includes("computer vision")
) {
  const project = knowledgeBase.projects.find(
    (p) => p.slug === "object-detection-tracking"
  );

  return project
    ? formatProject(project)
    : "Object Detection project not found.";
}
if (
  q.includes("signal zero") ||
  q.includes("visual novel")
) {
  const project = knowledgeBase.projects.find(
    (p) => p.slug === "signal-zero"
  );

  return project
    ? formatProject(project)
    : "Signal Zero project not found.";
}
if (
  q.includes("career pilot") ||
  q.includes("resume")
) {
  const project = knowledgeBase.projects.find(
    (p) => p.slug === "career-pilot-ai"
  );

  return project
    ? formatProject(project)
    : "Career Pilot project not found.";
}
if (
  q.includes("blog") ||
  q.includes("ai blog")
) {
  const project = knowledgeBase.projects.find(
    (p) => p.slug === "ai-blog-website"
  );

  return project
    ? formatProject(project)
    : "Blog Website project not found.";
}
  if (q.includes("flutter")) {
    const flutterProjects = knowledgeBase.projects.filter((item) => item.categories.includes("Flutter") || item.techStack.includes("Flutter"));
    return flutterProjects.length > 0
      ? flutterProjects.map(formatProject).join("\n\n---\n\n")
      : "No Flutter projects are available in the portfolio knowledge base.";
  }

  if (q.includes("leadership") || q.includes("gdg")) {
    const leadership = knowledgeBase.experience.find((item) => item.role.toLowerCase().includes("lead"));
    return leadership
      ? `**${leadership.role}, ${leadership.organization} (${leadership.duration})**\n\n${leadership.responsibilities.join("\n\n")}\n\n**Key achievements:** ${leadership.achievements.join(", ")}.`
      : "Leadership information is not available in the portfolio knowledge base.";
  }

  if (q.includes("strength")) {
    return `Gawandeep's documented strengths are ${knowledgeBase.profile.strengths.join(", ")}. These show up across her AI projects, full stack systems, and GDG leadership work.`;
  }

  if (q.includes("education") || q.includes("university")) {
    return `Gawandeep is pursuing **${knowledgeBase.education.degree}** at **${knowledgeBase.education.university}**. Expected graduation: **${knowledgeBase.education.expectedGraduation}**.`;
  }

  if (q.includes("achievement") || q.includes("certificate")) {
    return [
      `**Achievements:** ${knowledgeBase.achievements.map((item) => item.label).join(", ")}.`,
      `**Certifications:** ${knowledgeBase.certifications.map((item) => `${item.title} (${item.organization})`).join(", ")}.`,
    ].join("\n\n");
  }

  return "I can only answer from Gawandeep Kaur's local portfolio knowledge base, and that information is not available yet.";
}

export async function askPortfolioAssistant(question: string) {
  const provider =
    import.meta.env.VITE_OPENAI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY ? "local-fallback" : "local";

  return {
    provider,
    content: answerFromLocalKnowledge(question),
  };
}
