"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import ProjectSelectButton from "./ProjectSelectButton";

const projectSelectOptions = [
  {
    label: "All",
    tagName: "all",
  },
  {
    label: "Vanilla",
    tagName: "vanilla",
  },
  {
    label: "React Js",
    tagName: "react.js",
  },
  {
    label: "Next.js",
    tagName: "next.js",
  },
];

const FilterProjects = ({ projectsData }) => {
  const [isSelected, setIsSelected] = useState("all");
  const [filteredProject, setFilteredProject] = useState([]);

  useEffect(() => {
    setFilteredProject(
      projectsData.filter((project) => project.tags.includes(isSelected))
    );
  }, [isSelected, projectsData]);
  const handleSelect = (tagName) => {
    setIsSelected(tagName);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div>
      <div className="flex justify-center flex-wrap items-center text-white py-6 gap-2">
        {projectSelectOptions.map((option) => (
          <ProjectSelectButton
            key={option.tagName}
            label={option.label}
            tagName={option.tagName}
            handleSelect={handleSelect}
            isSelected={isSelected}
          />
        ))}
      </div>
      <ul className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {filteredProject.map((project, index) => (
          <motion.li
            key={project._id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project._id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default FilterProjects;
