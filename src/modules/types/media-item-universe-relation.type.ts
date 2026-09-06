import { Attribute } from "./attribute.type";
import { Universe } from "./universe.type";

export type MediaItemUniverse = {
  universeId: Universe["id"];
  typeId: Attribute["id"];
};
