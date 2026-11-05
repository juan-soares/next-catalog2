import type { Types } from "mongoose";
import type { AttributeTypeCode } from "@/modules/attribute/types";

export type AttributeDoc = {
  _id: Types.ObjectId;
  label: string;
  typeCode: AttributeTypeCode;
};
