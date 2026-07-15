import { mediaTypesRegistry } from "../media-types.registry";
import { MediaType, MediaTypeSlug } from "../types";

export function getMediaTypeBySlug(slug: string): MediaType | null {
  return mediaTypesRegistry[slug as MediaTypeSlug] ?? null;
}
