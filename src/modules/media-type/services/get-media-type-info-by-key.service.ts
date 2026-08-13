import { notFound } from "next/navigation";
import { MediaTypeInfo, MediaTypeKey } from "../types";
import { MEDIA_TYPES } from "../definitions";

export function getMediaTypeInfoByKey(key: MediaTypeKey): MediaTypeInfo {
  const mediaType = MEDIA_TYPES[key];

  if (!mediaType) return notFound();

  return { label: mediaType.label, slug: mediaType.slug };
}
