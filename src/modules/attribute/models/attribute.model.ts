import mongoose, { Schema } from "mongoose";
import { ATTRIBUTE_TYPE_CODES } from "@/modules/attribute/consts";

const AttributeSchema = new Schema(
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

export const AttributeModel =
  mongoose.models.Attribute ??
  mongoose.model("Attribute", AttributeSchema, "attributes");
