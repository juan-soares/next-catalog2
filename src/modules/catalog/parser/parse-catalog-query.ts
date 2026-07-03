/**
 * Catalog Query Parser
 *
 * Converte searchParams da URL em CatalogQuery válido.
 *
 * Regras:
 * - Não acessa banco
 * - Não depende de registry
 * - Apenas normaliza input
 * - Filtra apenas keys permitidas pelo MediaType
 */

import type { CatalogQuery, CatalogSort } from "../types";

import type { FilterDefinition } from "../types/filter-definition.type";

type SearchParams = Record<string, string | string[] | undefined>;

export function parseCatalogQuery(
  searchParams: SearchParams,
  allowedFilters: FilterDefinition[] = [],
): CatalogQuery {
  /**
   * -----------------------
   * SAFE FILTERS
   * -----------------------
   */
  const safeFilters = Array.isArray(allowedFilters)
    ? allowedFilters.filter(Boolean)
    : [];

  const allowedKeys = new Set(safeFilters.map((filter) => filter.key));

  /**
   * -----------------------
   * QUERY (q)
   * -----------------------
   */
  const q = typeof searchParams.q === "string" ? searchParams.q : undefined;

  /**
   * -----------------------
   * SORT
   * -----------------------
   */
  const sort: CatalogSort =
    typeof searchParams.sort === "string"
      ? (searchParams.sort as CatalogSort)
      : "updated";

  /**
   * -----------------------
   * PAGE
   * -----------------------
   */
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  /**
   * -----------------------
   * FILTERS
   * -----------------------
   */
  const filters: Record<string, string[]> = {};

  for (const key in searchParams) {
    if (!allowedKeys.has(key)) continue;

    const value = searchParams[key];
    if (!value) continue;

    filters[key] = Array.isArray(value) ? value : [value];
  }

  return {
    q,
    sort,
    page,
    filters,
  };
}
