import { motion } from "framer-motion";
import { Eye, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { certificates } from "@/data/portfolio";
import type { Certificate } from "@/types/portfolio";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";

export function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedCertificate) {
      document.body.style.overflow = "";
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedCertificate]);

  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications across cybersecurity, AI, and databases."
      description="A concise list of completed certifications without invented dates or credential IDs."
      className="bg-surface/25"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {certificates.map((certificate) => (
          <motion.div key={certificate.title} variants={fadeUp} whileHover={hoverLift} className="h-full">
            <Card className="flex h-full flex-col overflow-hidden border-border/60 bg-surface/70">
              {certificate.image ? (
                <button
                  type="button"
                  className="group block w-full overflow-hidden rounded-md border border-border/70 bg-muted/30 text-left focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => setSelectedCertificate(certificate)}
                  aria-label={`Preview ${certificate.title} certificate`}
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate from ${certificate.organization}`}
                    className="aspect-[4/3] w-full object-contain bg-background/40 p-2 transition duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </button>
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-dashed border-border/80 bg-muted/20 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                  Image pending
                </div>
              )}

              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{certificate.issueDate}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{certificate.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{certificate.organization}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{certificate.summary}</p>

                {certificate.image && (
                  <div className="mt-auto pt-5">
                    <Button size="sm" variant="ghost" onClick={() => setSelectedCertificate(certificate)}>
                      <Eye className="h-4 w-4" aria-hidden="true" />
                      Preview
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {selectedCertificate?.image && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} certificate preview`}
          onMouseDown={() => setSelectedCertificate(null)}
        >
          <div
            className="relative flex max-h-full max-w-full items-center justify-center"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <Button
              ref={closeButtonRef}
              type="button"
              size="icon"
              variant="outline"
              className="absolute right-2 top-2 z-10 bg-background/90"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate preview"
              title="Close certificate preview"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate from ${selectedCertificate.organization}`}
              className="max-h-[calc(100vh-2rem)] max-w-full rounded-md bg-white object-contain shadow-2xl sm:max-h-[calc(100vh-4rem)]"
            />
          </div>
        </div>
      )}
    </Section>
  );
}
