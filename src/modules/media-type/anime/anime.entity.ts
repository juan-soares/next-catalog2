/**
 * O que este arquivo faz:
 * - Define a entidade de domínio Anime.
 * - Representa um anime dentro das regras da aplicação.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece MongoDB.
 * - Não conhece Mongoose.
 * - Não conhece UI.
 * - Não gera slug automaticamente.
 */

export type Anime = {
  /**
   * Identificador público utilizado em URLs.
   *
   * Exemplo:
   * naruto-shippuden
   */
  slug: string;

  /**
   * Título principal da obra.
   */
  title: string;

  /**
   * Título alternativo/traduzido.
   */
  translatedTitle?: string;

  /**
   * Data de lançamento.
   */
  releaseDate: Date;

  /**
   * Caminho público da capa.
   */
  cover: string;

  /**
   * Caminho público do trailer.
   */
  trailer: string;
};
