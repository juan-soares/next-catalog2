export const MEDIA_GROUPS = [
  "video",
  "audio",
  "reading",
  "gaming",
  "tabletop",
] as const;

export type MediaGroup = (typeof MEDIA_GROUPS)[number];
