/**
 * Funções utilitárias para consultar informações dos MediaTypes.
 *
 * Este módulo centraliza operações de leitura sobre o MediaTypeRegistry,
 * como listagem, obtenção de metadados e resolução de um MediaType
 * a partir de seu slug.
 */

import type { MediaType } from "../types";
import { getMediaTypeEntries } from "./get-media-type-entries.helper";

/**
 * Resolve um MediaType a partir do slug utilizado na URL.
 */
export function findMediaTypeBySlug(slug: string): MediaType | undefined {
  return getMediaTypeEntries().find(([, meta]) => meta.slug === slug)?.[0];
}
