import { MEDIA_TYPES_REGISTRY } from "@/modules/media-type/consts";
import type { MediaTypeCode } from "@/modules/media-type/types";

export const MEDIA_TYPE_CODES = Object.keys(
  MEDIA_TYPES_REGISTRY,
) as MediaTypeCode[];
