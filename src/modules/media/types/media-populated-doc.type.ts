import { Types } from "mongoose";
import type { AttributeDoc } from "@/modules/attribute/types";
import type { MediaDoc, RelatedMediaDoc } from "@/modules/media/types";

export type MediaPopulatedDoc = Omit<MediaDoc, "attributes" | "sequel"> & {
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
    previousMediaId: RelatedMediaDoc | null;
  };
};
