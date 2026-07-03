/**
 * Representa a query de um catálogo derivada da URL.
 *
 * Responsabilidade
 * - Representar estado puro da URL.
 * - Ser consumido pelo parser e catalog.
 *
 * Não deve
 * - Conter filtros resolvidos
 * - Conter lógica de negócio
 * - Conhecer MediaType ou UI
 */

import type { CatalogSort } from "./catalog-sort.type";

export type CatalogQuery = {
  q?: string;

  sort?: CatalogSort;

  page?: number;

  filters?: Record<string, string[]>;
};
