import { Schema, model, models } from "mongoose";
import { ATTRIBUTE_TYPES } from "../consts";

const AttributeSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
      enum: ATTRIBUTE_TYPES.map((attribute) => attribute.key),
      index: true,
    },
  },
  {
    collection: "attributes",
    timestamps: true,
  },
);

export const AttributeModel =
  models.Attribute || model("Attribute", AttributeSchema);
