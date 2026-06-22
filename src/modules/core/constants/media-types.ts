/**
 * Lista de todos os tipos de mídia que existem no sistema.
 * Cada item aqui representa um tipo de conteúdo que o CATFLIX entende (como anime, filme ou jogo).
 * Isso é usado como base para todo o sistema funcionar.
 */

export const MEDIA_TYPES = [
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

export type MediaType = (typeof MEDIA_TYPES)[number];
