/**
 * Define a estrutura de um catálogo dentro da aplicação.
 *
 * Responsabilidade
 * - Definir como os MediaItems são listados.
 * - Centralizar regras de filtros, ordenação e paginação.
 * - Expor o serviço responsável por buscar os itens.
 *
 * Não deve
 * - Conhecer UI
 * - Conhecer Next.js
 * - Conter dados
 */

import type { CatalogQuery } from "./catalog-query.type";
import type { CatalogSort } from "./catalog-sort.type";
import type { FilterDefinition } from "./filter-definition.type";
import type { CatalogResult } from "./catalog-result.type";

export type CatalogDefinition<T = any> = {
  /**
   * Data behavior
   */
  getItems: (query: CatalogQuery) => Promise<CatalogResult<T>>;

  /**
   * UI capabilities
   */
  search: {
    enabled: boolean;
  };

  sort: {
    default: CatalogSort;
    options: CatalogSort[];
  };

  filters: FilterDefinition[];
};
