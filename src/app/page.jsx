import HeroSection from "../components/landing-page/HeroSection";
import Navbar from "../components/landing-page/Navbar";
import Footer from "../components/landing-page/Footer";
import AchievementsSection from "../components/landing-page/AchievementsSection";
import AboutSection from "../components/landing-page/AboutSection";
import ProjectsSection from "../components/landing-page/ProjectsSection";
import EmailSection from "../components/landing-page/EmailSection";
import {
  getAnimation,
  getEducation,
  getExperience,
  getImages,
  getLinks,
  getProjects,
  getSkills,
  getText,
} from "../libs/data";

export default async function Home() {
  const [
    imagesData,
    skills,
    education,
    experience,
    projects,
    socialLinks,
    textData,
    animation,
  ] = await Promise.all([
    getImages().then((data) => JSON.parse(data)),
    getSkills().then((data) => JSON.parse(data)),
    getEducation().then((data) => JSON.parse(data)),
    getExperience().then((data) => JSON.parse(data)),
    getProjects().then((data) => JSON.parse(data)),
    getLinks().then((data) => JSON.parse(data)),
    getText().then((data) => JSON.parse(data)),
    getAnimation().then((data) => JSON.parse(data)),
  ]);

j
  return (
    <main className="flex min-h-screen flex-col justify-between bg-dark ">
      <Navbar />
      <div className="container mx-auto py-2 lg:px-16 px-4">
        <HeroSection
          animation={animation}
          heroText={textData.hero}
          heroImage={imagesData.hero.previewUrl}
          heroCV={imagesData.cv.previewUrl}
        />
        <AchievementsSection />
        <AboutSection
          aboutImage={imagesData.about.previewUrl}
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
