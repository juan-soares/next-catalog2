/**
 * O que este arquivo faz:
 * - Define o contrato de um item exibido no catálogo.
 * - Padroniza as informações apresentadas pela interface.
 *
 * O que este arquivo NÃO faz:
 * - Não representa entidades de domínio.
 * - Não conhece MediaTypes.
 * - Não conhece banco de dados.
 * - Não executa regras de negócio.
 */

export type CatalogItem = {
  /**
   * URL pública do item.
   *
   * Exemplo:
   * /animes/naruto-2002
   */
  href: string;

  /**
   * URL pública da imagem de capa.
   */
  cover: string;

  /**
   * Título principal exibido.
   */
  title: string;

  /**
   * Ano de lançamento exibido ao usuário.
   */
  releaseYear: number;
};
