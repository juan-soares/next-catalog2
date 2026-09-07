import mongoose from "mongoose";

import { AttributeSchema } from "./attribute.schema";

export const AttributeModel =
  mongoose.models.Attribute ??
  mongoose.model("Attribute", AttributeSchema, "attributes");
