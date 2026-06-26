/**
 * Representa os parâmetros de consulta do catálogo.
 *
 * É a fonte de verdade para busca, ordenação, filtros e paginação do catálogo.
 * É utilizado para transportar o estado da URL entre a página e os componentes do catálogo.
 */

import { CatalogSort } from "./catalog-sort.type";

export type CatalogQuery = {
  q?: string;
  sort?: CatalogSort;
  page?: string;
};
