import { AttributeTypeCode } from "@/modules/attribute";
import { MediaTabCode } from "@/modules/media-tab";
import { MediaTypeCode } from "@/modules/media-type";

export type MediaTypeDetails = {
  code: MediaTypeCode;
  label: string;
  slug: string;
  path: string;
  tabs: MediaTabCode[];
  filters: AttributeTypeCode[];
};
