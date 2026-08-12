import { CharacterStatus } from "./media-item-character-status.type";

export type MediaItemCharacter = {
  name: string;
  nickname?: string;
  image: string;
  status: CharacterStatus;
};
