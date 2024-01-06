"use client";

import ProjectForm from "../../../../../components/admin-panel/ProjectForm";
import axios from "axios";
import React, { useEffect, useState } from "react";

const newPage = ({ params }) => {
  const { _id } = params;
  const [project, setProject] = useState({
    description: "",
    githubUrl: "",
    image: "",
    previewUrl: "",
    title: "",
    tags: [],
    _id: "",
  });

  const fetchProject = async () => {
    const res = await axios.put("/api/admin-panel/project", { _id });
    const data = res.data;
    console.log(data);
    setProject((prev) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    fetchProject();
  }, []);

  console.log(project);

  const handleImagechange = (e) => {
    const file = e.target.files[0];
    setProject((prev) => ({ ...prev, [e.target.name]: file }));
  };
  const handleTextchange = (e) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTagschange = (e) => {
    const eventTags = e.target.value;
    const tagsArray = eventTags.split(",");
    setProject((prev) => ({ ...prev, [e.target.name]: tagsArray }));
  };

  return (
    <section className="wrapper">
      <ProjectForm
        handleEditTagsChange={handleTagschange}
        editProject={project}
        onEditImageChange={handleImagechange}
        onEditTextChange={handleTextchange}
      />
    </section>
  );
};

export default newPage;
