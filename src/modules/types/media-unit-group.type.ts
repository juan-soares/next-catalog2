import { MediaItem } from "../../modules1/media-item";
import { MediaFile } from "./media-file.type";

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
    label: "Álbuns",
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

  createdAt: Date;
  updatedAt: Date;
};
