import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { cn } from "@/utils/cn";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
};

export function TextReveal({ text, className, as = "h1" }: TextRevealProps) {
  const Component = motion[as];
  const words = text.split(" ");

  return (
    <Component
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={cn("text-balance", className)}
    >
      {words.map((word, index) => (
        <motion.span key={`${word}-${index}`} variants={fadeUp} className="inline-block">
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </Component>
  );
}
