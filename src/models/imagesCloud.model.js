import { Schema, model, models } from "mongoose";

const ImagesSchema = new Schema(
  {
    logo: {
      previewUrl: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    hero: {
      previewUrl: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    about: {
      previewUrl: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    cv: {
      previewUrl: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const ImagesCloud = models.ImagesCloud || model("ImagesCloud", ImagesSchema);

export default ImagesCloud;
