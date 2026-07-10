/**
 * O que este arquivo faz:
 * - Define o contrato de uma opção de atributo.
 * - Representa um valor disponível para seleção em filtros.
 *
 * O que este arquivo NÃO faz:
 * - Não busca dados.
 * - Não conhece banco de dados.
 * - Não conhece MediaType.
 * - Não define regras de filtro.
 */

export type AttributeOption = {
  /**
   * Valor utilizado na URL e nas consultas do catálogo.
   */
  value: string;

  /**
   * Texto exibido para o usuário.
   */
  label: string;
};
