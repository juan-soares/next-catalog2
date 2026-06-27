/**
 * Responsável por transformar os parâmetros da URL
 * em um CatalogQuery válido para o domínio do catálogo.
 *
 * Centraliza a validação e normalização dos parâmetros
 * recebidos pelo App Router, impedindo que outras camadas
 * conheçam a estrutura dos searchParams do Next.js.
 *
 * Faz:
 * - validar parâmetros conhecidos;
 * - normalizar valores;
 * - descartar valores inválidos.
 *
 * Não faz:
 * - consultar banco de dados;
 * - aplicar regras de negócio;
 * - montar URLs.
 */

import type { CatalogQuery, CatalogSort } from "../types";

type SearchParams = Record<string, string | string[] | undefined>;

const VALID_SORTS: readonly CatalogSort[] = [
  "alph",
  "updated",
  "released",
] as const;

export function parseCatalogQuery(searchParams: SearchParams): CatalogQuery {
  return {
    q: parseString(searchParams.q),
    sort: parseSort(searchParams.sort),
    page: parsePage(searchParams.page),
  };
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

function parsePage(value: string | string[] | undefined): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const normalized = value.trim();

  return /^\d+$/.test(normalized) ? normalized : undefined;
}
