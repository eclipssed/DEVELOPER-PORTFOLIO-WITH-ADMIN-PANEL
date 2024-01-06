import { Schema, model, models } from "mongoose";

const ProjectsSchema = new Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
    previewUrl: {
      type: String,
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Projects = models.Projects || model("Projects", ProjectsSchema);

export default Projects;
