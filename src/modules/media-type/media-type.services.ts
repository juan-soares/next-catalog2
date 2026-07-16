/**
 * O que este arquivo faz:
 * - Resolve um MediaType através do slug recebido externamente.
 * - Converte um identificador de URL em um MediaType registrado.
 *
 * O que este arquivo NÃO faz:
 * - Não cria MediaTypes.
 * - Não conhece regras específicas de cada mídia.
 * - Não acessa banco de dados.
 * - Não renderiza UI.
 */

import { notFound } from "next/navigation";

import type { MediaType } from "./types/media-type.type";
import type { MediaTypeSlug } from "./types/media-type-slug.type";
import { mediaTypesRegistry } from "./media-types.registry";

export function getMediaTypeBySlug(slug: string): MediaType {
  const mediaType = mediaTypesRegistry[slug as MediaTypeSlug];

  if (!mediaType) {
    notFound();
  }

  return mediaType;
}
