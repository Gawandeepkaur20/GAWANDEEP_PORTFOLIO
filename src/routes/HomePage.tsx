import { PageTransition } from "@/layouts/PageTransition";
import { HeroSection } from "@/sections/HeroSection";
import { FoundationSection } from "@/sections/FoundationSection";
import { Seo } from "@/components/Seo";
import { AboutSection } from "@/sections/AboutSection";
import { AchievementsSection } from "@/sections/AchievementsSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { CurrentlyBuildingSection } from "@/sections/CurrentlyBuildingSection";
import { EducationSection } from "@/sections/EducationSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { FunFactsSection } from "@/sections/FunFactsSection";
import { PhilosophySection } from "@/sections/PhilosophySection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ProductModulesSection } from "@/sections/ProductModulesSection";
import { ResumeSection } from "@/sections/ResumeSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { TechStackSection } from "@/sections/TechStackSection";


export default function HomePage() {
  return (
    <PageTransition>
      <Seo />
      <HeroSection />
      <FoundationSection />
      <AboutSection />
      <ProductModulesSection />
      <SkillsSection />
      <ProjectsSection />
      <PhilosophySection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <CertificationsSection />
      <TechStackSection />
      <CurrentlyBuildingSection />
      <FunFactsSection />
     
      <ResumeSection />
    </PageTransition>
  );
}
