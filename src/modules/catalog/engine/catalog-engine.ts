/**
 * Catalog Engine
 *
 * Responsável por orquestrar a busca de itens do catálogo
 * a partir de um CatalogQuery já validado pelo parser.
 *
 * Ele aplica:
 * - filtros
 * - ordenação
 * - paginação
 *
 * e delega a busca ao repository.
 */

import type { CatalogQuery } from "../types";
import type { MediaTypeDefinition } from "@/modules/media-types";
import { getCatalogItems } from "../repository";

type Params = {
  mediaType: MediaTypeDefinition;
  query: CatalogQuery;
};

export async function catalogEngine({ mediaType, query }: Params) {
  const { q, sort, page, filters } = query;

  const result = await getCatalogItems({
    mediaType: mediaType.type,
    q,
    sort,
    page,
    filters,
  });

  return {
    items: result,
  };
}
