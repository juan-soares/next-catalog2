import { MediaItem } from "../../modules1/media-item";
import { User } from "../user";
import { MediaUnit } from "./media-unit-type";

export type UserMediaItemProgress = {
  userId: User["id"];
  mediaItemId: MediaItem["id"];

  acquired: boolean;
  consumed: boolean;

  createdAt: Date;
  updatedAt: Date;
};

export type UserMediaUnitProgress = {
  userId: User["id"];
  mediaUnitId: MediaUnit["id"];

  acquired: boolean;
  consumed: boolean;

  createdAt: Date;
  updatedAt: Date;
};
