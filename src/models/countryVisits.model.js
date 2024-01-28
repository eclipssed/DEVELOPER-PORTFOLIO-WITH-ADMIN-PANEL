import { Schema, model, models } from "mongoose";

const CountryVisitsSchema = new Schema(
  {
    ip: {
      type: String,
    },
    date: {
      type: String,
    },
    country: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const CountryVisits =
  models.CountryVisits || model("CountryVisits", CountryVisitsSchema);

export default CountryVisits;
