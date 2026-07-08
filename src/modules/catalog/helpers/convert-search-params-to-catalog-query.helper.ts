/**
 * O que este arquivo faz:
 * - Converte searchParams do Next.js em CatalogQuery.
 * - Atua como camada de adaptação entre framework e domínio.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece MediaType.
 * - Não acessa banco de dados.
 * - Não contém regras de negócio de catálogo.
 * - Não interpreta comportamento de filtros.
 */

import type { CatalogQuery, CatalogSort } from "../types";

type SearchParams = {
  q?: string;
  sort?: string;
};

export function convertSearchParamsToCatalogQuery(
  searchParams: SearchParams,
): CatalogQuery {
  const query: CatalogQuery = {};

  const q = searchParams.q?.trim();

  if (q) {
    query.q = q;
  }

  const sort = searchParams.sort?.trim();

  if (sort === "alph" || sort === "updated" || sort === "released") {
    query.sort = sort as CatalogSort;
  }

  return query;
}
