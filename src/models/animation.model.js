import { Schema, model, models } from "mongoose";

const AnimationSchema = new Schema(
  {
    animeOne: {
      type: String,
    },
    animeTwo: {
      type: String,
    },
    animeThree: {
      type: String,
    },
    animeFour: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Animation = models.Animation || model("Animation", AnimationSchema);

export default Animation;
