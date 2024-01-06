import { Schema, model, models } from "mongoose";

const ColorSchema = new Schema(
  {
    primary: {
      type: String,
    },
    secondary: {
      type: String,
    },
    dark: {
      type: String,
    },
    light: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Colors = models.Colors || model("Colors", ColorSchema);

export default Colors;
