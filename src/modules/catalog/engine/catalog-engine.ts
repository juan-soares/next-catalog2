/**
 * Catalog Engine
 *
 * Responsável por orquestrar o catálogo.
 *
 * Recebe um MediaType já resolvido e um CatalogQuery
 * já validado pelo parser.
 *
 * Coordena:
 * - busca dos itens
 * - resolução dos filtros disponíveis
 */

import type { CatalogQuery, ResolvedFilters } from "../types";

import type { MediaTypeDefinition } from "@/modules/media-types";

import { getCatalogItems } from "../repository";
import { resolveFilters } from "./resolve-filters.engine";

export type CatalogResult = {
  items: any[];
  filters: ResolvedFilters;
};

type CatalogEngineParams = {
  mediaType: MediaTypeDefinition;
  query: CatalogQuery;
};

export async function catalogEngine({
  mediaType,
  query,
}: CatalogEngineParams): Promise<CatalogResult> {
  const { q, sort, page, filters } = query;

  const [items, resolvedFilters] = await Promise.all([
    getCatalogItems({
      mediaType: mediaType.type,
      q,
      sort,
      page,
      filters,
    }),

    resolveFilters(mediaType),
  ]);

  return {
    items,
    filters: resolvedFilters,
  };
}
