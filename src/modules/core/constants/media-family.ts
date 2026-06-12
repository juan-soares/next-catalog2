export const MEDIA_FAMILIES = [
  "video",
  "audio",
  "reading",
  "gaming",
  "tabletop",
] as const;

export type MediaFamily = (typeof MEDIA_FAMILIES)[number];
