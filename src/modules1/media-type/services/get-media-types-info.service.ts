import { MEDIA_TYPES } from "../definitions";
import { MediaTypeInfo, MediaTypeKey } from "../types";

export function getMediaTypesInfo(): MediaTypeInfo[] {
  return Object.entries(MEDIA_TYPES).map(([key, info]) => ({
    key: key as MediaTypeKey,
    ...info,
  }));
}
