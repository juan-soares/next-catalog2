import { Attribute } from "./attribute.type";
import { MediaUnitGroup } from "./media-unit-group.type";

export type MediaUnitTypeCode = "episode" | "chapter" | "issue" | "track";

export type MediaUnitType = {
  code: MediaUnitTypeCode;
  label: string;
  slug: string;
};

export const MediaUnitTypes = {
  episode: {
    code: "episode",
    label: "Episódios",
    slug: "episodios",
  },
  chapter: {
    code: "chapter",
    label: "Capítulos",
    slug: "capitulos",
  },
  issue: {
    code: "issue",
    label: "Edições",
    slug: "edicoes",
  },
  track: {
    code: "track",
    label: "Faixas",
    slug: "faixas",
  },
} satisfies Record<MediaUnitTypeCode, MediaUnitType>;

export type MediaUnit = {
  id: string;
  mediaUnitGroupId: MediaUnitGroup["id"];
  type: MediaUnitTypeCode;

  number: number;

  title: string;
  translatedTitle?: string;

  languageIds: Attribute["id"][];

  acquired: boolean;
  consumed: boolean;

  createdAt: Date;
  updatedAt: Date;
};
