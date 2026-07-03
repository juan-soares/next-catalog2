/**
 * Parser responsável por transformar searchParams da URL
 * em um CatalogQuery válido e seguro.
 *
 * Responsabilidade
 * - Normalizar query da URL
 * - Filtrar parâmetros inválidos com base no MediaTypeDefinition
 * - Garantir que o CatalogQuery seja consistente
 *
 * Não deve
 * - Executar consultas
 * - Conhecer MongoDB ou repositories
 * - Retornar dados de catálogo
 */

import type { CatalogQuery } from "../types/catalog-query.type";
import type { CatalogSort } from "../types/catalog-sort.type";
import type { MediaTypeDefinition } from "../../media-types/types/media-types-definition.type";

export function parseCatalogQuery(
  searchParams: Record<string, string | string[] | undefined>,
  definition: MediaTypeDefinition,
): CatalogQuery {
  const q = typeof searchParams.q === "string" ? searchParams.q : undefined;

  const page =
    typeof searchParams.page === "string"
      ? Number(searchParams.page)
      : undefined;

  const sort =
    typeof searchParams.sort === "string"
      ? (searchParams.sort as CatalogSort)
      : undefined;

  /**
   * Filtragem baseada no MediaTypeDefinition
   * (ESSENCIAL para evitar filtros inválidos)
   */
  const allowedFilterKeys = definition.catalog.filters.map(
    (filter) => filter.key,
  );

  const filters: Record<string, string[]> = {};

  for (const key of allowedFilterKeys) {
    const value = searchParams[key];

    if (!value) continue;

    filters[key] = Array.isArray(value) ? value : [value];
  }

  return {
    q,
    page: Number.isNaN(page) ? undefined : page,
    sort,
    filters,
  };
}
