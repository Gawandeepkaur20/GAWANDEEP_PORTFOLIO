import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio error boundary", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="grid min-h-screen place-items-center bg-background p-6">
        <div className="max-w-md rounded-lg border border-border bg-surface p-6 text-center shadow-soft-xl">
          <AlertTriangle className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
          <h1 className="mt-5 font-display text-3xl font-semibold">Something needs a refresh.</h1>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            The portfolio app hit an unexpected UI error. Reloading usually restores the experience.
          </p>
          <Button className="mt-6" onClick={() => window.location.reload()}>
            Reload App
          </Button>
        </div>
      </main>
    );
  }
}
