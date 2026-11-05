import type { AttributeData } from "@/modules/attribute/types";

export type FindAttributeDataParams = {
  q?: string;
  sort?: string;
  fields?: Partial<AttributeData>;
};
