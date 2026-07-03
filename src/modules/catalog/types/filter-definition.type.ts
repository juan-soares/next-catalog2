/**
 * Define a estrutura de um filtro de catálogo.
 *
 * Responsabilidade
 * - Representar um filtro disponível em um catálogo.
 * - Definir como os valores do filtro são obtidos.
 * - Servir como fonte de configuração para o parser,
 *   repositório e interface.
 *
 * Não deve
 * - Conter os valores do filtro.
 * - Executar consultas diretamente ao banco de dados.
 * - Conhecer componentes React.
 */

export type FilterOption = {
  /**
   * Valor utilizado na URL.
   */
  value: string;

  /**
   * Nome exibido ao usuário.
   */
  label: string;
};

export type FilterDefinition = {
  /**
   * Identificador único do filtro.
   *
   * Exemplo:
   * language
   */
  key: string;

  /**
   * Nome exibido ao usuário.
   */
  label: string;

  /**
   * Retorna os valores disponíveis para este filtro.
   */
  getOptions(): Promise<FilterOption[]>;
};
