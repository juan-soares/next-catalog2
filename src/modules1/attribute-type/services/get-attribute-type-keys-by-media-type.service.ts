import { MediaTypeKey } from "@/modules1/media-type";
import { AttributeTypeKey } from "../types";
import { MEDIA_TYPE_ATTRIBUTES } from "@/modules1/media-type";

export function getAttributeTypeKeysByMediaType(
  mediaType: MediaTypeKey,
): AttributeTypeKey[] {
  return MEDIA_TYPE_ATTRIBUTES[mediaType];
}
