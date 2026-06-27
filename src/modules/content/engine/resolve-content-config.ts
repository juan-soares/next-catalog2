/**
 * Responsável por transformar um MediaType em sua configuração
 * estrutural de conteúdo dentro do CATFLIX.
 *
 * Define quais abas e estruturas serão utilizadas para cada tipo
 * de mídia através do Content Registry.
 *
 * O comportamento é derivado por código e nunca persistido no banco.
 */

import { contentConfigMap } from "../registry";
import type { ContentConfig } from "../types";
import type { MediaType } from "@/modules/media-types";

export function resolveContentConfig(mediaType: MediaType): ContentConfig {
  const config = contentConfigMap[mediaType];

  if (!config) {
    throw new Error(`ContentConfig not found for MediaType: ${mediaType}`);
  }

  return config;
}
