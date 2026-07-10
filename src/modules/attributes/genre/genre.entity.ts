/**
 * O que este arquivo faz:
 * - Define a entidade de domínio Genre.
 * - Representa um gênero independente da forma como ele é armazenado.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece MongoDB.
 * - Não conhece Mongoose.
 * - Não conhece filtros.
 * - Não conhece UI.
 */

export type Genre = {
  /**
   * Valor estável utilizado em URLs e filtros.
   *
   * Exemplo:
   * action
   */
  value: string;

  /**
   * Texto apresentado ao usuário.
   *
   * Exemplo:
   * Ação
   */
  label: string;
};
