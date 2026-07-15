/**
 * O que este arquivo faz:
 * - Centraliza a busca de itens de um MediaType.
 * - Recebe o tipo de mídia e a consulta do catálogo.
 * - Delega a obtenção dos dados para a camada apropriada.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece a URL.
 * - Não renderiza UI.
 * - Não define o comportamento de um MediaType.
 */

import { MediaTypeSlug } from "../types";

export async function listItemsByMediaType(
  mediaType: MediaTypeSlug,
  query: {},
): Promise<[]> {
  return [];
}
