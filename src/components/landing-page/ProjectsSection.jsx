"use client";
import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import axios from "axios";

// const projectsData = [
//   {
//     id: 1,
//     title: "React portfolio Website",
//     description: "Project 1 description",
//     image: "/images/1.png",
//     gitUrl: "/",
//     previewUrl: "/",
//     tags: ["all", "next.js"],
//   },
//   {
//     id: 2,
//     title: "React portfolio Website",
//     description: "Project 1 description",
//     image: "/images/2.png",
//     gitUrl: "/",
//     previewUrl: "/",
//     tags: ["all", "next.js"],
//   },
//   {
//     id: 3,
//     title: "React portfolio Website",
//     description: "Project 1 description",
//     image: "/images/3.png",
//     tags: ["all", "react.js"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 4,
//     title: "React portfolio Website",
//     description: "Project 1 description",
//     image: "/images/4.png",
//     tags: ["all", "react.js"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 5,
//     title: "React portfolio Website",
//     description: "Project 1 description",
//     image: "/images/5.png",
//     tags: ["all", "react.js"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "React portfolio Website",
//     description: "Project 1 description",
//     image: "/images/6.png",
//     tags: ["all", "react.js"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
// ];

const fetchProjects = async () => {
  try {
    const res = await axios("/api/admin-panel/project");
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

const ProjectsSection = () => {
  const [projectsData, setProjectsData] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    fetchProjects().then((res) => setProjectsData(res));
    // console.log(projectsData);
  }, []);

  const filteredProject = projectsData?.slice(0, 6);

  return (
    <section id="projects" className=" text-center ">
      <h2 className="text-4xl mb-4 text-white font-bold">My Recent Projects</h2>
      <ul
        ref={ref}
        className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
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
          <a href="/projects">See All Projects</a>
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
