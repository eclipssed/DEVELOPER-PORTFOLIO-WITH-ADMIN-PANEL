import { Schema, model, models } from "mongoose";

const ImagesSchema = new Schema(
  {
    logo: {
      type: String,
    },
    hero: {
      type: String,
    },
    about: {
      type: String,
    },
    cv: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Images = models.Images || model("Images", ImagesSchema);

export default Images;
