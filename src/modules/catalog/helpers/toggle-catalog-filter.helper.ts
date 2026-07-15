/**
 * O que este arquivo faz:
 * - Calcula a alteração necessária quando uma opção de filtro é selecionada.
 * - Controla adicionar ou remover valores de filtros existentes.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece componentes.
 * - Não conhece URL.
 * - Não renderiza nada.
 * - Não acessa banco.
 */

import type { CatalogQuery } from "../types";

type ToggleCatalogFilterInput = {
  query: CatalogQuery;
  key: string;
  value: string;
};

export function toggleCatalogFilter({
  query,
  key,
  value,
}: ToggleCatalogFilterInput) {
  const currentValues = query.filters?.[key] ?? [];

  const values = currentValues.includes(value)
    ? currentValues.filter((item) => item !== value)
    : [...currentValues, value];

  return {
    filters: {
      ...query.filters,
      [key]: values,
    },
  };
}
