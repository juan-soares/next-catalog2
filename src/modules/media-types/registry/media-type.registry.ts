/**
 * Registro central dos MediaTypes do CATFLIX.
 *
 * Mapeia cada MediaType para sua definição estrutural,
 * utilizada por rotas, navegação, engines e componentes.
 *
 * É a fonte oficial de informações derivadas de um MediaType:
 * - UI (label/slug)
 * - conteúdo (Content Engine)
 * - filtros (Catalog Engine)
 */

import type { MediaTypeDefinition } from "../types";

export const mediaTypeRegistry: Record<
  MediaTypeDefinition["type"],
  MediaTypeDefinition
> = {
  anime: {
    type: "anime",
    label: "Animes",
    slug: "animes",

    filters: ["genre", "theme", "language"],
  },

  series: {
    type: "series",
    label: "Séries",
    slug: "series",

    filters: ["genre", "language"],
  },

  movie: {
    type: "movie",
    label: "Filmes",
    slug: "filmes",

    filters: ["genre", "language"],
  },

  dorama: {
    type: "dorama",
    label: "Doramas",
    slug: "doramas",

    filters: ["genre", "language"],
  },

  ova: {
    type: "ova",
    label: "OVAs",
    slug: "ovas",

    filters: ["genre", "language"],
  },

  book: {
    type: "book",
    label: "Livros",
    slug: "livros",

    filters: ["genre", "language"],
  },

  manga: {
    type: "manga",
    label: "Mangás",
    slug: "mangas",

    filters: ["genre", "language"],
  },

  comic: {
    type: "comic",
    label: "Quadrinhos",
    slug: "quadrinhos",

    filters: ["genre", "language"],
  },

  webtoon: {
    type: "webtoon",
    label: "Webtoons",
    slug: "webtoons",

    filters: ["genre", "language"],
  },

  music: {
    type: "music",
    label: "Músicas",
    slug: "musicas",

    filters: ["genre"],
  },

  podcast: {
    type: "podcast",
    label: "Podcasts",
    slug: "podcasts",

    filters: ["genre"],
  },

  audiobook: {
    type: "audiobook",
    label: "Audiolivros",
    slug: "audiolivros",

    filters: ["genre"],
  },

  game: {
    type: "game",
    label: "Jogos Eletrônicos",
    slug: "jogos-eletronicos",

    filters: ["genre", "platform"],
  },

  "board-game": {
    type: "board-game",
    label: "Jogos de Tabuleiro",
    slug: "jogos-de-tabuleiro",

    filters: ["genre"],
  },

  "card-game": {
    type: "card-game",
    label: "Jogos de Cartas",
    slug: "jogos-de-cartas",

    filters: ["genre"],
  },

  rpg: {
    type: "rpg",
    label: "RPGs",
    slug: "rpgs",

    filters: ["genre"],
  },
};
