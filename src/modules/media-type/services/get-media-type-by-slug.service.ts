import { notFound } from "next/navigation";
import { mediaTypesRegistry } from "../registry";
import { MediaTypeKey } from "../types";

export function getMediaTypeBySlug(slug: string) {
  const mediaType = mediaTypesRegistry[slug as MediaTypeKey];

  if (!mediaType) return notFound();

  return mediaType;
}
