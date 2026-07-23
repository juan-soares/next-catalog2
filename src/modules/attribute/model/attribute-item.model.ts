import { Schema, model, models } from "mongoose";

const AttributeItemSchema = new Schema(
  {
    key: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    _id: false,
  },
);

const AttributeSchema = new Schema(
  {
    attributeType: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    label: {
      type: String,
      required: true,
    },

    values: {
      type: [AttributeItemSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export const AttributeModel =
  models.Attribute || model("Attribute", AttributeSchema);
