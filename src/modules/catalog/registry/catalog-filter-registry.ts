import type { CatalogFilterDefinition } from "../types/filter-definition.type";

/**
 * Registry central de filtros disponíveis no sistema.
 *
 * Filtros são globais, mas ativados por MediaType.
 */
export const catalogFilterRegistry: Record<string, CatalogFilterDefinition> = {
  genre: {
    key: "genre",
    label: "Gênero",
    type: "multi-select",
  },

  language: {
    key: "language",
    label: "Idioma",
    type: "multi-select",
  },

  platform: {
    key: "platform",
    label: "Plataforma",
    type: "multi-select",
  },

  theme: {
    key: "theme",
    label: "Tema",
    type: "multi-select",
  },
};
