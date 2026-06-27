/**
 * Representa a definição estrutural de um MediaType.
 *
 * Reúne todas as informações derivadas de um tipo de mídia
 * utilizadas pelo sistema, como navegação, interface e
 * configurações padrão.
 *
 * Não representa uma entidade persistida.
 */

import type { MediaType } from "./media-type.type";

export type MediaTypeDefinition = {
  type: MediaType;
  label: string;
  slug: string;
};
