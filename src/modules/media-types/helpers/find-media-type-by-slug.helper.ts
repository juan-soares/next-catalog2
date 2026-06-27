/**
 * Funções utilitárias para consultar informações dos MediaTypes.
 *
 * Este módulo centraliza operações de leitura sobre o MediaTypeRegistry,
 * como resolução de uma definição de MediaType a partir do slug utilizado
 * nas rotas do CATFLIX.
 */

import type { MediaTypeDefinition } from "../types";
import { getMediaTypeEntries } from "./get-media-type-entries.helper";

/**
 * Resolve uma definição de MediaType a partir do slug utilizado na URL.
 */
export function findMediaTypeBySlug(
  slug: string,
): MediaTypeDefinition | undefined {
  return getMediaTypeEntries().find(
    ([, definition]) => definition.slug === slug,
  )?.[1];
}
