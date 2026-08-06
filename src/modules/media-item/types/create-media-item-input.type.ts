import { MediaTypeKey } from "@/modules/media-type";
import { CharacterStatus } from "./media-item-character-status.type";
import { Attribute } from "@/modules/attribute";

export type CreateMediaItemCharacterInput = {
  name: string;
  nickname?: string;
  image: string;
  status: CharacterStatus;
};

export type CreateMediaItemInput = {
  mediaType: MediaTypeKey;

  title: string;
  translatedTitle?: string;

  releaseDate: Date;

  synopsis: string;

  cover: string;
  trailer: string;

  languageIds: Attribute["id"][];
  themeIds: Attribute["id"][];

  franchises: string[];

  acquired: boolean;
  complete: boolean;

  characters: CreateMediaItemCharacterInput[];
};
