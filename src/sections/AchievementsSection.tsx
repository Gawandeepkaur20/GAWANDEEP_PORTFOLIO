import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { achievements } from "@/data/portfolio";
import { fadeUp, hoverLift, staggerContainer } from "@/animations/motion";

export function AchievementsSection() {
  return (
    <Section
      id="achievements"
      eyebrow="Leadership & Achievements"
      title="Leadership and verified milestones."
      description="A concise record of campus leadership, cloud learning progress, and GDG recognition."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {achievements.map((achievement) => (
          <motion.div key={achievement.label} variants={fadeUp} whileHover={hoverLift}>
            <Card className="h-full">
              <Trophy className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold">{achievement.label}</h3>
              <p className="mt-2 text-sm font-medium text-primary">{achievement.meta}</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{achievement.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
