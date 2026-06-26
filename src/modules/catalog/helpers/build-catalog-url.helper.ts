/**
 * Responsável por construir URLs do catálogo.
 *
 * Centraliza toda lógica de query string do catálogo,
 * incluindo busca, ordenação, paginação e filtros futuros.
 */

import type { CatalogSort } from "../types";

type Params = {
  q?: string;
  sort?: CatalogSort;
  page?: string;
};

export function buildCatalogUrl(params: Params): string {
  const searchParams = new URLSearchParams();

  if (params.q) {
    searchParams.set("q", params.q);
  }

  if (params.sort) {
    searchParams.set("sort", params.sort);
  }

  if (params.page) {
    searchParams.set("page", params.page);
  }

  const queryString = searchParams.toString();

  return queryString ? `?${queryString}` : "";
}
