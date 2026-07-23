import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { certificates } from "@/data/portfolio";
import type { Certificate } from "@/types/portfolio";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";

export function CertificationsSection() {
const [selectedCertificate, setSelectedCertificate] = useState< Certificate | null>(null);
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials prepared for proof, previews, and future verification."
      description="Certificate cards are intentionally designed as replaceable records with credential and preview actions."
      className="bg-surface/25"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-3"
      >
        {certificates.map((certificate) => (
          <motion.div key={certificate.title} variants={fadeUp} whileHover={hoverLift}>
            <Card className="h-full">
              <div className="overflow-hidden rounded-md border border-border/70">
  <img
    src={certificate.image}
    alt={certificate.title}
    onClick={() => setSelectedCertificate(certificate)}
    className="aspect-[4/3] w-full cursor-pointer object-cover transition duration-300 hover:scale-105"
  />
</div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{certificate.issueDate}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{certificate.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{certificate.organization}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{certificate.summary}</p>
              <div className="mt-5 flex gap-2">
                
            <Button
  size="sm"
  variant="ghost"
  onClick={() => setSelectedCertificate(certificate)}
>
  <Eye className="h-4 w-4" aria-hidden="true" />
  Preview
</Button>
              </div>
              
            </Card>
          </motion.div>
          
        ))}
        {selectedCertificate && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
    onClick={() => setSelectedCertificate(null)}
  >
    <img
      src={selectedCertificate.image}
      alt={selectedCertificate.title}
      className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
      </motion.div>
    </Section>
  );
}
