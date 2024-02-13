"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import ProjectFormInput from "./ProjectFormInput";
import { createProject, updateProject } from "@/libs/admin-panel/actions";
import SaveButton from "./SaveButton";
import { useRouter } from "next/navigation";

const ProjectForm = ({
  editProject,
  onEditTextChange,
  onEditImageChange,
  handleEditTagsChange,
}) => {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState({
    image: "",
    title: "",
    description: "",
    githubUrl: "",
    previewUrl: "",
    tags: [],
  });

  const router = useRouter();

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
  const handleCreateProject = async () => {
    const data = new FormData();
    data.set("image", project.image);
    data.set("title", project.title);
    data.set("description", project.description);
    data.set("githubUrl", project.githubUrl);
    data.set("previewUrl", project.previewUrl);
    data.set("tags", project.tags);
    try {
      const res = await createProject(data);
      if (res) {
        toast.success("successfully created new project.");
        router.push("/admin-panel/projects");
      } else {
        toast.error("Failed creating new project.");
      }
    } catch (error) {
      console.log("Error while creating project: ", error);
      toast.error("Error while creating project.");
    }
    setLoading(false);
  };
  const handleUpdateProject = async () => {
    const data = new FormData();
    data.set("image", editProject.image);
    data.set("title", editProject.title);
    data.set("description", editProject.description);
    data.set("githubUrl", editProject.githubUrl);
    data.set("previewUrl", editProject.previewUrl);
    data.set("tags", editProject.tags);
    data.set("_id", editProject._id);
    try {
      const res = await updateProject(data);
      if (res) {
        toast.success("successfully updated project.");
        router.push("/admin-panel/projects");
      } else {
        toast.error("Failed updating project.");
      }
    } catch (error) {
      console.log("Error while updating project: ", error);
      toast.error("Error while updating project.");
    }
    setLoading(false);
  };
  return (
    <div>
      <form
        action={editProject ? handleUpdateProject : handleCreateProject}
        onSubmit={() => setLoading(true)}
        className="space-y-2 border-2 border-primary rounded-lg p-4"
      >
        <div
          className="h-40 w-40 rounded-xl relative group bg-fixed bg-no-repeat bg-cover"
          style={{
            background: `url(${
              editProject ? editProject.image : project.image
            })`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Select Image</label>
          <input
            onChange={editProject ? onEditImageChange : handleImagechange}
            type="file"
            name="image"
          />
        </div>
        <ProjectFormInput
          value={editProject ? editProject.title : project.title}
          onChange={editProject ? onEditTextChange : handleTextchange}
          title={"Title"}
          name={"title"}
        />
        <ProjectFormInput
          value={editProject ? editProject.description : project.description}
          onChange={editProject ? onEditTextChange : handleTextchange}
          title={"Description"}
          name={"description"}
        />
        <ProjectFormInput
          value={editProject ? editProject.githubUrl : project.githubUrl}
          onChange={editProject ? onEditTextChange : handleTextchange}
          title={"GithubUrl"}
          name={"githubUrl"}
        />
        <ProjectFormInput
          value={editProject ? editProject.previewUrl : project.previewUrl}
          onChange={editProject ? onEditTextChange : handleTextchange}
          title={"PreviewUrl"}
          name={"previewUrl"}
        />
        <ProjectFormInput
          value={editProject ? editProject.tags : project.tags}
          onChange={editProject ? handleEditTagsChange : handleTagschange}
          title={"Tags"}
          name={"tags"}
        />
        <SaveButton loading={loading} />
      </form>
    </div>
  );
};

export default ProjectForm;
