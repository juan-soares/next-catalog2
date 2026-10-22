import type { AttributeTypeFieldCode } from "@/modules/attribute/types";

export type MediaSearchParamsFilters = Partial<
  Record<AttributeTypeFieldCode, string[]>
>;
