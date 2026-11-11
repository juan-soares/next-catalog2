import { Schema, model, models, type Model } from "mongoose";
import { assetSchema } from "@/modules/asset/models";
import type { FranchiseDoc } from "@/modules/franchise/types";

const franchiseSchema = new Schema<FranchiseDoc>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    translatedTitle: {
      type: String,
      trim: true,
      default: "",
    },

    logo: {
      type: assetSchema,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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
    versionKey: false,
  },
);

export const FranchiseModel =
  (models.Franchise as Model<FranchiseDoc>) ??
  model<FranchiseDoc>("Franchise", franchiseSchema);
