import type { MediaTypeCode } from "@/modules/media-type/types";
import { MEDIA_TYPE_REGISTRY } from "@/modules/media-type/consts";

export const MEDIA_TYPES_CODE_LIST: MediaTypeCode[] = Object.values(
  MEDIA_TYPE_REGISTRY,
).map(({ code }) => code);
