/**
 * O que este arquivo faz
 * ----------------------
 * Centraliza o registro dos tipos de mídia disponíveis
 * na aplicação.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não renderiza componentes.
 * - Não cria páginas.
 * - Não acessa banco de dados.
 * - Não possui regras específicas de cada mídia.
 */

import { MediaType } from "../types";
import { getAnimeFilters, listAnimeCatalogResults } from "@/modules/anime";

export const mediaTypesRegistry = {
  animes: {
    label: "Animes",
    slug: "animes",

    catalog: {
      getFilters: getAnimeFilters,
      getResults: listAnimeCatalogResults,
    },
  },
} satisfies Record<string, MediaType>;
