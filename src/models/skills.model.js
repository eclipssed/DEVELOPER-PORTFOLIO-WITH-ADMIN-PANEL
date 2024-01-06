import { Schema, model, models } from "mongoose";

const SkillSchema = new Schema(
  {
    skill: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Skills = models.Skills || model("Skills", SkillSchema);

export default Skills;
