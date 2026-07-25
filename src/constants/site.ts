import type { NavItem } from "@/types/navigation";

export const siteConfig = {
  name: "Gawandeep Kaur",
  role: "AI Engineer | Full Stack Developer",
  tagline: "Building intelligent software that solves real-world problems.",
  url: import.meta.env.VITE_SITE_URL ?? "https://gawandeep-portfolio.vercel.app",
  description:
  "Personal portfolio of Gawandeep Kaur showcasing AI, Full Stack, and Computer Vision projects, technical skills, and professional experience.",
  social: {
    github: "https://github.com/Gawandeepkaur20",
    linkedin: "https://www.linkedin.com/in/gawandeep-kaur-b2671b322/",
    email: "mailto:gawandeep75@gmail.com",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "AI", href: "/assistant" },
  { label: "Contact", href: "/contact" },
];
