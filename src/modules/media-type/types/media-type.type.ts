/**
 * O que este arquivo faz
 * ----------------------
 * Define os contratos relacionados aos tipos de mídia
 * e aos módulos responsáveis por cada tipo.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não registra MediaTypes.
 * - Não implementa módulos.
 * - Não conhece páginas específicas.
 * - Não possui regras de negócio.
 */

import {
  CatalogFilter,
  CatalogListItem,
  CatalogQuery,
} from "@/modules/catalog";
import { ComponentType, JSX } from "react";

export interface MediaType {
  slug: string;
  label: string;

  catalog: {
    getFilters: () => Promise<CatalogFilter[]>;
    getResults: (query: CatalogQuery) => Promise<CatalogListItem[]>;
  };

  admin: {
    NewMediaItemForm: ComponentType;
  };
}
