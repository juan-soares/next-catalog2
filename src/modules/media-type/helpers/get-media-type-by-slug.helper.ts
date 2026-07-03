import { mediaTypesRegistry } from "../registries";
import { MediaType, MediaTypeSlug } from "../types";

export function getMediaTypeBySlug(slug: string): MediaType | null {
  return mediaTypesRegistry[slug as MediaTypeSlug] ?? null;
}
