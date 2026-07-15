/**
 * O que este arquivo faz:
 * - Centraliza o registro de todos os MediaTypes disponíveis.
 * - Permite que outras partes do sistema encontrem um MediaType pelo seu identificador.
 *
 * O que este arquivo NÃO faz:
 * - Não implementa MediaTypes.
 * - Não resolve URLs.
 * - Não executa lógica de catálogo.
 */

import { animeRegistry } from "./anime";
import { MediaType } from "./types";

export const mediaTypesRegistry = { animes: animeRegistry } satisfies Record<
  string,
  MediaType
>;
