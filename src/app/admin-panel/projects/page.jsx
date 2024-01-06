"use client";

import ProjectCard from "../../../components/admin-panel/ProjectCard";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const projectsPage = () => {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const res = await axios("/api/admin-panel/project");
    const data = res.data;
    setProjects(data);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure that you want to delete the project?"
    );
    console.log(confirmed);
    if (confirmed) {
      try {
        const res = await axios.patch("/api/admin-panel/project", { _id });
        if (res.data.status === 200) {
          toast.success("successfully deleted the project");
        } else {
          toast.error("couldn't delete the project.");
        }
        fetchProjects();
      } catch (error) {
        toast.error("couldn't delete the project.");
        throw error;
      }
    } else {
      return;
    }
  };

  return (
    <section className="wrapper text-black">
      <div className="my-2 text-center">
        <button className="btn">
          <Link href={"/admin-panel/projects/new"}>Create New Project</Link>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-8 items-center justify-center text-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} handleDelete={handleDelete} {...project} />
        ))}
      </div>
    </section>
  );
};

export default projectsPage;
