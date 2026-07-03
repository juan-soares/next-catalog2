/**
 * Define a estrutura de um MediaType dentro da aplicação.
 *
 * Responsabilidade
 * - Representar a definição completa de um tipo de mídia.
 * - Centralizar a configuração utilizada pela aplicação para
 *   construir páginas de catálogo e de detalhes.
 * - Servir como fonte de verdade para o comportamento daquele
 *   domínio (Animes, Filmes, Séries, etc.).
 *
 * Não deve
 * - Conter dados provenientes do banco de dados.
 * - Executar consultas ao banco de dados.
 * - Conter regras específicas de interface.
 * - Armazenar estado da aplicação.
 */

import type { CatalogDefinition } from "@/modules/catalog";
import type { MediaItemDefinition } from "@/modules/media-item";

export type MediaTypeDefinition = {
  /**
   * Identificador utilizado na URL.
   *
   * Exemplo:
   * /animes
   */
  slug: string;

  /**
   * Nome exibido para o usuário.
   *
   * Exemplo:
   * Animes
   */
  label: string;

  /**
   * Define o comportamento da página de catálogo deste MediaType.
   */
  catalog: CatalogDefinition;

  /**
   * Define o comportamento da página de detalhes dos MediaItems
   * pertencentes a este MediaType.
   */
  item: MediaItemDefinition;
};
