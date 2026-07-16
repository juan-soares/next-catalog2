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
import { CreateAnimeForm } from ".";
import { listAnimes } from "./services";
import { deleteAnimeAction } from "./actions";

export const animeRegistry: MediaType = {
  slug: "animes",
  label: "Animes",

  async getFilters(query) {
    const [genres] = await Promise.all([listOptionsByAttribute("genre")]);

    const genreAttribute = attributeRegistry.genre;

    return [
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
    return listAnimes(query);
  },

  admin: {
    create: CreateAnimeForm,
    delete: deleteAnimeAction,
  },
};
