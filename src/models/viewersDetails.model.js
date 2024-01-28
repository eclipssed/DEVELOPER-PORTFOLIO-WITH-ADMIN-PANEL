import { Schema, model, models } from "mongoose";

const generateDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const ViewersDetailsSchema = new Schema(
  {
    ip: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    currency: {
      type: String,
    },
    mobileUser: {
      type: Boolean,
    },
    date: {
      type: String,
    },
    viewedAt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ViewersDetails =
  models.ViewersDetails || model("ViewersDetails", ViewersDetailsSchema);

export default ViewersDetails;
