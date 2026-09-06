import { Franchise } from "../franchise";
import { Attribute } from "./attribute.type";
import { MediaFile } from "./media-file.type";
import { MediaItemCharacter } from "./media-item-character-relation.type";
import { MediaItemUniverse } from "./media-item-universe-relation.type";
import { MediaTypeCode } from "./media-type.type";

export type MediaItem = {
  id: string;
  mediaType: MediaTypeCode;
  slug: string;

  title: string;
  translatedTitle?: string;
  synopsis: string;
  releaseDate: Date;

  assets: {
    coverId: MediaFile["id"];
    trailerId: MediaFile["id"];
    fileIds: MediaFile["id"][];
  };

  sequence: {
    previousId?: MediaItem["id"];
    nextId?: MediaItem["id"];
  };

  characters: MediaItemCharacter[];
  universes: MediaItemUniverse[];

  languageIds: Attribute["id"][];
  themeIds: Attribute["id"][];
  franchiseId?: Franchise["id"];

  createdAt: Date;
  updatedAt: Date;
};
