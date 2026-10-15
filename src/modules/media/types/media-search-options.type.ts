import { AttributeTypeFieldCode } from "@/modules/attribute";
import { MediaSortOptionKey } from "@/modules/media/types";

export type MediaSearchOptions = {
  term?: string;
  sort: MediaSortOptionKey;
  filters: Partial<Record<AttributeTypeFieldCode, string[]>>;
};
