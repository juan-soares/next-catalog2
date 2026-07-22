import { notFound } from "next/navigation";
import { mediaTypesRegistry } from "../registry";

export function getMediaTypeBySlug(slug: string) {
  const mediaType = mediaTypesRegistry[slug];

  if (!mediaType) return notFound();

  return mediaType;
}
