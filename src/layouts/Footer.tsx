import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/80 py-10">
      <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.role}</p>
        </div>
        <div className="flex items-center gap-2">
          <a aria-label="GitHub" href={siteConfig.social.github} className="rounded-md p-2 hover:bg-muted">
            <Github className="h-4 w-4" />
          </a>
          <a aria-label="LinkedIn" href={siteConfig.social.linkedin} className="rounded-md p-2 hover:bg-muted">
            <Linkedin className="h-4 w-4" />
          </a>
          <a aria-label="Email" href={siteConfig.social.email} className="rounded-md p-2 hover:bg-muted">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
