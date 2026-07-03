/**
 * Resultado padrão de qualquer catálogo no sistema.
 *
 * Responsabilidade
 * - Representar o retorno de uma listagem de MediaItems.
 * - Padronizar paginação e estrutura de resposta.
 *
 * Não deve
 * - Conter lógica de filtro.
 * - Conhecer UI.
 */

export type CatalogResult<TItem = unknown> = {
  items: TItem[];

  total: number;

  page: number;

  pageSize: number;
};
