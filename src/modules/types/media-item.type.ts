import { Franchise } from "../franchise";
import { Attribute } from "./attribute.type";
import { MediaFile } from "./media-file.type";
import { MediaTypeCode } from "./media-type.type";

export type MediaItem = {
  id: string;
  mediaType: MediaTypeCode;
  slug: string;

  title: string;
  translatedTitle?: string;
  synopsis: string;
  releaseDate: Date;

  medias: {
    cover: MediaFile["id"];
    trailer: MediaFile["id"];
    files: MediaFile["id"][];
  };

  sequence?: {
    previousId?: MediaItem["id"];
    nextId?: MediaItem["id"];
  };

  languageIds: Attribute["id"][];
  themeIds: Attribute["id"][];
  franchiseId?: Franchise["id"];

  createdAt: Date;
  updatedAt: Date;
};
