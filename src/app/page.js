import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </main>
  );
}
