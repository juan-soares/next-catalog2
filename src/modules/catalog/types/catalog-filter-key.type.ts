/**
 * Chaves de filtros suportadas pelo catálogo.
 *
 * Representam apenas a identidade do filtro.
 * Não carregam informações de UI nem de persistência.
 */

export const catalogFilterKeys = [
  "genre",
  "theme",
  "language",
  "platform",
  "game-mode",
  "game-environment",
  "resolution",
] as const;

export type CatalogFilterKey = (typeof catalogFilterKeys)[number];
