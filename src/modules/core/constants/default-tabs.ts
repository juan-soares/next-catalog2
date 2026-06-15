export const DEFAULT_TABS = ["technical", "gallery", "downloads"] as const;

export type DefaultTab = (typeof DEFAULT_TABS)[number];
