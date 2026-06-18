import type { EpisodeGroup } from "../types/episode-group";
import type { File } from "../types/file";

export type ContentStructureRegistry = {
  "episode-group": () => EpisodeGroup;
  file: () => File;
};

export const CONTENT_STRUCTURE_REGISTRY = {
  "episode-group": () => ({
    title: "",
    episodes: [],
  }),
  file: () => ({
    title: "",
    url: "",
  }),
} as const;

export type ContentStructureKey = keyof typeof CONTENT_STRUCTURE_REGISTRY;
