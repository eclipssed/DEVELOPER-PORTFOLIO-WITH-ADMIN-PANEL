"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { MotionDiv } from "../MotionDiv";
import { useInView } from "framer-motion";

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

const AboutSection = ({
  aboutImage,
  aboutText,
  skills,
  education,
  experience,
}) => {
  const [isActive, setIsActive] = useState("skills");

  const imageRef = useRef(null);
  const textRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true });
  const textInView = useInView(textRef, { once: true });

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
  const updatedTabData = tabData.map((tab, index) => {
    if (tab.id === "skills") {
      const skillsContent = (
        <ul key={index} className="list-disc pl-2 ml-2 grid grid-cols-2 gap-1">
          {skills.map((item, index) => (
            <li key={index}>{item.skill}</li>
          ))}
        </ul>
      );

      return { ...tab, content: skillsContent };
    } else if (tab.id === "experience") {
      const experienceContent = (
        <ul key={index} className="list-disc pl-2 ml-2">
          {experience.map((item, index) => (
            <li key={index}>{item.experience}</li>
          ))}
        </ul>
      );

      return { ...tab, content: experienceContent };
    } else if (tab.id === "education") {
      const educationContent = (
        <ul key={index} className="list-disc pl-2 ml-2">
          {education.map((item, index) => (
            <li key={index}>{item.education}</li>
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
        className="md:grid md:grid-cols-2 gap-8 xl:gap-16 py-8 md:items-start md:justify-start sm:py-16 "
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
          <p className="text-base text-light lg:text-lg">{aboutText}</p>
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
          <div className="mt-8 text-base text-light relative ">
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

export default AboutSection;
