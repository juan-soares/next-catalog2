import { MediaTypeKey } from "@/modules/media-type";
import { AttributeTypeKey } from "../types";
import { MEDIA_TYPE_ATTRIBUTES } from "@/modules/media-type";

export function getAttributeTypeKeysByMediaType(
  mediaType: MediaTypeKey,
): AttributeTypeKey[] {
  return MEDIA_TYPE_ATTRIBUTES[mediaType];
}
