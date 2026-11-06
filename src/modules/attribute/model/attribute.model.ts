import { Schema, model, models, type Model } from "mongoose";
import type { AttributeData } from "@/modules/attribute/types";
import { ATTRIBUTE_TYPE_CODE_LIST } from "@/modules/attribute/consts";

const attributeSchema = new Schema<AttributeData>(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },

    typeCode: {
      type: String,
      enum: ATTRIBUTE_TYPE_CODE_LIST,
      required: true,
    },
  },

  {
    collection: "attributes",
    timestamps: true,
    versionKey: false,
  },
);

export const AttributeModel =
  (models.Attribute as Model<AttributeData>) ??
  model<AttributeData>("Attribute", attributeSchema);
