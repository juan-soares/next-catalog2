/**
 * O que este arquivo faz
 * ----------------------
 * Resolve o valor de ordenação do catálogo.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não monta o CatalogQuery completo.
 * - Não conhece Next.js.
 * - Não acessa banco.
 * - Não executa a ordenação.
 */

import { SORT_OPTIONS } from "../consts";
import type { CatalogSortOptions } from "../types";

const DEFAULT_SORT: CatalogSortOptions = "alph";

export function buildSort(value?: string): CatalogSortOptions {
  const selectedSort = SORT_OPTIONS.find((option) => option.value === value);

  return selectedSort?.value ?? DEFAULT_SORT;
}
