import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { searchPortfolio } from "@/services/search";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = useMemo(() => searchPortfolio(query), [query]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const goTo = (href: string) => {
    setOpen(false);
    setQuery("");
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        navigate("/");
        window.setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 80);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", href);
      }
      return;
    }
    navigate(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-background/78 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Global search command palette"
        >
          <div className="mx-auto mt-24 max-w-2xl overflow-hidden rounded-lg border border-border bg-surface shadow-soft-xl">
            <div className="flex items-center gap-3 border-b border-border p-4">
              <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, skills, sections, achievements"
                className="h-10 flex-1 bg-transparent text-sm outline-none"
              />
              <Button aria-label="Close search" size="icon" variant="ghost" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <div className="max-h-[55vh] overflow-y-auto p-2">
              {results.map((result) => (
                <button
                  key={result.id}
                  type="button"
                  onClick={() => goTo(result.href)}
                  className="flex w-full items-start justify-between gap-4 rounded-md p-3 text-left transition hover:bg-muted"
                >
                  <span>
                    <span className="block font-semibold">{result.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{result.description}</span>
                  </span>
                  <Badge>{result.type}</Badge>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
