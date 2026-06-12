export const CONTENT_CAPABILITIES = [
  "seasons",
  "episodes",
  "ovas",
  "tracks",
  "lyrics",
  "volumes",
  "chapters",
  "downloads",
  "gallery",
  "chronology",
  "expansions",
] as const;

export type ContentCapability = (typeof CONTENT_CAPABILITIES)[number];
