import { Menu, X, Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "@/constants/site";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const isHidden = useScrollDirection(80);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("scroll", onHashChange, { passive: true });
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("scroll", onHashChange);
    };
  }, []);

  return (
    <motion.header
      animate={{ y: isHidden && !open ? -96 : 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-4 z-[60]"
    >
      <div className="container">
        <nav className="glass flex h-16 items-center justify-between rounded-lg px-3 sm:px-4">
          <NavLink to="/" className="flex items-center gap-3" aria-label="Gawandeep Kaur home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-foreground text-sm font-bold text-background">
              GK
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-sm font-semibold">Gawandeep Kaur</span>
              <span className="block text-xs text-muted-foreground">AI Engineer</span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground",
                    activeHash === item.href && "text-foreground",
                  )}
                >
                  {item.label}
                  {activeHash === item.href && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-primary"
                    />
                  )}
                </a>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground",
                      isActive && !activeHash && "text-foreground",
                    )
                  }
                >
                  {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && !activeHash && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-primary"
                      />
                    )}
                  </>
                  )}
                </NavLink>
              )
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="/GAWANDEEPKAUR_CV.pdf"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background/45 px-4 text-sm font-semibold transition hover:bg-muted"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-md transition hover:bg-muted lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass mt-2 rounded-lg p-2 lg:hidden"
            >
              {navItems.map((item) => (
                item.href.startsWith("#") ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground",
                      activeHash === item.href && "bg-muted text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground",
                        isActive && !activeHash && "bg-muted text-foreground",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
              <a
                href="/GAWANDEEPKAUR_CV.pdf"
                className="mt-2 flex items-center gap-2 rounded-md bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
