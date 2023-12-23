"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const tabData = [
  {
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ml-2">
        <li>Javascript</li>
        <li>React JS</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    id: "education",
    content: (
      <ul className="list-disc pl-2 ml-2">
        <li>Iqra Public School & College Kohat (10th grade)</li>
        <li>Oxford Group Of Colleges Kohat (12th grade)</li>
        <li>Kohat University of Science And Technology (pending..)</li>
      </ul>
    ),
  },
  {
    id: "experience",
    content: (
      <ul className="list-disc pl-2 ml-2">
        <li>Infusible Coder Internship (6 months )</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [isActive, setIsActive] = useState("skills");
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
            src={"/images/hero1.jpg"}
            width={500}
            className="mx-auto"
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
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, Next.js,
            MongoDB, Tailwind and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex gap-4 mt-4">
            <span
              onClick={() => handleActive("skills")}
              className={`text-[#adb7be] hover:text-white font-semibold cursor-pointer ${
                isActive === "skills"
                  ? "text-white border-b-2 border-b-secondary"
                  : ""
              } `}
            >
              Skills
            </span>
            <span
              onClick={() => handleActive("education")}
              className={`text-[#adb7be] hover:text-white font-semibold cursor-pointer ${
                isActive === "education"
                  ? "text-white  border-b-2 border-b-secondary"
                  : ""
              } `}
            >
              Education
            </span>
            <span
              onClick={() => handleActive("experience")}
              className={`text-[#adb7be] hover:text-white font-semibold cursor-pointer ${
                isActive === "experience"
                  ? " text-white  border-b-2 border-b-secondary"
                  : ""
              } `}
            >
              Experience
            </span>
          </div>
          <div className="mt-8 relative">
            {tabData
              .filter((tab) => tab.id === isActive)
              .map((filteredTabs) => (
                <>
                  <div key={filteredTabs.id}>{filteredTabs.content}</div>
                </>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
