/**
 * O que este arquivo faz
 * ----------------------
 * Constrói a ordenação utilizada na consulta de MediaItems.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não acessa banco.
 * - Não executa consultas.
 * - Não interpreta searchParams.
 * - Não conhece MediaTypes.
 */

import type { CatalogSortOptions } from "@/modules/catalog";
import { SortOrder } from "mongoose";

export function buildMongoSort(sort: CatalogSortOptions):Record<string, SortOrder> {
  switch (sort) {
    case "alph":
      return {
        title: 1,
      };

    case "recent":
      return {
        updatedAt: -1,
      };

    case "release":
      return {
        releaseDate: -1,
      };
  }
}
