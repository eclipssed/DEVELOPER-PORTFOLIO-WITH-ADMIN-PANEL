import HeroSection from "../components/landing-page/HeroSection";
import Navbar from "../components/landing-page/Navbar";
import Footer from "../components/landing-page/Footer";
import AchievementsSection from "../components/landing-page/AchievementsSection";
import AboutSection from "../components/landing-page/AboutSection";
import ProjectsSection from "../components/landing-page/ProjectsSection";
import EmailSection from "../components/landing-page/EmailSection";
import {
  fetchText,
  fetchImages,
  fetchSkills,
  fetchEducation,
  fetchExperience,
  fetchProjects,
  fetchSocialLinks,
} from "@/DataFetchingFunctions/constants";


export default async function Home() {
  const textData = await fetchText();
  const imagesData = await fetchImages();
  const skills = await fetchSkills();
  const education = await fetchEducation();
  const experience = await fetchExperience();
  const projects = await fetchProjects();
  const socialLinks = await fetchSocialLinks();
  // console.log(socialLinks);

  return (
    <main className="flex min-h-screen flex-col justify-between bg-dark ">
      <Navbar logo={textData.logo} />
      <div className="container mx-auto px-4 lg:px-16 py-2">
        <HeroSection
          heroText={textData.hero}
          heroImage={imagesData.hero}
          heroCV={imagesData.cv}
        />
        <AchievementsSection />
        <AboutSection
          aboutImage={imagesData.about}
          aboutText={textData.about}
          skills={skills}
          education={education}
          experience={experience}
        />
        <ProjectsSection projects={projects} />
        <EmailSection
          contactText={textData.contact}
          socialLinks={socialLinks}
        />
      </div>
      <Footer />
    </main>
  );
}
