import { notFound } from "next/navigation";
import { mediaTypesRegistry } from "../registry";
import { MediaType, MediaTypeKey } from "../types";

export function getMediaTypeConfigBySlug(slug: string): MediaType {
  const mediaType = mediaTypesRegistry[slug as MediaTypeKey];

  if (!mediaType) return notFound();

  return mediaType;
}
