import { MediaType } from "../constants";

export type ContentConfig = {
  tabs: string[];
  structure: string;
  labels: {
    groupLabel: string;
    itemLabel: string;
  };
};

export function resolveContentConfig(mediaType: MediaType): ContentConfig {
  switch (mediaType) {
    case "anime":
      return {
        tabs: [
          "overview",
          "seasons",
          "ovas",
          "specials",
          "gallery",
          "files",
          "franchise",
        ],
        structure: "season-based",
        labels: {
          groupLabel: "Temporada",
          itemLabel: "Episódio",
        },
      };

    case "game":
      return {
        tabs: ["overview", "relations", "gallery", "files", "franchise"],
        structure: "flat",
        labels: {
          groupLabel: "Expansão",
          itemLabel: "Conteúdo",
        },
      };

    default:
      return {
        tabs: ["overview", "gallery", "files", "franchise"],
        structure: "flat",
        labels: {
          groupLabel: "Grupo",
          itemLabel: "Item",
        },
      };
  }
}
