import { Schema, model, models } from "mongoose";

const ExperienceSchema = new Schema(
  {
    experience: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Experience = models.Experience || model("Experience", ExperienceSchema);

export default Experience;
