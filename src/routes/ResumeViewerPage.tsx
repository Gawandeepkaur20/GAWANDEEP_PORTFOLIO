import { useState } from "react";
import { Download, Maximize2, Minus, Plus, Printer } from "lucide-react";
import { PageTransition } from "@/layouts/PageTransition";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/utils/cn";

export default function ResumeViewerPage() {
  const [zoom, setZoom] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <PageTransition>
      <Seo title="Resume Viewer" description="Preview, zoom, print, and download Gawandeep Kaur's resume." path="/resume" />
      <section className={cn("min-h-screen pt-32", fullscreen && "fixed inset-0 z-[90] overflow-y-auto bg-background p-4 pt-4")}>
        <div className="container">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Resume Viewer</p>
              <h1 className="mt-3 font-display text-4xl font-semibold">Preview the professional summary.</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => setZoom((value) => Math.max(75, value - 10))}><Minus className="h-4 w-4" /> Zoom</Button>
              <Button variant="outline" onClick={() => setZoom((value) => Math.min(140, value + 10))}><Plus className="h-4 w-4" /> Zoom</Button>
              <Button variant="outline" onClick={() => window.print()}><Printer className="h-4 w-4" /> Print</Button>
              <Button variant="outline" onClick={() => setFullscreen((value) => !value)}><Maximize2 className="h-4 w-4" /> Fullscreen</Button>
              <a href="/GAWANDEEPKAUR_CV.pdf" className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground"><Download className="h-4 w-4" /> Download</a>
            </div>
          </div>
          <Card elevated className="overflow-auto">
            <div className="mx-auto origin-top rounded-lg bg-white p-8 text-slate-950 shadow-soft-xl transition" style={{ width: 794, minHeight: 1123, transform: `scale(${zoom / 100})`, marginBottom: `${(zoom - 100) * 10}px` }}>
              <h2 className="font-display text-4xl font-semibold">Gawandeep Kaur</h2>
              <p className="mt-2 text-lg text-slate-600">AI Engineer | Full Stack Developer</p>
              <div className="mt-8 grid gap-6">
                <section><h3 className="font-semibold">Profile</h3><p className="mt-2 text-sm leading-7 text-slate-700">Building intelligent software that solves real-world problems through applied AI, thoughtful interfaces, and maintainable full stack architecture.</p></section>
                <section><h3 className="font-semibold">Experience</h3><p className="mt-2 text-sm leading-7 text-slate-700">AI Intern at MirAI School of Technology. Web Development Lead at Google Developer Groups on Campus.</p></section>
                <section><h3 className="font-semibold">Education</h3><p className="mt-2 text-sm leading-7 text-slate-700">B.Tech Computer Science Engineering, Punjabi University Patiala.</p></section>
                <section><h3 className="font-semibold">Skills</h3><p className="mt-2 text-sm leading-7 text-slate-700">React, TypeScript, Node.js, Python, MongoDB, Flutter, Firebase, Google Cloud, Tailwind CSS, AI workflows.</p></section>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageTransition>
  );
}
