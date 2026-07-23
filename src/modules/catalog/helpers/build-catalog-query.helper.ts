/**
 * O que este arquivo faz
 * ----------------------
 * Constrói um CatalogQuery completo a partir
 * dos parâmetros recebidos da URL.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não valida regras específicas de cada campo.
 * - Não acessa banco.
 * - Não conhece MediaTypes.
 * - Não executa consultas.
 */

import type { CatalogQuery, CatalogSearchParams } from "../types";

import { buildSort } from "./build-sort.helper";

export function buildCatalogQuery(
  searchParams: CatalogSearchParams,
): CatalogQuery {
  return {
    sort: buildSort(searchParams.sort),
  };
}
