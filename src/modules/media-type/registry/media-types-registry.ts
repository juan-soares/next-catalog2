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

import { AnimeModule } from "@/modules/anime";
import { MediaType } from "../types";

export const mediaTypesRegistry = {
  animes: {
    label: "Animes",
    slug: "animes",
    module: AnimeModule,
  },
} satisfies Record<string, MediaType>;
