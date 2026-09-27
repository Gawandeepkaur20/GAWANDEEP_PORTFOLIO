import { achievements, additionalProjects, certificates, currentStack, experiences, projects, researchWork, skills } from "@/data/portfolio";
import { siteConfig } from "@/constants/site";

export const knowledgeBase = {
  profile: {
    name: siteConfig.name,
    role: siteConfig.role,
    tagline: siteConfig.tagline,
    summary:
      "Gawandeep Kaur is a B.Tech Computer Science & Engineering student focused on AI and full-stack development.",
    strengths: [
      "AI product thinking",
      "Full stack implementation",
      "Responsive UI engineering",
      "Problem solving",
      "Computer vision",
      "LLM integration",
    ],
  },
  projects,
  additionalProjects,
  experience: experiences,
  research: researchWork,
  skills,
  education: {
    degree: "B.Tech Computer Science & Engineering",
    university: "Punjabi University Patiala",
    duration: "2023-2027",
    cgpa: "8.72/10 up to 6th semester",
    interests: ["Artificial Intelligence", "Full Stack Development", "LLM Integration", "Computer Vision"],
  },
  achievements,
  certifications: certificates,
  stack: currentStack,
  timeline: [
    "B.Tech Computer Science & Engineering at Punjabi University Patiala",
    "MERN Stack Development Intern at Dotsquares Pvt. Ltd.",
    "AI Intern at CodeAlpha",
    "AI Intern at Mirai School of Technology",
  ],
};

export type KnowledgeBase = typeof knowledgeBase;
