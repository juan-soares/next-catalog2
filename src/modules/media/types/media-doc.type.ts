import { Types } from "mongoose";
import type { MediaData } from "@/modules/media/types";

export type MediaDoc = Omit<MediaData, "attributes" | "sequel"> & {
  _id: Types.ObjectId;

  attributes: {
    languageIds: Types.ObjectId[];
    themeIds: Types.ObjectId[];
    franchiseId: Types.ObjectId;
    gameDetails?: {
      platformIds: Types.ObjectId[];
      genreIds: Types.ObjectId[];
      gameplayIds: Types.ObjectId[];
      modeIds: Types.ObjectId[];
      players: {
        min: number;
        max: number;
      };
    };
  };

  sequel: {
    previousMediaId: Types.ObjectId | null;
  };
};
