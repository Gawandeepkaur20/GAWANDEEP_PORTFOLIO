import { knowledgeBase } from "@/data/knowledgeBase";
import type { Project } from "@/types/portfolio";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
};

const allProjects = [...knowledgeBase.projects, ...knowledgeBase.additionalProjects];

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

const projectBySlug = (slug: string) => allProjects.find((project) => project.slug === slug);

function requiredProjectAnswer(slug: string) {
  const project = projectBySlug(slug);
  return project ? formatProject(project) : "That project is not available in the portfolio knowledge base.";
}

export const quickQuestions = [
  {
    question: "Tell me about Gawandeep.",
    answer: () => `${knowledgeBase.profile.summary}\n\n**Education:** ${knowledgeBase.education.degree}, ${knowledgeBase.education.university}.\n\n**Current strengths:** ${knowledgeBase.profile.strengths.join(", ")}.`,
  },
  { question: "Explain Signal Zero.", answer: () => requiredProjectAnswer("signal-zero") },
  { question: "Explain CareerPilot AI.", answer: () => requiredProjectAnswer("career-pilot-ai") },
  { question: "Explain Boutique Management System.", answer: () => requiredProjectAnswer("boutique-management-system") },
  { question: "Explain VisionGuard.", answer: () => requiredProjectAnswer("object-detection-tracking") },
  { question: "Tell me about ZENTICLE.", answer: () => requiredProjectAnswer("zenticle-blog-writing-platform") },
  {
    question: "What technologies does she use?",
    answer: () => {
      const grouped = knowledgeBase.skills.reduce<Record<string, string[]>>((acc, skill) => {
        acc[skill.category] = [...(acc[skill.category] ?? []), skill.name];
        return acc;
      }, {});
      return Object.entries(grouped)
        .map(([category, items]) => `**${category}:** ${items.join(", ")}`)
        .join("\n\n");
    },
  },
  {
    question: "Summarize her internship experience.",
    answer: () => knowledgeBase.experience
      .filter((item) => item.role.toLowerCase().includes("intern"))
      .map((item) => `## ${item.role}\n**${item.organization}** (${item.duration})\n\n${item.responsibilities.join("\n")}`)
      .join("\n\n---\n\n"),
  },
  {
    question: "Which AI projects has she built?",
    answer: () => allProjects.filter((item) => item.categories.includes("AI")).map(formatProject).join("\n\n---\n\n"),
  },
  {
    question: "What leadership experience does she have?",
    answer: () => {
      const leadership = knowledgeBase.achievements.find((item) => item.label.toLowerCase().includes("web development lead"));
      return leadership
        ? `**${leadership.label}**\n\n${leadership.meta}\n\n${leadership.description}`
        : "Leadership information is not available in the portfolio knowledge base.";
    },
  },
] as const;

export const suggestedQuestions = quickQuestions.map((item) => item.question);

const quickQuestionLookup = new Map(
  quickQuestions.map((item) => [item.question.trim().toLowerCase(), item.answer]),
);

function answerFromLocalKnowledge(question: string) {
  const q = question.trim().toLowerCase();
  const quickAnswer = quickQuestionLookup.get(q);

  if (quickAnswer) return quickAnswer();
  
  const project = allProjects.find((item) => {
  const search = [
    item.title,
    item.slug,
    item.overview,
    ...item.techStack,
    ...item.categories,
  ]
    .join(" ")
    .toLowerCase();

    return q.split(/\s+/).filter((word) => word.length > 3).some((word) => search.includes(word));
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

${item.responsibilities.join("\n")}`
  )
  .join("\n\n---\n\n");
  }

  if (q.includes("ai project") || (q.includes("which project") && q.includes("ai"))) {
    const aiProjects = allProjects.filter((item) => item.categories.includes("AI"));
    return aiProjects.map(formatProject).join("\n\n---\n\n");
  }
if (
  q.includes("object detection") ||
  q.includes("tracking") ||
  q.includes("computer vision")
) {
  const project = allProjects.find(
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
  const project = allProjects.find(
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
  const project = allProjects.find(
    (p) => p.slug === "career-pilot-ai"
  );

  return project
    ? formatProject(project)
    : "Career Pilot project not found.";
}
if (
  q.includes("blog") ||
  q.includes("ai blog") ||
  q.includes("zenticle")
) {
  const project = allProjects.find(
    (p) => p.slug === "zenticle-blog-writing-platform"
  );

  return project
    ? formatProject(project)
    : "ZENTICLE project not found.";
}
  if (q.includes("flutter")) {
    const flutterProjects = allProjects.filter((item) => item.categories.includes("Flutter") || item.techStack.includes("Flutter") || item.techStack.includes("Dart"));
    return flutterProjects.length > 0
      ? flutterProjects.map(formatProject).join("\n\n---\n\n")
      : "No Flutter projects are available in the portfolio knowledge base.";
  }

  if (q.includes("leadership") || q.includes("gdg")) {
    const leadership = knowledgeBase.achievements.find((item) => item.label.toLowerCase().includes("web development lead"));
    return leadership
      ? `**${leadership.label}**\n\n${leadership.meta}\n\n${leadership.description}`
      : "Leadership information is not available in the portfolio knowledge base.";
  }

  if (q.includes("strength")) {
    return `Gawandeep's documented strengths are ${knowledgeBase.profile.strengths.join(", ")}. These show up across her AI projects, full stack systems, and GDG leadership work.`;
  }

  if (q.includes("education") || q.includes("university")) {
    return `Gawandeep is pursuing **${knowledgeBase.education.degree}** at **${knowledgeBase.education.university}** (${knowledgeBase.education.duration}). CGPA: **${knowledgeBase.education.cgpa}**.`;
  }

  if (q.includes("achievement") || q.includes("certificate")) {
    return [
      `**Achievements:** ${knowledgeBase.achievements.map((item) => `${item.label} - ${item.meta}`).join(", ")}.`,
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
