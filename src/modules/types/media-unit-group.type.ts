import { MediaItem } from "../media-item";
import { Attribute } from "./attribute.type";
import { MediaFile } from "./media-file.type";
import { MediaItemCharacter } from "./media-item-character.type";

export type MediaUnitGroupTypeCode = "season" | "special" | "volume" | "album";

export type MediaUnitGroupType = {
  code: MediaUnitGroupTypeCode;
  label: string;
  slug: string;
};

const MEDIA_UNIT_GROUP_TYPES = {
  season: {
    code: "season",
    label: "Temporadas",
    slug: "temporadas",
  },
  special: {
    code: "special",
    label: "Especiais",
    slug: "especiais",
  },
  volume: {
    code: "volume",
    label: "Volumes",
    slug: "volumes",
  },
  album: {
    code: "album",
    label: "albuns",
    slug: "albuns",
  },
} satisfies Record<MediaUnitGroupTypeCode, MediaUnitGroupType>;

export type MediaUnitGroup = {
  id: string;
  mediaItemId: MediaItem["id"];
  type: MediaUnitGroupTypeCode;

  title: string;
  translatedTitle?: string;
  synopsis: string;
  releaseDate: Date;

  cover: MediaFile["id"];

  languageIds: Attribute["id"];
  characterIds: MediaItemCharacter["id"][];

  createdAt: Date;
  updatedAt: Date;
};
