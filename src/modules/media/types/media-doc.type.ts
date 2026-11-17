import { Types } from "mongoose";
import { AttributeDoc } from "@/modules/attribute/types";
import type { MediaData } from "@/modules/media/types";

export type MediaDoc = Omit<MediaData, "attributes" | "sequel"> & {
  _id: Types.ObjectId;

  attributes: {
    languageIds: AttributeDoc[];
    themeIds: AttributeDoc[];
    franchiseId: Types.ObjectId;
    gameDetails?: {
      platformIds: AttributeDoc[];
      genreIds: AttributeDoc[];
      gameplayIds: AttributeDoc[];
      modeIds: AttributeDoc[];
      players: {
        min: number;
        max: number;
      };
    };
  };

  sequel: {
    previousMediaId: MediaDoc | null;
  };
};
