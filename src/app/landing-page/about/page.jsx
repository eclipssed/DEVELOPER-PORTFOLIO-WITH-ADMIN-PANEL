"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MotionDiv } from "../../../components/MotionDiv";
import { useInView } from "framer-motion";
import {
  getEducation,
  getExperience,
  getImages,
  getSkills,
  getText,
} from "@/libs/data";

// tabData
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

const AboutPage = () => {
  const [isActive, setIsActive] = useState("skills");
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [aboutImage, setAboutImage] = useState("");
  const [aboutText, setAboutText] = useState("");

  const imageRef = useRef(null);
  const textRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true });
  const textInView = useInView(textRef, { once: true });

  useEffect(() => {
    getSkills()
      .then((data) => JSON.parse(data))
      .then((data) => setSkills(data));
    getEducation()
      .then((data) => JSON.parse(data))
      .then((data) => setEducation(data));
    getExperience()
      .then((data) => JSON.parse(data))
      .then((data) => setExperience(data));
    getImages()
      .then((data) => JSON.parse(data))
      .then((data) => setAboutImage(data.about));
    getText()
      .then((data) => JSON.parse(data))
      .then((data) => setAboutText(data.about));
  });

  const handleActive = (tabName) => {
    setIsActive(tabName);
  };

  const imageVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  const textVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  // Updataed TabData
  const updatedTabData = tabData.map((tab) => {
    if (tab.id === "skills") {
      const skillsContent = (
        <ul key={tab.id} className="list-disc pl-2 ml-2">
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

  return (
    <section id="about" className="text-white">
      <div
        ref={imageRef}
        className="md:grid md:grid-cols-2 gap-8 xl:gap-16 py-8 px-4 md:items-start md:justify-start sm:py-16 xl:px-16 "
      >
        <MotionDiv
          variants={imageVariants}
          initial="initial"
          animate={imageInView ? "animate" : "initial"}
          transition={{ duration: 1.5 }}
          className="mb-4"
        >
          <Image
            src={aboutImage}
            width={500}
            className="mx-auto rounded-md"
            height={500}
            alt="about-image"
          />
        </MotionDiv>
        <MotionDiv
          ref={textRef}
          variants={textVariants}
          initial="initial"
          animate={textInView ? "animate" : "initial"}
          transition={{ duration: 1.5 }}
          className="flex flex-col justify-start h-full"
        >
          <h2 className="text-4xl mb-4 text-white font-bold">About me</h2>
          <p className="text-base lg:text-lg">{aboutText}</p>
          <div className="flex gap-4 mt-4">
            <span
              onClick={() => handleActive("skills")}
              className={`text-light hover:text-white font-semibold cursor-pointer ${
                isActive === "skills"
                  ? "text-white border-b-2 border-b-primary"
                  : ""
              } `}
            >
              Skills
            </span>
            <span
              onClick={() => handleActive("education")}
              className={`text-light hover:text-white font-semibold cursor-pointer ${
                isActive === "education"
                  ? "text-white  border-b-2 border-b-primary"
                  : ""
              } `}
            >
              Education
            </span>
            <span
              onClick={() => handleActive("experience")}
              className={`text-light hover:text-white font-semibold cursor-pointer ${
                isActive === "experience"
                  ? " text-white  border-b-2 border-b-primary"
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
        </MotionDiv>
      </div>
    </section>
  );
};

export default AboutPage;
