import type { TabType } from "../constants/tab-types";

export type TabDefinition = {
  type: TabType;

  label: string;

  order: number;

  hidden?: boolean;
};

export const TAB_REGISTRY: Record<TabType, TabDefinition> = {
  technical: {
    type: "technical",
    label: "Ficha Técnica",
    order: 1,
  },

  seasons: {
    type: "seasons",
    label: "Temporadas",
    order: 2,
  },

  episodes: {
    type: "episodes",
    label: "Episódios",
    order: 3,
  },

  downloads: {
    type: "downloads",
    label: "Downloads",
    order: 4,
  },

  gallery: {
    type: "gallery",
    label: "Galeria",
    order: 5,
  },

  lyrics: {
    type: "lyrics",
    label: "Letras",
    order: 6,
  },

  tracks: {
    type: "tracks",
    label: "Faixas",
    order: 7,
  },

  volumes: {
    type: "volumes",
    label: "Volumes",
    order: 8,
  },

  chapters: {
    type: "chapters",
    label: "Capítulos",
    order: 9,
  },
};
