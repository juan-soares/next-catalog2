/**
 * O que este arquivo faz:
 * - Define o contrato do Registry de MediaTypes.
 * - Representa uma coleção de MediaTypes identificados por suas chaves públicas.
 *
 * O que este arquivo NÃO faz:
 * - Não cria MediaTypes.
 * - Não define regras específicas de cada mídia.
 * - Não acessa banco de dados.
 * - Não conhece URLs.
 */

import type { MediaType } from "./media-type.type";
import type { MediaTypeSlug } from "./media-type-slug.type";

export type MediaTypesRegistry = Record<MediaTypeSlug, MediaType>;
