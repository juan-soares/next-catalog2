/**
 * O que este arquivo faz:
 * - Define a entidade de domínio Language.
 * - Representa um idioma disponível no catálogo.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece MongoDB.
 * - Não conhece Mongoose.
 * - Não conhece filtros.
 * - Não conhece UI.
 */

export type Language = {
  /**
   * Valor estável utilizado em URLs e filtros.
   *
   * Exemplo:
   * portuguese-br
   */
  value: string;

  /**
   * Texto apresentado ao usuário.
   *
   * Exemplo:
   * Português (Brasil)
   */
  label: string;
};
