import { Schema, model, models } from "mongoose";

const FranchiseSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    logo: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "franchises",
    timestamps: true,
  },
);

FranchiseSchema.index({ slug: 1 }, { unique: true });

export const FranchiseModel =
  models.Franchise ?? model("Franchise", FranchiseSchema);
