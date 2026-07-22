/**
 * O que este arquivo faz
 * ----------------------
 * Define os contratos relacionados aos tipos de mídia
 * e aos módulos responsáveis por cada tipo.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não registra MediaTypes.
 * - Não implementa módulos.
 * - Não conhece páginas específicas.
 * - Não possui regras de negócio.
 */

import { MediaTypeModule } from "./media-type-module.type";

export interface MediaType {
  slug: string;
  label: string;
  module: MediaTypeModule;
}
