import { Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function FloatingAssistantButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-20 right-5 z-50"
    >
      <Link
        to="/assistant"
        aria-label="Open AI portfolio assistant"
        className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground shadow-glow transition hover:scale-105"
      >
        <Bot className="h-5 w-5" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
