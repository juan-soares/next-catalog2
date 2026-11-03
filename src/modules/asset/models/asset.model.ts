import { Schema } from "mongoose";
import type { AssetData } from "@/modules/asset/types";

export const assetSchema = new Schema<AssetData>({
  label: {
    type: String,
    required: true,
    trim: true,
  },
  filename: {
    type: String,
    required: true,
    trim: true,
  },
  path: {
    type: String,
    required: true,
    trim: true,
  },
  mimeType: {
    type: String,
    required: true,
    trim: true,
  },
  size: {
    type: Number,
    required: true,
    min: 0,
  },
});
