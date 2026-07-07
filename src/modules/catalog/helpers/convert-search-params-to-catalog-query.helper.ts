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
 *
 *  * Observação:
 * - O catálogo trabalha com valores únicos por parâmetro.
 * - Múltiplos valores enviados pela URL não fazem parte do contrato do domínio.
 */

import type { CatalogQuery, CatalogSort } from "../types";

type SearchParams = {
  q?: string;
  sort?: string;
  page?: string;
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
    const catalogSort: CatalogSort = sort;

    query.sort = catalogSort;
  }

  const page = Number(searchParams.page);
  if (Number.isInteger(page) && page >= 1) {
    query.page = page;
  }

  return query;
}
