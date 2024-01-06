"use client";

import HeroSection from "../components/landing-page/HeroSection";
import Navbar from "../components/landing-page/Navbar";
import Footer from "../components/landing-page/Footer";
import AchievementsSection from "../components/landing-page/AchievementsSection";
import AboutSection from "../components/landing-page/AboutSection";
import ProjectsSection from "../components/landing-page/ProjectsSection";
import EmailSection from "../components/landing-page/EmailSection";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState({
    primary: "",
    secondary: "",
    dark: "",
    light: "",
  });

  const updateCSSVariabels = () => {
    const root = document.documentElement;
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--secondary", colors.secondary);
    root.style.setProperty("--dark", colors.dark);
    root.style.setProperty("--light", colors.light);
    setLoading(false);
  };
  const fetchColors = async () => {
    try {
      const res = await axios("/api/admin-panel/colors");
      const data = res.data[0];
      setColors((prev) => ({ ...prev, ...data }));
      updateCSSVariabels();
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };
  useEffect(() => {
    fetchColors();
  }, [colors]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="flex min-h-screen flex-col justify-between bg-dark ">
      <Navbar />
      <div className="container mx-auto px-4 lg:px-16 py-2">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
