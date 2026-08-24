import { ATTRIBUTE_TYPES } from "@/modules/attribute-type";
import { Schema, model, models } from "mongoose";

const attributeSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },

    attributeType: {
      type: String,
      enum: Object.keys(ATTRIBUTE_TYPES),
      required: true,
    },
  },
  {
    collection: "attributes",
    timestamps: true,
  },
);

export const AttributeModel =
  models.Attribute || model("Attribute", attributeSchema);
