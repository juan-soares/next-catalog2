/**
 * Representa a definição estrutural de um MediaType
 * dentro do CATFLIX.
 *
 * Esta definição é usada pelo registry como fonte
 * oficial de comportamento do tipo de mídia.
 */

import { MediaType } from "./media-type.type";

export type MediaTypeDefinition = {
  /**
   * Identificador interno do MediaType
   */
  type: MediaType;

  /**
   * Label exibido na interface
   */
  label: string;

  /**
   * Slug usado em rotas
   */
  slug: string;

  /**
   * Lista de filtros disponíveis para este MediaType
   *
   * Esses filtros são usados pelo Catalog Engine para:
   * - validar query params da URL
   * - definir filtros disponíveis na UI
   * - guiar construção de queries no repository
   */
  filters: string[];
};
