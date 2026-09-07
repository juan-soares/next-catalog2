import { Types } from "mongoose";
import { AttributeTypeCode } from "../../domain";

export type AttributeDocument = {
  _id: Types.ObjectId;
  label: string;
  slug: string;
  type: AttributeTypeCode;
  createdAt: Date;
  updatedAt: Date;
};
