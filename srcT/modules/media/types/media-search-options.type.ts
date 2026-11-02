import type { AttributeTypeFieldCode } from "@/modules/attribute/types";
import type { MediaSortOptionKey } from "@/modules/media/types";

export type MediaSearchOptions = {
  term?: string;
  sort: MediaSortOptionKey;
  filters: Partial<Record<AttributeTypeFieldCode, string[]>>;
};
