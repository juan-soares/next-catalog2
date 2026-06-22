/**
 * Define como cada tipo de mídia se comporta dentro do CATFLIX.
 * Aqui ficam as regras de navegação, estrutura e organização da interface.
 * O sistema usa isso para montar a experiência de cada tipo de conteúdo.
 */

import type { MediaType } from "../constants";
import type { ContentConfig } from "../engine/content-engine";

import {
  seasonBasedPreset,
  flatPreset,
  chapterPreset,
  trackPreset,
} from "./content-config-presets";

export const contentConfigMap: Record<MediaType, ContentConfig> = {
  anime: {
    tabs: [
      "overview",
      "seasons",
      "ovas",
      "specials",
      "gallery",
      "files",
      "franchise",
      "relations",
    ],
    ...seasonBasedPreset,
  },

  series: {
    tabs: ["overview", "seasons", "gallery", "files", "franchise", "relations"],
    ...seasonBasedPreset,
  },

  dorama: {
    tabs: ["overview", "seasons", "gallery", "files", "franchise", "relations"],
    ...seasonBasedPreset,
  },

  movie: {
    tabs: ["overview", "gallery", "files", "franchise", "relations"],
    ...flatPreset,
  },

  ova: {
    tabs: ["overview", "gallery", "files", "franchise", "relations"],
    ...flatPreset,
  },

  game: {
    tabs: ["overview", "relations", "gallery", "files", "franchise"],
    ...flatPreset,
  },

  "board-game": {
    tabs: ["overview", "gallery", "files", "franchise", "relations"],
    ...flatPreset,
  },

  "card-game": {
    tabs: ["overview", "gallery", "files", "franchise", "relations"],
    ...flatPreset,
  },

  rpg: {
    tabs: ["overview", "gallery", "files", "franchise", "relations"],
    ...flatPreset,
  },

  book: {
    tabs: [
      "overview",
      "volumes",
      "chapters",
      "gallery",
      "files",
      "franchise",
      "relations",
    ],
    ...chapterPreset,
  },

  manga: {
    tabs: [
      "overview",
      "volumes",
      "chapters",
      "gallery",
      "files",
      "franchise",
      "relations",
    ],
    ...chapterPreset,
  },

  comic: {
    tabs: [
      "overview",
      "volumes",
      "chapters",
      "gallery",
      "files",
      "franchise",
      "relations",
    ],
    ...chapterPreset,
  },

  webtoon: {
    tabs: [
      "overview",
      "chapters",
      "gallery",
      "files",
      "franchise",
      "relations",
    ],
    ...chapterPreset,
  },

  music: {
    tabs: ["overview", "tracks", "gallery", "files", "franchise", "relations"],
    ...trackPreset,
  },

  podcast: {
    tabs: ["overview", "tracks", "gallery", "files", "franchise", "relations"],
    ...trackPreset,
  },

  audiobook: {
    tabs: ["overview", "tracks", "gallery", "files", "franchise", "relations"],
    ...trackPreset,
  },
};
