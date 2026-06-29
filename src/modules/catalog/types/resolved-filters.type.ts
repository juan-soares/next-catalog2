/**
 * Filtros já resolvidos para UI.
 *
 * Aqui NÃO existe lógica de query.
 * Apenas dados prontos para renderização.
 */

export type ResolvedFilterOption = {
  label: string;
  value: string;
};

export type ResolvedFilter = {
  key: string;
  label: string;
  options: ResolvedFilterOption[];
};

export type ResolvedFilters = ResolvedFilter[];
