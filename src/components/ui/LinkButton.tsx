import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

type LinkButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type LinkButtonSize = "sm" | "md" | "lg" | "icon";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: LinkButtonVariant;
  size?: LinkButtonSize;
  target?: string;
  rel?: string;
}

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 active:bg-primary/80",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/86 active:bg-secondary/80",
  ghost:
    "bg-transparent text-foreground hover:bg-muted/70 active:bg-muted",
  outline:
    "border border-border bg-background/45 text-foreground hover:bg-muted/70 active:bg-muted",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
  icon: "h-10 w-10 p-0",
};

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      href,
      children,
      className,
      variant = "primary",
      size = "md",
      target,
      rel,
    },
    ref,
  ) => {
    const classes = cn(
      "inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-semibold transition duration-200",
      variants[variant],
      sizes[size],
      className,
    );

    // External links
    if (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("#")
    ) {
      return (
        <a
          ref={ref}
          href={href}
          target={target}
          rel={rel}
          className={classes}
        >
          {children}
        </a>
      );
    }

    // Internal routes
    return (
      <Link
        to={href}
        className={classes}
      >
        {children}
      </Link>
    );
  },
);

LinkButton.displayName = "LinkButton";