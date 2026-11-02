import { MEDIA_TYPES_REGISTRY } from "@/modules/media-type/consts";
import type { MediaTypeView } from "@/modules/media-type/types";

export const MEDIA_TYPE_LIST: MediaTypeView[] =
  Object.values(MEDIA_TYPES_REGISTRY);
