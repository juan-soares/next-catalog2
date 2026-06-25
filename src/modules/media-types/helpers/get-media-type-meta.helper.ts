import { mediaTypeRegistry } from "../registry";
import { MediaType } from "../types";

/**
 * Retorna os metadados de um MediaType.
 */
export function getMediaTypeMeta(mediaType: MediaType) {
  return mediaTypeRegistry[mediaType];
}
