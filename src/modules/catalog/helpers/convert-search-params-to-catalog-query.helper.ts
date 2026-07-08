/**
 * O que este arquivo faz:
 * - Converte searchParams do Next.js em CatalogQuery.
 * - Atua como camada de adaptação entre framework e domínio.
 * - Normaliza busca, ordenação e filtros recebidos pela URL.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece MediaType.
 * - Não acessa banco de dados.
 * - Não valida filtros específicos de um catálogo.
 * - Não define comportamento de catálogo.
 */

import type { CatalogQuery, CatalogSort } from "../types";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export function convertSearchParamsToCatalogQuery(
  searchParams: SearchParams,
): CatalogQuery {
  const query: CatalogQuery = {};

  const q = searchParams.q;

  if (typeof q === "string") {
    const normalizedQuery = q.trim();

    if (normalizedQuery) {
      query.q = normalizedQuery;
    }
  }

  const sort = searchParams.sort;

  if (
    typeof sort === "string" &&
    (sort === "alph" || sort === "updated" || sort === "released")
  ) {
    query.sort = sort as CatalogSort;
  }

  const filters: Record<string, string[]> = {};

  Object.entries(searchParams).forEach(([key, value]) => {
    if (key === "q" || key === "sort") {
      return;
    }

    if (typeof value === "string" && value.trim()) {
      filters[key] = [value];
    }

    if (Array.isArray(value)) {
      const values = value.map((item) => item.trim()).filter(Boolean);

      if (values.length) {
        filters[key] = values;
      }
    }
  });

  if (Object.keys(filters).length) {
    query.filters = filters;
  }

  return query;
}
