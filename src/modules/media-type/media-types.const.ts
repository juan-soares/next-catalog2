/**
 * O que este arquivo faz:
 * - Cria os links de navegação dos MediaTypes.
 * - Gera URLs a partir dos MediaTypes registrados.
 *
 * O que este arquivo NÃO faz:
 * - Não cria MediaTypes.
 * - Não define quais MediaTypes existem.
 * - Não conhece regras de catálogo.
 * - Não renderiza componentes.
 */

import { mediaTypesRegistry } from "./media-types.registry";
import { MediaTypeNavLink } from "./types";

export const MEDIA_TYPES_LINK: MediaTypeNavLink[] = Object.entries(
  mediaTypesRegistry,
).map(([slug, mediaType]) => ({
  href: `/${slug}`,
  label: mediaType.label,
}));
