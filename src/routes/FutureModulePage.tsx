import { Cpu } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageTransition } from "@/layouts/PageTransition";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/LinkButton";

type FutureModulePageProps = {
  title: string;
  description: string;
};

export function FutureModulePage({ title, description }: FutureModulePageProps) {
  return (
    <PageTransition>
      <Seo title={title} description={description} path={`/${title.toLowerCase()}`} />
      <Section className="min-h-screen pt-40">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-lg border border-border bg-surface text-primary">
            <Cpu className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
          <LinkButton href="/" className="mt-8">
            Return Home
          </LinkButton>
        </div>
      </Section>
    </PageTransition>
  );
}
