/**
 * MediaType é a taxonomia central do CATFLIX.
 * Define todos os tipos de mídia suportados pelo sistema.
 * Não é configurável e não existe no banco de dados.
 * Serve como base para navegação, Content Engine e organização global.
 */

export const mediaTypes = [
  "anime",
  "series",
  "movie",
  "dorama",
  "ova",
  "book",
  "manga",
  "comic",
  "webtoon",
  "music",
  "podcast",
  "audiobook",
  "game",
  "board-game",
  "card-game",
  "rpg",
] as const;

export type MediaType = (typeof mediaTypes)[number];
