export const TAB_TYPES = [
  "technical",
  "seasons",
  "episodes",
  "downloads",
  "gallery",
  "lyrics",
  "tracks",
  "volumes",
  "chapters",
] as const;

export type TabType = (typeof TAB_TYPES)[number];
