/**
 * Registro central dos MediaTypes do CATFLIX.
 *
 * Mapeia cada MediaType para sua definição estrutural,
 * utilizada por rotas, navegação, engines e componentes.
 *
 * É a fonte oficial de informações derivadas de um MediaType.
 */

import { MediaTypeDefinition } from "../types";

export const mediaTypeRegistry: Record<
  MediaTypeDefinition["type"],
  MediaTypeDefinition
> = {
  anime: {
    type: "anime",
    label: "Animes",
    slug: "animes",
  },

  series: {
    type: "series",
    label: "Séries",
    slug: "series",
  },

  movie: {
    type: "movie",
    label: "Filmes",
    slug: "filmes",
  },

  dorama: {
    type: "dorama",
    label: "Doramas",
    slug: "doramas",
  },

  ova: {
    type: "ova",
    label: "OVAs",
    slug: "ovas",
  },

  book: {
    type: "book",
    label: "Livros",
    slug: "livros",
  },

  manga: {
    type: "manga",
    label: "Mangás",
    slug: "mangas",
  },

  comic: {
    type: "comic",
    label: "Quadrinhos",
    slug: "quadrinhos",
  },

  webtoon: {
    type: "webtoon",
    label: "Webtoons",
    slug: "webtoons",
  },

  music: {
    type: "music",
    label: "Músicas",
    slug: "musicas",
  },

  podcast: {
    type: "podcast",
    label: "Podcasts",
    slug: "podcasts",
  },

  audiobook: {
    type: "audiobook",
    label: "Audiolivros",
    slug: "audiolivros",
  },

  game: {
    type: "game",
    label: "Jogos Eletrônicos",
    slug: "jogos-eletronicos",
  },

  "board-game": {
    type: "board-game",
    label: "Jogos de Tabuleiro",
    slug: "jogos-de-tabuleiro",
  },

  "card-game": {
    type: "card-game",
    label: "Jogos de Cartas",
    slug: "jogos-de-cartas",
  },

  rpg: {
    type: "rpg",
    label: "RPGs",
    slug: "rpgs",
  },
};
