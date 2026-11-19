import type { MediaTabCode } from "@/modules/media-tab/types";
import type { MediaTypeGroupCode } from "@/modules/media-type-group/types";

export type MediaTab = {
  code: MediaTabCode;
  label: string;
  slug: string;
  group: MediaTypeGroupCode[];
};
