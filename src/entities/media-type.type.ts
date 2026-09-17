export type MediaTypeCode =
  | "anime"
  | "series"
  | "cartoon"
  | "animated-movie"
  | "live-action-movie"
  | "video-game"
  | "board-game"
  | "music-artist"
  | "book"
  | "comic"
  | "manga";

export type MediaType = {
  code: MediaTypeCode;
  label: string;
  slug: string;
};

export const MEDIA_TYPES = {
  anime: {
    code: "anime",
    label: "Animes",
    slug: "animes",
  },
  series: {
    code: "series",
    label: "Séries",
    slug: "series",
  },
  cartoon: {
    code: "cartoon",
    label: "Desenhos Animados",
    slug: "desenhos-animados",
  },
  "animated-movie": {
    code: "animated-movie",
    label: "Filmes Animados",
    slug: "filmes-animados",
  },
  "live-action-movie": {
    code: "live-action-movie",
    label: "Filmes Live-Action",
    slug: "filmes-live-action",
  },
  "video-game": {
    code: "video-game",
    label: "Jogos Eletrônicos",
    slug: "jogos-eletronicos",
  },
  "board-game": {
    code: "board-game",
    label: "Jogos de Tabuleiro",
    slug: "jogos-de-tabuleiro",
  },
  "music-artist": {
    code: "music-artist",
    label: "Músicos",
    slug: "musicos",
  },
  book: {
    code: "book",
    label: "Livros",
    slug: "livros",
  },
  comic: {
    code: "comic",
    label: "HQs",
    slug: "hqs",
  },
  manga: {
    code: "manga",
    label: "Mangás",
    slug: "mangas",
  },
} satisfies Record<MediaTypeCode, MediaType>;
