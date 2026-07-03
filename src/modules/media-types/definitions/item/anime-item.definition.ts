/**
 * Definição da página de detalhes de Animes.
 *
 * Responsabilidade
 * - Definir a estrutura da página de detalhes de um Anime.
 * - Centralizar quais seções (tabs) estarão disponíveis.
 * - Servir como base para renderização da UI de detalhes.
 *
 * Não deve
 * - Buscar dados do banco.
 * - Conhecer catálogo ou filtros.
 * - Conter lógica de negócio.
 * - Depender de React ou Next.js.
 */

import type { MediaItemDefinition } from "@/modules/media-item";

/**
 * Placeholder inicial de tabs.
 * Vamos evoluir isso para TabDefinition em breve.
 */
export const animeItemDefinition: MediaItemDefinition = {
  tabs: [
    {
      key: "overview",
      label: "Visão geral",
    },

    {
      key: "episodes",
      label: "Episódios",
    },

    {
      key: "characters",
      label: "Personagens",
    },

    {
      key: "gallery",
      label: "Galeria",
    },
  ],
};
