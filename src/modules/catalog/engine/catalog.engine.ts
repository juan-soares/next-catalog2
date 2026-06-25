/**
 * Responsável por transformar um tipo de mídia em sua configuração de interface.
 * Ele decide quais abas e estrutura serão usadas em cada tipo de conteúdo do CATFLIX.
 * O sistema inteiro depende dessa função para montar a experiência do usuário.
 */

import { MediaType } from "@/modules/media-types/types";
import { contentConfigMap } from "../registry";
import { ContentStructure, TabType } from "../types";

export type ContentConfig = {
  tabs: TabType[];
  structure: ContentStructure;
  labels: {
    groupLabel: string;
    itemLabel: string;
  };
};

export function resolveContentConfig(mediaType: MediaType): ContentConfig {
  const config = contentConfigMap[mediaType];

  if (!config) {
    throw new Error(`ContentConfig not found for MediaType: ${mediaType}`);
  }

  return config;
}
