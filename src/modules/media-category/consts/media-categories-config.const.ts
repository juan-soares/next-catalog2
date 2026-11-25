import type {
  MediaCategoryCode,
  MediaCategoryInfo,
} from "@/modules/media-category/types";

export const MEDIA_CATEGORIES_CONFIG = {
  anime: {
    slug: "animes",
    label: "Animes",
    familyCode: "episodic",
  },
  serie: {
    slug: "series",
    label: "Séries",
    familyCode: "episodic",
  },
  cartoon: {
    slug: "desenhos-animados",
    label: "Desenhos Animados",
    familyCode: "episodic",
  },

  "animated-movie": {
    slug: "filmes-animados",
    label: "Filmes Animados",
    familyCode: "movie",
  },
  "live-action-movie": {
    slug: "files-live-action",
    label: "Filmes Live-Action",
    familyCode: "movie",
  },
  book: {
    slug: "livros",
    label: "Livros",
    familyCode: "book",
  },

  "video-game": {
    slug: "jogos-eletronicos",
    label: "Jogos Eletrônicos",
    familyCode: "game",
  },
  "board-game": {
    slug: "jogos-de-tabuleiro",
    label: "Jogos de Tabuleiro",
    familyCode: "game",
  },

  comic: {
    slug: "comics",
    label: "Comics",
    familyCode: "volumes",
  },
  manga: {
    slug: "mangas",
    label: "Mangás",
    familyCode: "volumes",
  },

  music: {
    slug: "musicas",
    label: "Músicas",
    familyCode: "music",
  },
} satisfies Record<MediaCategoryCode, MediaCategoryInfo>;
