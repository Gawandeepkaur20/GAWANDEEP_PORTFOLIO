import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { pageTransition } from "@/animations/motion";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.main>
  );
}
