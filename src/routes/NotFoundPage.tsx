import { Link } from "react-router-dom";
import { PageTransition } from "@/layouts/PageTransition";
import { Seo } from "@/components/Seo";
import { LinkButton } from "@/components/ui/LinkButton";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <Seo title="Page Not Found" description="The requested portfolio page could not be found." path="/404" />
      <main className="grid min-h-screen place-items-center p-6">
        <div className="max-w-md text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">404</p>
          <h1 className="mt-4 font-display text-5xl font-semibold">This page is outside the map.</h1>
          <p className="mt-4 text-muted-foreground">The portfolio route you requested does not exist or has moved.</p>
          <LinkButton href="/" className="mt-8">
            Return Home
          </LinkButton>
          <Link to="/assistant" className="mt-4 block text-sm text-muted-foreground hover:text-foreground">
            Ask the portfolio assistant
          </Link>
        </div>
      </main>
    </PageTransition>
  );
}
