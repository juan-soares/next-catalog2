import { ContentCapability, TabType } from "../constants";

/**
 * Define quais capabilities viram abas na UI
 */
export const CAPABILITY_TAB_MAP: Partial<Record<ContentCapability, TabType>> = {
  seasons: "seasons",
  episodes: "episodes",
  ovas: "seasons",

  volumes: "volumes",
  chapters: "chapters",

  downloads: "downloads",
  gallery: "gallery",
  lyrics: "lyrics",
  tracks: "tracks",
};
