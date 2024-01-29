"use client";

import { getProjects } from "@/libs/data";
import ProjectCard from "../../../components/admin-panel/ProjectCard";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteProject } from "@/libs/admin-panel/actions";

const page = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => JSON.parse(data))
      .then((data) => setProjects(data));
  }, []);

  const handleDelete = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure that you want to delete the project?"
    );
    // console.log(confirmed);
    if (confirmed) {
      try {
        const res = await deleteProject(_id);
        if (res) {
          toast.success("successfully deleted the project");
          getProjects()
            .then((data) => JSON.parse(data))
            .then((data) => setProjects(data));
        }
      } catch (error) {
        console.log("Error while updating textFields: ", error);
        toast.error("Error while deleting project.");
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

export default page;
