"use client";
import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard.jsx";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React portfolio Website",
    description: "Project 1 description",
    image: "/images/1.png",
    gitUrl: "/",
    previewUrl: "/",
    tags: ["all", "next.js"],
  },
  {
    id: 2,
    title: "React portfolio Website",
    description: "Project 1 description",
    image: "/images/2.png",
    gitUrl: "/",
    previewUrl: "/",
    tags: ["all", "next.js"],
  },
  {
    id: 3,
    title: "React portfolio Website",
    description: "Project 1 description",
    image: "/images/3.png",
    tags: ["all", "react.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React portfolio Website",
    description: "Project 1 description",
    image: "/images/4.png",
    tags: ["all", "react.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React portfolio Website",
    description: "Project 1 description",
    image: "/images/5.png",
    tags: ["all", "react.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React portfolio Website",
    description: "Project 1 description",
    image: "/images/6.png",
    tags: ["all", "react.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [isSelected, setIsSelected] = useState("all");
  const [filteredProject, setFilteredProject] = useState([]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleSelect = (tagName) => {
    setIsSelected(tagName);
  };
  useEffect(() => {
    setFilteredProject(
      projectsData.filter((project) => project.tags.includes(isSelected))
    );
  }, [isSelected]);

  return (
    <section
      id="projects"
      className="container mx-auto px-4 lg:px-16 py-2 text-center "
    >
      <h2 className="text-4xl mb-4 text-white font-bold">My Projects</h2>
      <div className="flex justify-center flex-wrap items-center text-white py-6 gap-2">
        <button
          onClick={() => handleSelect("all")}
          className={`px-8 py-3 rounded-full border-2 ${
            isSelected === "all"
              ? " border-secondary text-white"
              : "border-slate-500 text-[#adb7be]  hover:border-white hover:text-white"
          }   font-semibold text-xl cursor-pointer `}
        >
          All
        </button>
        <button
          onClick={() => handleSelect("react.js")}
          className={`px-8 py-3 rounded-full border-2 ${
            isSelected === "react.js"
              ? " border-secondary text-white"
              : "border-slate-500 text-[#adb7be]  hover:border-white hover:text-white"
          }   font-semibold text-xl cursor-pointer `}
        >
          React JS
        </button>
        <button
          onClick={() => handleSelect("next.js")}
          className={`px-8 py-3 rounded-full border-2 ${
            isSelected === "next.js"
              ? " border-secondary  text-white"
              : "border-slate-500 text-[#adb7be]  hover:border-white hover:text-white"
          }   font-semibold text-xl cursor-pointer `}
        >
          Next.js
        </button>
      </div>
      <ul
        ref={ref}
        className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
      >
        {filteredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
