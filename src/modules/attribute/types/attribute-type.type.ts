import { AttributeTypeCode } from "@/modules/attribute/types";

export type AttributeType = {
  code: AttributeTypeCode;
  label: string;
  field: string;
};
