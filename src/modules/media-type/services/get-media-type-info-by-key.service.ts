import { notFound } from "next/navigation";
import { mediaTypesRegistry } from "../registry";
import { MediaTypeInfo, MediaTypeKey } from "../types";

export function getMediaTypeInfoByKey(key: MediaTypeKey): MediaTypeInfo {
  const mediaType = mediaTypesRegistry[key];

  if (!mediaType) return notFound();

  return { label: mediaType.label, slug: mediaType.slug };
}
