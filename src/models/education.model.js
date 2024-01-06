import { Schema, model, models } from "mongoose";

const EducationSchema = new Schema(
  {
    education: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Education = models.Education || model("Education", EducationSchema);

export default Education;
