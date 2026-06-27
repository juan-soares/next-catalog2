/**
 * Retorna os metadados registrados de um MediaType.
 *
 * Centraliza o acesso ao MediaTypeRegistry para obter
 * informações derivadas como label e slug.
 */

import { mediaTypeRegistry } from "../registry";
import type { MediaType } from "../types";

export function getMediaTypeMeta(mediaType: MediaType) {
  return mediaTypeRegistry[mediaType];
}
