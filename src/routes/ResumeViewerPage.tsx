import { useState } from "react";
import { Download, Maximize2,  Printer } from "lucide-react";
import { PageTransition } from "@/layouts/PageTransition";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/utils/cn";

export default function ResumeViewerPage() {

  const [fullscreen, setFullscreen] = useState(false);

  return (
    <PageTransition>
      <Seo title="Resume Viewer" description="Preview, zoom, print, and download Gawandeep Kaur's resume." path="/GAWANDEEPKAUR_CV.pdf" />
      <section className={cn("min-h-screen pt-32", fullscreen && "fixed inset-0 z-[90] overflow-y-auto bg-background p-4 pt-4")}>
        <div className="container">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Resume Viewer</p>
              <h1 className="mt-3 font-display text-4xl font-semibold">Preview the professional summary.</h1>
            </div>
            <div className="flex flex-wrap gap-2">

              <Button variant="outline" onClick={() => window.print()}><Printer className="h-4 w-4" /> Print</Button>
              <Button variant="outline" onClick={() => setFullscreen((value) => !value)}><Maximize2 className="h-4 w-4" /> Fullscreen</Button>
              <a href="/GAWANDEEPKAUR_CV.pdf" className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground"><Download className="h-4 w-4" /> Download</a>
            </div>
          </div>
          <Card elevated className="overflow-hidden">
  <iframe
  src="/GAWANDEEPKAUR_CV.pdf"
  title="Resume"
  width="100%"
  height="900"
  style={{ border: "none" }}
/>
</Card>
        </div>
      </section>
    </PageTransition>
  );
}
