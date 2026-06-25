import { mediaTypeRegistry } from "../registry";
import { MediaType } from "../types";

/**
 * Retorna todos os MediaTypes registrados juntamente com seus metadados.
 */
export function getMediaTypeEntries() {
  return Object.entries(mediaTypeRegistry) as [
    MediaType,
    (typeof mediaTypeRegistry)[MediaType],
  ][];
}
