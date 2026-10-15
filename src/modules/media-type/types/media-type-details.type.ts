import { MediaTabCode } from "@/modules/media-tab";
import { MediaTypeCode, MediaTypeFilterCode } from "@/modules/media-type";

export type MediaTypeDetails = {
  code: MediaTypeCode;
  label: string;
  slug: string;
  path: string;
  tabs: MediaTabCode[];
  filters: MediaTypeFilterCode[];
};
