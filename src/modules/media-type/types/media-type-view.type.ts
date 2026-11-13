import type { MediaTypeCode } from "@/modules/media-type/types";
import type { MediaTypeGroupCode } from "@/modules/media-type-group/types";

export type MediaTypeView = {
  code: MediaTypeCode;
  label: string;
  slug: string;
  group: MediaTypeGroupCode;
};
