import { Schema, model, models } from "mongoose";

const TextSchema = new Schema(
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
    contact: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Text = models.Text || model("Text", TextSchema);

export default Text;
