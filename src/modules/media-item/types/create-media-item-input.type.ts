import { MediaTypeKey } from "@/modules/media-type";
import { CharacterStatus } from "./media-item-character-status.type";

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

  cover: string;
  trailer: string;

  releaseDate: Date;

  synopsis: string;

  themes: string[];

  acquired: boolean;
  complete: boolean;

  characters: CreateMediaItemCharacterInput[];
};
