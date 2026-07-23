import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ToastProvider } from "@/components/ui/Toast";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { useLenis } from "@/hooks/useLenis";
import { router } from "@/routes/router";

export function App() {
  useLenis();

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <ToastProvider>
            <RouterProvider router={router} />
          </ToastProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
