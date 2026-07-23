import { achievements, certificates, currentStack, experiences, projects, skills } from "@/data/portfolio";
import { siteConfig } from "@/constants/site";

export const knowledgeBase = {
  profile: {
    name: siteConfig.name,
    role: siteConfig.role,
    tagline: siteConfig.tagline,
    summary:
      "Gawandeep Kaur is an AI Engineer and Full Stack Developer building intelligent software that solves real-world problems.",
    strengths: [
      "AI product thinking",
      "Full stack implementation",
      "Responsive UI engineering",
      "Technical leadership",
      "Problem solving",
      "Automation mindset",
    ],
  },
  projects,
  experience: experiences,
  skills,
  education: {
    degree: "B.Tech Computer Science Engineering",
    university: "Punjabi University Patiala",
    expectedGraduation: "2027",
    interests: ["Artificial Intelligence", "Full Stack Development", "Developer Tools", "Automation", "Cloud"],
  },
  achievements,
  certifications: certificates,
  stack: currentStack,
  timeline: [
    "B.Tech Computer Science Engineering at Punjabi University Patiala",
    "Web Development Lead at Google Developer Groups on Campus",
    "AI Intern at MirAI School of Technology",
    "Portfolio foundation, case studies, and intelligent app modules",
  ],
};

export type KnowledgeBase = typeof knowledgeBase;
