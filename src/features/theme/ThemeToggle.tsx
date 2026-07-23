import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/features/theme/useTheme";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const Icon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-5 left-5 z-50 flex items-center gap-1 rounded-md border border-border/70 bg-surface/75 p-1 shadow-soft-xl backdrop-blur-xl"
    >
      <Button aria-label="Toggle theme" size="icon" variant="ghost" onClick={toggleTheme}>
        <Icon className="h-4 w-4" aria-hidden="true" />
      </Button>
      <Button
        aria-label="Use system theme"
        size="icon"
        variant={theme === "system" ? "secondary" : "ghost"}
        onClick={() => setTheme("system")}
      >
        <Monitor className="h-4 w-4" aria-hidden="true" />
      </Button>
    </motion.div>
  );
}
