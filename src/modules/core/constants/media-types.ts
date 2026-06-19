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
