import { type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  elevated?: boolean;
};

export function Card({ className, elevated = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/80 bg-surface/78 p-5 backdrop-blur-xl transition duration-300",
        elevated && "bg-surface-elevated shadow-soft-xl",
        className,
      )}
      {...props}
    />
  );
}
