import type { AttributeTypeCode } from "@/modules/attribute/types";
import type { MediaTabCode } from "@/modules/media-tab/types";
import type { MediaTypeCode } from "@/modules/media-type/types";

export type MediaTypeDetails = {
  code: MediaTypeCode;
  label: string;
  slug: string;
  path: string;
  tabs: MediaTabCode[];
  filters: AttributeTypeCode[];
};
