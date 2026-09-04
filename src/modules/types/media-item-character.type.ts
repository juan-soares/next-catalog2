import { MediaItem } from "../media-item";
import { Attribute } from "./attribute.type";
import { Character } from "./character.type";
import { MediaFile } from "./media-file.type";

export type MediaItemCharacter = {
  id: string;

  mediaItemId: MediaItem["id"];
  characterId: Character["id"];

  codeName?: string;
  status: Attribute["id"];
  image?: MediaFile["id"];

  createdAt: Date;
  updatedAt: Date;
};
