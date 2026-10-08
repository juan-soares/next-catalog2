import type { MediaType, MediaTypeCode } from "@/modules/media-type/types";

export const MEDIA_TYPES_REGISTRY = {
  anime: {
    code: "anime",
    groupType: "tv-show",
    label: "Animes",
    slug: "animes",
  },
  series: {
    code: "series",
    groupType: "tv-show",
    label: "Séries",
    slug: "series",
  },
  cartoon: {
    code: "cartoon",
    groupType: "tv-show",
    label: "Desenhos Animados",
    slug: "desenhos-animados",
  },
  "animated-movie": {
    code: "animated-movie",
    groupType: "movie",
    label: "Filmes Animados",
    slug: "filmes-animados",
  },
  "live-action-movie": {
    code: "live-action-movie",
    groupType: "movie",
    label: "Filmes Live-Action",
    slug: "filmes-live-action",
  },
  "video-game": {
    code: "video-game",
    groupType: "game",
    label: "Jogos Eletrônicos",
    slug: "jogos-eletronicos",
  },
  "board-game": {
    code: "board-game",
    groupType: "game",
    label: "Jogos de Tabuleiro",
    slug: "jogos-de-tabuleiro",
  },
  "music-artist": {
    code: "music-artist",
    groupType: "track",
    label: "Músicos",
    slug: "musicos",
  },
  book: {
    code: "book",
    groupType: "reading",
    label: "Livros",
    slug: "livros",
  },
  comic: {
    code: "comic",
    groupType: "reading",
    label: "HQs",
    slug: "hqs",
  },
  manga: {
    code: "manga",
    groupType: "reading",
    label: "Mangás",
    slug: "mangas",
  },
} satisfies Record<MediaTypeCode, MediaType>;
