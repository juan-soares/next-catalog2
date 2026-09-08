import type { Types } from "mongoose";
import type { AttributeTypeCode } from "@/modules/attribute/types";

export type AttributeDocument = {
  _id: Types.ObjectId;
  label: string;
  slug: string;
  type: AttributeTypeCode;
  createdAt: Date;
  updatedAt: Date;
};
