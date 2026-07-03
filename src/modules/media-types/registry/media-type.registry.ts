/**
 * Registry central de MediaTypes da aplicação.
 *
 * Responsabilidade
 * - Registrar todas as MediaTypeDefinitions disponíveis no sistema.
 * - Servir como ponto único de acesso para resolução de MediaTypes via slug.
 *
 * Não deve
 * - Conter regras de catálogo.
 * - Conter filtros ou lógica de negócio.
 * - Executar consultas.
 * - Conhecer detalhes internos dos MediaTypes.
 */

import { animeCatalogDefinition, animeItemDefinition } from "../definitions";
import { MediaTypeDefinition } from "../types";

export const mediaTypeRegistry = {
  animes: {
    label: "Animes",
    slug: "animes",
    catalog: animeCatalogDefinition,
    item: animeItemDefinition,
  },
} satisfies Record<string, MediaTypeDefinition>;
