import { model, models, Schema } from "mongoose";

const FranchiseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    translatedTitle: {
      type: String,
      trim: true,
    },

    logo: {
      type: Schema.Types.ObjectId,
      ref: "MediaFile",
      required: true,
    },

    parentFranchiseId: {
      type: Schema.Types.ObjectId,
      ref: "Franchise",
      default: null,
    },
  },
  {
    collection: "franchises",
    timestamps: true,
  },
);

FranchiseSchema.index({ title: 1 });

export const FranchiseModel =
  models.Franchise ?? model("Franchise", FranchiseSchema);
