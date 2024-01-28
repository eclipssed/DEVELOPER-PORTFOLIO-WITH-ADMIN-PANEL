import { Schema, model, models } from "mongoose";

const VisitsSchema = new Schema(
  {
    total: {
      type: Number,
    },
    mobile: {
      type: Number,
    },
    desktop: {
      type: Number,
    },
    ip: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Visits = models.Visits || model("Visits", VisitsSchema);

export default Visits;
