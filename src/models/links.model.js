import { Schema, model, models } from "mongoose";

const LinksSchema = new Schema(
  {
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Links = models.Links || model("Links", LinksSchema);

export default Links;
