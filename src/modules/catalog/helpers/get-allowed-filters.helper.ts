import { MediaType, mediaTypeRegistry } from "@/modules/media-types";
import { catalogFilterRegistry } from "../registry";

/**
 * Retorna filtros válidos para um MediaType
 */
export function getAllowedFilters(mediaType: MediaType) {
  const mediaTypeConfig = mediaTypeRegistry[mediaType];

  if (!mediaTypeConfig) return [];

  return mediaTypeConfig.filters
    .map((key) => catalogFilterRegistry[key])
    .filter(Boolean);
}
