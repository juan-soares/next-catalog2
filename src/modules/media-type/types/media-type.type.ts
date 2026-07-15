/**
 * O que este arquivo faz:
 * - Define o contrato obrigatório de um MediaType.
 * - Garante consistência entre todos os módulos (animes, movies, etc.).
 *
 * O que este arquivo NÃO faz:
 * - Não contém lógica de execução.
 * - Não busca dados.
 * - Não conhece implementação de nenhum MediaType específico.
 */

import { CatalogQuery, CatalogResult } from "@/modules/catalog/types";
import { CatalogItem, FilterGroup } from ".";
import { ComponentType } from "react";

export type MediaType = {
  slug: string;
  label: string;

  /**
   * Retorna filtros prontos para UI,
   * já com opções e estado selecionado baseado na consulta.
   */
  getFilters: (query: CatalogQuery) => Promise<FilterGroup[]>;

  /**
   * Retorna itens do catálogo baseado na consulta.
   */
  getItems: (query: CatalogQuery) => Promise<CatalogResult>;

  admin: {
    create: ComponentType;
  };
};
