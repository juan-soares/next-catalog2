import { MEDIA_TYPES } from "../definitions";
import { MediaTypeInfo } from "../types";

export function getMediaTypesInfo(): MediaTypeInfo[] {
  return Object.values(MEDIA_TYPES).map(({ label, slug }) => ({ label, slug }));
}
