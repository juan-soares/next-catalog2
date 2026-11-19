import type {
  FindMediaDataParams,
  MediaPopulatedDoc,
  RelatedMediaDoc,
  MediaView,
} from "@/modules/media/types";

import { MediaModel } from "@/modules/media/models";
import { mapMediaDocToMediaView } from "@/modules/media/mappers";
import { franchiseRepository } from "@/modules/franchise/repository";

export async function findMedia({
  fields = {},
}: FindMediaDataParams = {}): Promise<MediaView | null> {
  try {
    const mediaDoc = await MediaModel.findOne(fields)
      .populate("attributes.languageIds")
      .populate("attributes.themeIds")
      .populate("attributes.gameDetails.platformIds")
      .populate("attributes.gameDetails.genreIds")
      .populate("attributes.gameDetails.gameplayIds")
      .populate("attributes.gameDetails.modeIds")
      .populate({
        path: "sequel.previousMediaId",
        select: "identifiers info assets progress",
      })
      .lean<MediaPopulatedDoc | null>();

    if (!mediaDoc) return null;

    const [franchises, nextMediaDoc] = await Promise.all([
      franchiseRepository.findAncestors(mediaDoc.attributes.franchiseId),

      MediaModel.findOne({
        "sequel.previousMediaId": mediaDoc._id,
      })
        .select("identifiers info assets progress")
        .lean<RelatedMediaDoc | null>(),
    ]);

    const [dlcs, expansions] = await Promise.all([
      MediaModel.find({
        "gameExpansions.baseMediaId": mediaDoc._id,
        "gameExpansions.type": "dlc",
      })
        .select("identifiers info assets progress")
        .lean<RelatedMediaDoc[]>(),

      MediaModel.find({
        "gameExpansions.baseMediaId": mediaDoc._id,
        "gameExpansions.type": "expansion",
      })
        .select("identifiers info assets progress")
        .lean<RelatedMediaDoc[]>(),
    ]);

    const gameExpansions = { dlcs, expansions };

    return mapMediaDocToMediaView(
      mediaDoc,
      franchises,
      nextMediaDoc,
      gameExpansions,
    );
  } catch (error) {
    console.error("Ocorreu um erro ao buscar mídia", error);
    return null;
  }
}
