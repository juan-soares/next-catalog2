import { MediaItem } from "../media-item";
import { Attribute } from "./attribute.type";
import { Character } from "./character.type";
import { MediaFile } from "./media-file.type";

export type MediaItemCharacter = {
  characterId: Character["id"];

  codeName?: string;
  statusId: Attribute["id"];
  imageId: MediaFile["id"];
};
