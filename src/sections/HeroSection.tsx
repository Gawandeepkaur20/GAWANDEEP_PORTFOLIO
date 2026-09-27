import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/LinkButton";
import { TextReveal } from "@/components/typography/TextReveal";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { siteConfig } from "@/constants/site";
import { HeroBackground } from "@/sections/HeroBackground";

const AmbientBackground = lazy(() =>
  import("@/sections/AmbientBackground").then((module) => ({ default: module.AmbientBackground })),
);

export function HeroSection() {
  const [profileImageAvailable, setProfileImageAvailable] = useState(true);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      <HeroBackground />
      <Suspense fallback={null}>
        <AmbientBackground />
      </Suspense>

      <div className="container relative z-10">
        <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-surface/70 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_18px_hsl(var(--success)/0.8)]" />
              {siteConfig.role}
            </motion.div>

            <TextReveal
              text={siteConfig.name}
              className="font-display text-6xl font-semibold tracking-normal text-foreground sm:text-7xl lg:text-8xl"
            />

            <motion.p
              variants={fadeUp}
              className="max-w-3xl text-balance text-xl leading-9 text-muted-foreground sm:text-2xl"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.p variants={fadeUp} className="max-w-2xl text-base leading-8 text-muted-foreground">
              Computer Science undergraduate building practical AI and full-stack projects with Python,
              React.js, Node.js, MongoDB, Streamlit, REST APIs, and LLM integration.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#projects" size="lg">
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
              <LinkButton href="/GAWANDEEPKAUR_CV.pdf" size="lg" variant="outline">
                Download Resume
                <Download className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
              <LinkButton href="/contact" size="lg" variant="outline">
                Contact Me
              </LinkButton>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <a aria-label="GitHub" href={siteConfig.social.github} className="rounded-md p-2 hover:bg-muted">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href={siteConfig.social.linkedin} className="rounded-md p-2 hover:bg-muted">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Email" href={siteConfig.social.email} className="rounded-md p-2 hover:bg-muted">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {profileImageAvailable && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="order-first mx-auto w-full max-w-[240px] sm:max-w-[270px] lg:order-none lg:max-w-[300px]"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
                className="relative"
              >
                
               
                  <div className="absolute inset-4 rounded-[28px] bg-primary/10 blur-2xl" aria-hidden="true" />
               <div className="relative overflow-hidden rounded-[10px] border border-primary/30 bg-surface/80 p-2.5 shadow-[0_20px_60px_rgba(34,211,238,0.12)] backdrop-blur-sm">
                  <img
                    src="/profile.jpg"
                    alt="Gawandeep Kaur"
                    className="aspect-[4/5] w-full object-contain bg-white"
                    onError={() => setProfileImageAvailable(false)}
                  />
               
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      <motion.a
        href="#foundation"
        aria-label="Scroll to foundation section"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
