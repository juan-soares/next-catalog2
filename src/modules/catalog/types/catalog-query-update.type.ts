/**
 * O que este arquivo faz:
 * - Define o contrato para alterações em uma consulta de catálogo.
 * - Representa apenas os campos que devem ser modificados.
 * - Serve como entrada para operações que atualizam uma CatalogQuery.
 *
 * O que este arquivo NÃO faz:
 * - Não representa uma consulta completa.
 * - Não contém lógica de atualização.
 * - Não conhece URL.
 * - Não conhece Next.js.
 */

import type { CatalogSort } from "./catalog-sort.type";

export type CatalogQueryUpdate = {
  /**
   * Novo texto da busca.
   */
  q?: string;

  /**
   * Nova ordenação do catálogo.
   */
  sort?: CatalogSort;

  /**
   * Nova página do catálogo.
   */
  page?: number;
};
