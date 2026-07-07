/**
 * O que este arquivo faz:
 * - Define o contrato da consulta do catálogo.
 * - Representa os parâmetros utilizados para buscar itens de um catálogo.
 * - Serve como contrato entre a camada de aplicação e o domínio.
 *
 * O que este arquivo NÃO faz:
 * - Não interpreta parâmetros da URL.
 * - Não contém lógica de busca.
 * - Não conhece Next.js.
 * - Não define comportamento do catálogo.
 */

import type { CatalogSort } from "./catalog-sort.type";

export type CatalogQuery = {
  /**
   * Texto utilizado para buscar itens no catálogo.
   */
  q?: string;

  /**
   * Forma de ordenação aplicada aos itens do catálogo.
   */
  sort?: CatalogSort;

  /**
   * Número da página solicitada para o catálogo.
   */
  page?: number;
};
