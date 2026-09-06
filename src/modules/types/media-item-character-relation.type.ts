import { Attribute } from "./attribute.type";
import { Character } from "./character.type";
import { MediaFile } from "./media-file.type";

export type MediaItemCharacter = {
  characterId: Character["id"];

  codeName?: string;
  imageId: MediaFile["id"];
  statusId: Attribute["id"];
};
