"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const ProjectsSection = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProject = projects?.slice(0, 6);

  return (
    <section id="projects" className=" text-center ">
      <h2 className="text-4xl mb-4 text-white font-bold">My Recent Projects</h2>
      <ul
        ref={ref}
        className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-center"
      >
        {filteredProject?.map((project, index) => (
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
              githubUrl={project.githubUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <div className="max-w-md  mx-auto ">
        <button className="btn-primary mt-8 min-w-full">
          <a href="/landing-page/projects">See All Projects</a>
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
