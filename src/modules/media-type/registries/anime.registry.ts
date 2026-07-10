/**
 * O que esse arquivo faz:
 * - Define o comportamento completo da página /animes.
 * - Implementa o contrato MediaType.
 * - Centraliza filtros e busca de animes.
 *
 * O que esse arquivo NÃO faz:
 * - Não resolve URL.
 * - Não registra outros MediaTypes.
 * - Não renderiza UI.
 */

import { listOptionsByAttribute } from "@/modules/attributes/services";
import { attributeRegistry } from "@/modules/attributes";
import type { MediaType } from "../types";
import { listItemsByMediaType } from "../services";

export const animeRegistry: MediaType = {
  slug: "animes",
  label: "Animes",

  async getFilters(query) {
    const [languages, genres] = await Promise.all([
      listOptionsByAttribute("language"),
      listOptionsByAttribute("genre"),
    ]);

    const languageAttribute = attributeRegistry.language;
    const genreAttribute = attributeRegistry.genre;

    return [
      {
        key: languageAttribute.key,
        slug: languageAttribute.slug,
        label: languageAttribute.label,

        options: languages.map(({ label, value }) => ({
          label,
          value,
          selected: query.filters?.language?.includes(value),
        })),
      },

      {
        key: genreAttribute.key,
        slug: genreAttribute.slug,
        label: genreAttribute.label,

        options: genres.map(({ label, value }) => ({
          label,
          value,
          selected: query.filters?.genre?.includes(value),
        })),
      },
    ];
  },

  async getItems(query) {
    return listItemsByMediaType("animes", query);
  },
};
