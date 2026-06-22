/**
 * Conjunto de padrões reutilizáveis de configuração do CATFLIX.
 * Cada preset define regras comuns de estrutura e organização da interface,
 * evitando repetição no registro de configuração por tipo de mídia.
 *
 * Esses presets são usados como base no Content Registry e não devem ser modificados
 * por MediaType individual.
 */

import type { ContentConfig } from "../engine/content-engine";

export const seasonBasedPreset: Omit<ContentConfig, "tabs"> = {
  structure: "season-based",
  labels: {
    groupLabel: "Temporada",
    itemLabel: "Episódio",
  },
};

export const flatPreset: Omit<ContentConfig, "tabs"> = {
  structure: "flat",
  labels: {
    groupLabel: "Grupo",
    itemLabel: "Item",
  },
};

export const chapterPreset: Omit<ContentConfig, "tabs"> = {
  structure: "flat",
  labels: {
    groupLabel: "Volume",
    itemLabel: "Capítulo",
  },
};

export const trackPreset: Omit<ContentConfig, "tabs"> = {
  structure: "flat",
  labels: {
    groupLabel: "Álbum",
    itemLabel: "Faixa",
  },
};
