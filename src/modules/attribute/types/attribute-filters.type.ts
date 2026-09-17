import type { Attribute, AttributeTypeCode } from "@/modules/attribute/types";

export type AttributeFilters = {
  options: Attribute[];
  code: AttributeTypeCode;
  label: string;
  slug: string;
};
