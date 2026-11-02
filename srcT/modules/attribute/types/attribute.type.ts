import type {
  AttributeType,
  AttributeTypeCode,
} from "@/modules/attribute/types";

export type Attribute = {
  id: string;
  label: string;
  typeCode: AttributeTypeCode;
};
