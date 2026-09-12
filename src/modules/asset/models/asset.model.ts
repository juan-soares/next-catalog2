import { model, models, Schema } from "mongoose";

const AssetSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    extension: {
      type: String,
      required: true,
    },

    mimeType: {
      type: String,
      required: true,
    },

    size: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "assets",
    timestamps: true,
  },
);

export const AssetModel = models.Asset ?? model("Asset", AssetSchema);
