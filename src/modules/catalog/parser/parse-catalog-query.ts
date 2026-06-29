/**
 * Responsável por transformar os parâmetros da URL
 * em um CatalogQuery válido para o domínio do catálogo.
 *
 * Agora recebe filtros já resolvidos pelo MediaType,
 * via CatalogFilterDefinition[].
 *
 * O Catalog não conhece registry nem MediaType internamente.
 */

import type { CatalogQuery, CatalogSort } from "../types";

import type { CatalogFilterDefinition } from "../types/catalog-filter-definition.type";

type SearchParams = Record<string, string | string[] | undefined>;

const VALID_SORTS: readonly CatalogSort[] = [
  "alph",
  "updated",
  "released",
] as const;

/**
 * Agora recebe filtros já resolvidos pelo MediaType
 */
export function parseCatalogQuery(
  searchParams: SearchParams,
  allowedFilters: CatalogFilterDefinition[],
): CatalogQuery {
  const allowedKeys = allowedFilters.map((f) => f.key);

  return {
    q: parseString(searchParams.q),
    sort: parseSort(searchParams.sort),
    page: parsePage(searchParams.page),
    filters: parseFilters(searchParams, allowedKeys),
  };
}

/**
 * Filtra apenas chaves permitidas pelo MediaType
 */
function parseFilters(
  searchParams: SearchParams,
  allowedKeys: string[],
): Record<string, string[]> {
  const result: Record<string, string[]> = {};

  for (const key in searchParams) {
    if (!allowedKeys.includes(key)) continue;

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
  if (typeof value !== "string") return undefined;

  const normalized = value.trim();
  return normalized.length > 0 ? normalized : undefined;
}

function parseSort(
  value: string | string[] | undefined,
): CatalogSort | undefined {
  if (typeof value !== "string") return undefined;

  if (!VALID_SORTS.includes(value as CatalogSort)) return undefined;

  return value as CatalogSort;
}

/**
 * IMPORTANTE:
 * page continua number (corrigindo erro anterior de tipagem)
 */
function parsePage(value: string | string[] | undefined): number | undefined {
  if (typeof value !== "string") return undefined;

  const normalized = value.trim();

  if (!/^\d+$/.test(normalized)) return undefined;

  return Number(normalized);
}
