import { Schema, model, models } from "mongoose";
import { ATTRIBUTE_TYPE_KEYS } from "../consts";

const AttributeSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
      lowercase: true,
    },

    label: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
      enum: ATTRIBUTE_TYPE_KEYS,
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
