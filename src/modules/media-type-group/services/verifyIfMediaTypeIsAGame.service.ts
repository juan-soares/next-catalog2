import { MEDIA_TYPES_REGISTRY } from "@/modules/media-type/consts";
import type { MediaTypeCode } from "@/modules/media-type/types";

export function verifyIfMediaTypeIsAGame(code: MediaTypeCode): boolean {
  return MEDIA_TYPES_REGISTRY[code].group === "game";
}
