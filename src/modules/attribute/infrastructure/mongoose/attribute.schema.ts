import { Schema } from "mongoose";
import { ATTRIBUTE_TYPE_CODES } from "../../domain";

export const AttributeSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      enum: ATTRIBUTE_TYPE_CODES,
    },
  },
  {
    collection: "attributes",
    timestamps: true,
  },
);

AttributeSchema.index({ type: 1, slug: 1 }, { unique: true });
