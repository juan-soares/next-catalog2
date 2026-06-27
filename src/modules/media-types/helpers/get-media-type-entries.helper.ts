/**
 * Retorna todas as definições de MediaTypes registradas no sistema.
 *
 * Este helper expõe as entradas do MediaTypeRegistry para operações
 * de consulta, como resolução por slug e navegação entre tipos de mídia.
 *
 * Não altera o registry.
 * Não cria novas definições.
 */

import { mediaTypeRegistry } from "../registry";
import type { MediaType } from "../types";
import type { MediaTypeDefinition } from "../types/media-types-definition.type";

export function getMediaTypeEntries() {
  return Object.entries(mediaTypeRegistry) as [
    MediaType,
    MediaTypeDefinition,
  ][];
}
