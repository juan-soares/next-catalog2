import type {
  MediaCategoryCode,
  MediaCategoryInfo,
} from "@/modules/media-category/types";

export const MEDIA_CATEGORIES_CONFIG = {
  anime: {
    url: "/animes",
    label: "Animes",
    familyCode: "episodic",
  },
  serie: {
    url: "/series",
    label: "Séries",
    familyCode: "episodic",
  },
  cartoon: {
    url: "/desenhos-animados",
    label: "Desenhos Animados",
    familyCode: "episodic",
  },

  "animated-movie": {
    url: "/filmes-animados",
    label: "Filmes Animados",
    familyCode: "movie",
  },
  "live-action-movie": {
    url: "/files-live-action",
    label: "Filmes Live-Action",
    familyCode: "movie",
  },
  book: {
    url: "/livros",
    label: "Livros",
    familyCode: "book",
  },

  "video-game": {
    url: "/jogos-eletronicos",
    label: "Jogos Eletrônicos",
    familyCode: "game",
  },
  "board-game": {
    url: "/jogos-de-tabuleiro",
    label: "Jogos de Tabuleiro",
    familyCode: "game",
  },

  comic: {
    url: "/comics",
    label: "Comics",
    familyCode: "volumes",
  },
  manga: {
    url: "/mangas",
    label: "Mangás",
    familyCode: "volumes",
  },

  music: {
    url: "/musicas",
    label: "Músicas",
    familyCode: "music",
  },
} satisfies Record<MediaCategoryCode, MediaCategoryInfo>;
