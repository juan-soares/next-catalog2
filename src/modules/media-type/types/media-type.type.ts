import type { MediaTypeCode, MediaTypeGroup } from "@/modules/media-type/types";

export type MediaType = {
  code: MediaTypeCode;
  groupType: MediaTypeGroup;
  label: string;
  slug: string;
};
