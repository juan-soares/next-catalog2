/**
 * Responsável por transformar os parâmetros da URL
 * em um CatalogQuery válido para o domínio do catálogo.
 *
 * O parser recebe as chaves de filtros permitidas para o
 * MediaType atual e descarta qualquer parâmetro inválido.
 *
 * Faz:
 * - validar busca;
 * - validar ordenação;
 * - validar paginação;
 * - validar filtros permitidos.
 *
 * Não faz:
 * - consultar banco;
 * - conhecer MediaTypeRegistry;
 * - conhecer UI;
 * - montar URLs.
 */

import type { CatalogFilterKey, CatalogQuery, CatalogSort } from "../types";

type SearchParams = Record<string, string | string[] | undefined>;

const VALID_SORTS: readonly CatalogSort[] = [
  "alph",
  "updated",
  "released",
] as const;

export function parseCatalogQuery(
  searchParams: SearchParams,
  allowedFilters: readonly CatalogFilterKey[],
): CatalogQuery {
  return {
    q: parseString(searchParams.q),
    sort: parseSort(searchParams.sort),
    page: parsePage(searchParams.page),
    filters: parseFilters(searchParams, allowedFilters),
  };
}

function parseFilters(
  searchParams: SearchParams,
  allowedFilters: readonly CatalogFilterKey[],
): Record<string, string[]> {
  const result: Record<string, string[]> = {};

  for (const key in searchParams) {
    if (!allowedFilters.includes(key as CatalogFilterKey)) {
      continue;
    }

    const value = searchParams[key];

    if (typeof value === "string") {
      const normalized = value.trim();

      if (normalized.length > 0) {
        result[key] = [normalized];
      }
    }

    if (Array.isArray(value)) {
      const normalized = value.map((v) => v.trim()).filter((v) => v.length > 0);

      if (normalized.length > 0) {
        result[key] = normalized;
      }
    }
  }

  return result;
}

function parseString(value: string | string[] | undefined): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const normalized = value.trim();

  return normalized.length > 0 ? normalized : undefined;
}

function parseSort(
  value: string | string[] | undefined,
): CatalogSort | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  if (!VALID_SORTS.includes(value as CatalogSort)) {
    return undefined;
  }

  return value as CatalogSort;
}

function parsePage(value: string | string[] | undefined): number | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const normalized = value.trim();

  if (!/^\d+$/.test(normalized)) {
    return undefined;
  }

  return Number(normalized);
}
