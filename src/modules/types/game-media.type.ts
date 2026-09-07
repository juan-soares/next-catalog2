import { MediaItem } from "../../modules1/media-item";
import { Attribute } from "./attribute.type";

export type GameType = {
  genreIds: Attribute["id"][];
  minPlayers: number;
  maxPlayers: number;

  editionId: Attribute["id"];
  parentId?: MediaItem["id"];
};

//<-->

export type VideoGameMediaType = GameType & {
  platformIds: Attribute["id"][];
  gameplayStyleIds: Attribute["id"];
};

export type BoardGameMediaType = GameType & {
  gameplayStyleIds: Attribute["id"];
};
