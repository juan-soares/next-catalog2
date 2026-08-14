import { MediaTypeKey } from "@/modules/1-media-type";
import { MediaItemCharacter } from "./media-item-character.type";
import { Attribute } from "@/modules/1-attribute";

export type MediaItem = {
  id: string;

  title: string;
  translatedTitle?: string;

  slug: string;
  mediaType: MediaTypeKey;

  releaseDate: Date;

  languageIds: Attribute["id"][];
  synopsis: string;

  cover: string;
  trailer: string;

  themeIds: Attribute["id"][];
  franchises: string[];

  acquired: boolean;
  complete: boolean;

  characters: MediaItemCharacter[];
};
