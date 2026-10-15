import { AttributeTypeFieldCode } from "@/modules/attribute";

export type MediaSearchParamsFilters = Partial<
  Record<AttributeTypeFieldCode, string[]>
>;
