/**
 * O que este arquivo faz:
 * - Constrói uma URL de catálogo a partir da consulta atual e das alterações desejadas.
 * - Centraliza a geração de URLs do catálogo.
 * - Converte filtros do catálogo para parâmetros públicos da URL.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece componentes.
 * - Não conhece MediaType.
 * - Não acessa banco de dados.
 * - Não executa buscas.
 */

import type { CatalogQuery, CatalogQueryUpdate } from "../types";

export function buildCatalogUrl(
  query: CatalogQuery,
  changes: CatalogQueryUpdate,
): string {
  const nextQuery: CatalogQuery = {
    ...query,
    ...changes,
  };

  if ("q" in changes || "sort" in changes) {
    delete nextQuery.page;
  }

  const params = new URLSearchParams();

  if (nextQuery.q) {
    params.set("q", nextQuery.q);
  }

  if (nextQuery.sort) {
    params.set("sort", nextQuery.sort);
  }

  if (nextQuery.page) {
    params.set("page", String(nextQuery.page));
  }

  if (nextQuery.filters) {
    Object.entries(nextQuery.filters).forEach(([key, values]) => {
      values.forEach((value) => {
        params.append(key, value);
      });
    });
  }

  return params.toString();
}
