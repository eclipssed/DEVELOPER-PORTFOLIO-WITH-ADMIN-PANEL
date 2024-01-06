"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import axios from "axios";

// TabData array starts
const tabData = [
  {
    id: "skills",
    content: "",
  },
  {
    id: "education",
    content: "",
  },
  {
    id: "experience",
    content: "",
  },
];
// TabData array ends

const fetchAboutImage = async () => {
  try {
    const res = await axios("/api/admin-panel/images");
    const data = res.data[0];
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};
const fetchAboutText = async () => {
  try {
    const res = await axios("/api/admin-panel/text");
    const data = res.data[0];
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};
const fetchSkills = async () => {
  try {
    const res = await axios("/api/admin-panel/skills");
    const data = res.data.skills;
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};
const fetchEducation = async () => {
  try {
    const res = await axios("/api/admin-panel/education");
    const data = res.data.education;
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};
const fetchExperience = async () => {
  try {
    const res = await axios("/api/admin-panel/experience");
    const data = res.data.experience;
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

const AboutSection = () => {
  const [aboutData, setAboutData] = useState({
    aboutImage: "",
    aboutText: "",
  });
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [isActive, setIsActive] = useState("skills");

  useEffect(() => {
    fetchSkills().then((res) => {
      setSkills(res);
    });
    fetchEducation().then((res) => {
      setEducation(res);
    });
    fetchExperience().then((res) => {
      setExperience(res);
    });

    fetchAboutText().then((res) =>
      setAboutData((prev) => ({ ...prev, aboutText: res.about }))
    );
    fetchAboutImage().then((res) => {
      setAboutData((prev) => ({ ...prev, aboutImage: res.about }));
    });
  }, []);

  const handleActive = (tabName) => {
    setIsActive(tabName);
  };
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true });
  const textInView = useInView(textRef, { once: true });

  const imageVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  const textVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  // Updataed TabData array starts here
  const updatedTabData = tabData.map((tab) => {
    if (tab.id === "skills") {
      const skillsContent = (
        <ul className="list-disc pl-2 ml-2">
          {skills.map((item, index) => (
            <li key={item.id}>{item.skill}</li>
          ))}
        </ul>
      );

      return { ...tab, content: skillsContent };
    } else if (tab.id === "experience") {
      const experienceContent = (
        <ul className="list-disc pl-2 ml-2">
          {experience.map((item, index) => (
            <li key={item.id}>{item.experience}</li>
          ))}
        </ul>
      );

      return { ...tab, content: experienceContent };
    } else if (tab.id === "education") {
      const educationContent = (
        <ul className="list-disc pl-2 ml-2">
          {education.map((item, index) => (
            <li key={item.id}>{item.education}</li>
          ))}
        </ul>
      );

      return { ...tab, content: educationContent };
    }

    return tab;
  });
  // Updated TabData ends here

  return (
    <section id="about" className="text-white">
      <div
        ref={imageRef}
        className="md:grid md:grid-cols-2 gap-8 xl:gap-16 py-8 px-4 md:items-start md:justify-start sm:py-16 xl:px-16 "
      >
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={imageInView ? "animate" : "initial"}
          transition={{ duration: 1.5 }}
          className="mb-4"
        >
          <Image
            src={aboutData.aboutImage}
            width={500}
            className="mx-auto rounded-md"
            height={500}
            alt="about-image"
          />
        </motion.div>
        <motion.div
          ref={textRef}
          variants={textVariants}
          initial="initial"
          animate={textInView ? "animate" : "initial"}
          transition={{ duration: 1.5 }}
          className="flex flex-col justify-start h-full"
        >
          <h2 className="text-4xl mb-4 text-white font-bold">About me</h2>
          <p className="text-base lg:text-lg">{aboutData.aboutText}</p>
          <div className="flex gap-4 mt-4">
            <span
              onClick={() => handleActive("skills")}
              className={`text-light hover:text-white font-semibold cursor-pointer ${
                isActive === "skills"
                  ? "text-white border-b-2 border-b-secondary"
                  : ""
              } `}
            >
              Skills
            </span>
            <span
              onClick={() => handleActive("education")}
              className={`text-light hover:text-white font-semibold cursor-pointer ${
                isActive === "education"
                  ? "text-white  border-b-2 border-b-secondary"
                  : ""
              } `}
            >
              Education
            </span>
            <span
              onClick={() => handleActive("experience")}
              className={`text-light hover:text-white font-semibold cursor-pointer ${
                isActive === "experience"
                  ? " text-white  border-b-2 border-b-secondary"
                  : ""
              } `}
            >
              Experience
            </span>
          </div>
          <div className="mt-8 relative">
            {updatedTabData
              .filter((tab) => tab.id === isActive && tab.content)
              .map((filteredTabs) => (
                <div key={filteredTabs.id}>{filteredTabs.content}</div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
