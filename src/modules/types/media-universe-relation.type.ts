import { MediaItem } from "../../modules1/media-item";
import { Attribute } from "./attribute.type";
import { MediaUnitGroup } from "./media-unit-group.type";
import { Universe } from "./universe.type";

export type MediaUniverseRelation = {
  id: string;
  universeId: Universe["id"];
  mediaItemId: MediaItem["id"];
  mediaUnitGroupId?: MediaUnitGroup["id"];

  typeId: Attribute["id"];

  createdAt: Date;
  updatedAt: Date;
};
