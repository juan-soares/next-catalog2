import { AttributeTypeCode } from "@/modules/attribute/types";

export type FindAttributesFilters = {
  type?: AttributeTypeCode;
  label?: string;
};
