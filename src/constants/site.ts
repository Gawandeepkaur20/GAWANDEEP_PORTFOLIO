import type { NavItem } from "@/types/navigation";

export const siteConfig = {
  name: "Gawandeep Kaur",
  role: "AI Engineer | Full Stack Developer",
  tagline: "Building intelligent software that solves real-world problems.",
  url: import.meta.env.VITE_SITE_URL ?? "https://gawandeepkaur.dev",
  description:
    "Portfolio foundation for Gawandeep Kaur, an AI Engineer and Full Stack Developer focused on intelligent, reliable software.",
  social: {
    github: "https://github.com/Gawandeepkaur20",
    linkedin: "www.linkedin.com/in/gawandeep-kaur-b2671b322",
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
