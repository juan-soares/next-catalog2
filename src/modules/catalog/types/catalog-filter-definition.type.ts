/**
 * Define um filtro disponível no catálogo.
 *
 * Um filtro não é apenas uma string:
 * ele é uma entidade com comportamento.
 */

export type CatalogFilterDefinition = {
  /**
   * Nome do filtro na URL e no Query
   * Ex: genre, platform, language
   */
  key: string;

  /**
   * Label exibido na UI
   */
  label: string;

  /**
   * Tipo de input da UI
   */
  type: "multi-select" | "single-select" | "boolean";

  /**
   * Valores possíveis do filtro
   * (controlado por attributes module ou static config)
   */
  options?: {
    label: string;
    value: string;
  }[];
};
