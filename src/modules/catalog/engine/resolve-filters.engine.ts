/**
 * Resolve filtros disponíveis para o MediaType
 * usando dados reais do módulo attributes (MongoDB).
 */

import type { ResolvedFilters } from "../types";
import type { MediaTypeDefinition } from "@/modules/media-types";

import {
  listGenres,
  listThemes,
  listPlatforms,
} from "@/modules/attributes/services";

export async function resolveFilters(
  mediaType: MediaTypeDefinition,
): Promise<ResolvedFilters> {
  const result: ResolvedFilters = [];

  for (const filterKey of mediaType.filters) {
    switch (filterKey) {
      case "genre": {
        const genres = await listGenres();

        result.push({
          key: "genre",
          label: "Gênero",
          options: genres.map((g) => ({
            label: g.name,
            value: g.slug,
          })),
        });

        break;
      }

      case "theme": {
        const themes = await listThemes();

        result.push({
          key: "theme",
          label: "Tema",
          options: themes.map((t) => ({
            label: t.name,
            value: t.slug,
          })),
        });

        break;
      }

      case "platform": {
        const platforms = await listPlatforms();

        result.push({
          key: "platform",
          label: "Plataforma",
          options: platforms.map((p) => ({
            label: p.name,
            value: p.slug,
          })),
        });

        break;
      }

      default:
        break;
    }
  }

  return result;
}
