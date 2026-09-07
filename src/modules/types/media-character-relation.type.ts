import { MediaItem } from "../../modules1/media-item";
import { Attribute } from "./attribute.type";
import { Character } from "./character.type";
import { MediaFile } from "./media-file.type";
import { MediaUnitGroup } from "./media-unit-group.type";

export type MediaCharacterRelation = {
  id: string;

  characterId: Character["id"];
  mediaItemId: MediaItem["id"];
  mediaUnitGroupId?: MediaUnitGroup["id"];

  codeName?: string;
  statusId: Attribute["id"];
  imageId?: MediaFile["id"];

  createdAt: Date;
  updatedAt: Date;
};
