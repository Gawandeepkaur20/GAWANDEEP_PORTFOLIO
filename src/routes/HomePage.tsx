import { PageTransition } from "@/layouts/PageTransition";
import { HeroSection } from "@/sections/HeroSection";
import { FoundationSection } from "@/sections/FoundationSection";
import { Seo } from "@/components/Seo";
import { AboutSection } from "@/sections/AboutSection";
import { AchievementsSection } from "@/sections/AchievementsSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { EducationSection } from "@/sections/EducationSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ProductModulesSection } from "@/sections/ProductModulesSection";
import { ResearchSection } from "@/sections/ResearchSection";
import { ResumeSection } from "@/sections/ResumeSection";
import { SkillsSection } from "@/sections/SkillsSection";

export default function HomePage() {
  return (
    <PageTransition>
      <Seo />
      <HeroSection />
      <FoundationSection />
      <AboutSection />
      <ProductModulesSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <CertificationsSection />
      <AchievementsSection />
      <EducationSection />
      <ResumeSection />
    </PageTransition>
  );
}
