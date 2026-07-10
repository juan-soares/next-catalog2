/**
 * O que este arquivo faz:
 * - Define os contratos utilizados para representar filtros do catálogo.
 * - Padroniza grupos e opções de filtros entre MediaTypes e UI.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece banco.
 * - Não conhece repositories.
 * - Não conhece UI específica.
 * - Não executa regras de filtragem.
 */

export type FilterGroup = {
  /**
   * Identificador técnico do atributo.
   *
   * Exemplo:
   * genre
   */
  key: string;

  /**
   * Segmento utilizado nas URLs relacionadas ao atributo.
   *
   * Exemplo:
   * generos
   */
  slug: string;

  /**
   * Texto exibido ao usuário.
   *
   * Exemplo:
   * Gêneros
   */
  label: string;

  options: FilterOption[];
};

export type FilterOption = {
  label: string;
  value: string;
  selected?: boolean;
};
