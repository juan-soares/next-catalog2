/**
 * MediaType helpers fornecem acesso padronizado e seguro
 * ao MediaTypeRegistry.
 *
 * Eles evitam acesso direto ao registry espalhado pelo sistema,
 * garantindo consistência e facilitando futuras mudanças estruturais.
 */

import { mediaTypeRegistry } from "../registry";
import { MediaType } from "../types";

export function getMediaTypeRegistry(type: MediaType) {
  return mediaTypeRegistry[type];
}

export function getMediaTypeLabel(type: MediaType) {
  return mediaTypeRegistry[type].label;
}

export function getMediaTypeSlug(type: MediaType) {
  return mediaTypeRegistry[type].slug;
}
