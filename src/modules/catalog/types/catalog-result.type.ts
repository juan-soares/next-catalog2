/**
 * O que este arquivo faz:
 * - Define o contrato de retorno de uma consulta ao catálogo.
 * - Padroniza a estrutura de resultados entre os diferentes MediaTypes.
 *
 * O que este arquivo NÃO faz:
 * - Não representa entidades de domínio.
 * - Não conhece MediaTypes.
 * - Não executa buscas.
 * - Não contém regras de negócio.
 */

import type { CatalogItem } from "./catalog-item.type";

export type CatalogResult = {
  /**
   * Itens retornados pela consulta.
   */
  items: CatalogItem[];
};
