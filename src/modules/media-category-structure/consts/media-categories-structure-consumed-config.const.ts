import type { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";

export const MEDIA_CATEGORIES_STRUCTURE_CONSUMED_CONFIG = {
  book: { true: "Lido", false: "Ler" },
  episodic: { true: "Visto", false: "Ver" },
  game: { true: "Jogado", false: "Jogar" },
  movie: { true: "Assistido", false: "Assistir" },
  music: { true: "Ouvido", false: "Ouvir" },
  volume: { true: "Lido", false: "Ler" },
} satisfies Record<
  MediaCategoriesStructureCode,
  { true: string; false: string }
>;
