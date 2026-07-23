import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "@/utils/cn";

type ToastType = "success" | "error" | "info";
type Toast = { id: string; title: string; description?: string; type: ToastType };
type ToastContextValue = { pushToast: (toast: Omit<Toast, "id">) => void };

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const pushToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { ...toast, id }]);
    window.setTimeout(() => setToasts((current) => current.filter((item) => item.id !== id)), 4200);
  }, []);

  const value = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-24 z-[95] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => {
            const Icon = toast.type === "success" ? CheckCircle2 : toast.type === "error" ? XCircle : Info;
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                className={cn(
                  "rounded-lg border bg-surface p-4 shadow-soft-xl",
                  toast.type === "success" && "border-success/40",
                  toast.type === "error" && "border-destructive/40",
                  toast.type === "info" && "border-primary/40",
                )}
              >
                <div className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">{toast.title}</p>
                    {toast.description && <p className="mt-1 text-sm text-muted-foreground">{toast.description}</p>}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}
