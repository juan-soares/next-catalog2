/**
 * MediaType helpers fornecem acesso padronizado às informações
 * registradas para cada MediaType.
 *
 * Essas funções evitam que consumidores precisem conhecer a estrutura
 * interna do MediaTypeRegistry.
 */

import { mediaTypeRegistry } from "../registry";
import type { MediaType } from "../types";

export function getMediaTypeConfig(mediaType: MediaType) {
  return mediaTypeRegistry[mediaType];
}

export function getMediaTypeLabel(mediaType: MediaType) {
  return mediaTypeRegistry[mediaType].label;
}

export function getMediaTypeSlug(mediaType: MediaType) {
  return mediaTypeRegistry[mediaType].slug;
}
