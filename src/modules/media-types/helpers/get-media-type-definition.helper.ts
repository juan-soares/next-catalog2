/**
 * Resolve uma MediaTypeDefinition a partir do slug da URL.
 *
 * Responsabilidade
 * - Traduzir o slug da rota para uma MediaTypeDefinition.
 * - Centralizar o acesso ao registry.
 *
 * Não deve
 * - Conter regras de negócio.
 * - Modificar definições.
 * - Executar lógica de catálogo.
 */

import { mediaTypeRegistry } from "../registry";

export function getMediaTypeDefinition(slug: string) {
  const definition = mediaTypeRegistry[slug];

  if (!definition) {
    throw new Error(`MediaType não encontrado para slug: ${slug}`);
  }

  return definition;
}
