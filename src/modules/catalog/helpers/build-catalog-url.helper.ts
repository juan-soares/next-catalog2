/**
 * Responsável por construir URLs do catálogo.
 *
 * Centraliza toda lógica de query string do catálogo,
 * incluindo busca, ordenação, paginação e filtros futuros.
 *
 * Recebe o estado completo do catálogo e transforma
 * em uma URL válida.
 */

import type { CatalogQuery } from "../types";

type Params = CatalogQuery & {
  pathname?: string;
};

export function buildCatalogUrl({
  q,
  sort,
  page,
  pathname = "",
}: Params): string {
  const searchParams = new URLSearchParams();

  if (q) {
    searchParams.set("q", q);
  }

  if (sort) {
    searchParams.set("sort", sort);
  }

  if (page) {
    searchParams.set("page", page);
  }

  const queryString = searchParams.toString();

  return queryString ? `${pathname}?${queryString}` : pathname;
}
