/**
 * O que esse arquivo faz:
 * - Define o comportamento completo da página /animes
 * - Implementa o contrato MediaType
 * - Centraliza filtros e busca de animes
 *
 * O que esse arquivo NÃO faz:
 * - Não resolve URL
 * - Não registra outros MediaTypes
 * - Não renderiza UI
 */

import { listOptionsByAttribute } from "@/modules/attributes/services";
import { MediaType } from "../types";
import { listItemsByMediaType } from "../services";

export const animeRegistry: MediaType = {
  slug: "animes",
  label: "Animes",

  async getFilters(query) {
    const [languages, genres] = await Promise.all([
      listOptionsByAttribute("language"),
      listOptionsByAttribute("genre"),
    ]);

    return [
      {
        key: "language",
        label: "Idiomas",
        options: languages.map(({ label, id }) => ({
          label,
          value: id,
          selected: query.filters?.language?.includes(id),
        })),
      },

      {
        key: "genre",
        label: "Gêneros",
        options: genres.map(({ label, id }) => ({
          label,
          value: id,
          selected: query.filters?.genre?.includes(id),
        })),
      },
    ];
  },

  async getItems(query) {
    return listItemsByMediaType("animes", query);
  },
};
