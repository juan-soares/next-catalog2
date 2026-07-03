/**
 * O que esse arquivo faz:
 * - Define o contrato obrigatório de um MediaType
 * - Garante consistência entre todos os módulos (animes, movies, etc.)
 *
 * O que esse arquivo NÃO faz:
 * - Não contém lógica de execução
 * - Não busca dados
 * - Não conhece implementação de nenhum MediaType específico
 */

import { CatalogResult, FilterGroup } from ".";

export type MediaType = {
  slug: string;

  label: string;

  /**
   * Retorna filtros prontos para UI,
   * já com opções e estado selecionado baseado na URL
   */
  getFilters: (query: Record<string, any>) => Promise<FilterGroup[]>;

  /**
   * Retorna itens do catálogo baseado na query da URL
   */
  getItems: (query: Record<string, any>) => Promise<CatalogResult>;
};
