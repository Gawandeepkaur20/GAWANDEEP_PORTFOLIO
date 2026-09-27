import type { NavItem } from "@/types/navigation";

export const siteConfig = {
  name: "Gawandeep Kaur",
  role: "AI & Full Stack Developer",
  tagline: "Building full-stack web applications, AI-powered products, LLM solutions, and computer vision applications.",
  url: import.meta.env.VITE_SITE_URL ?? "https://gawandeep-portfolio.vercel.app",
  description:
  "Portfolio of Gawandeep Kaur, an AI and Full Stack Developer focused on React.js, Node.js, MongoDB, Python, Streamlit, LLM integration, and computer vision.",
  social: {
    github: "https://github.com/Gawandeepkaur20",
    linkedin: "https://www.linkedin.com/in/gawandeep-kaur-b2671b322/",
    email: "mailto:gawandeep75@gmail.com",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Certificates", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "/contact" },
];
