import { connectToMongoDB } from "@/shared/libs/mongoose";
import { mapMediaDocToMediaView } from "@/modules/media/mappers";
import { MediaModel } from "@/modules/media/models";

import type {
  FindMediaDataParams,
  MediaPopulatedDoc,
  RelatedMediaDoc,
  MediaView,
} from "@/modules/media/types";

import { franchiseRepository } from "@/modules/franchise/repository";

export async function findMedias({
  fields = {},
}: FindMediaDataParams = {}): Promise<MediaView[]> {
  try {
    await connectToMongoDB();

    const mediaDocs = await MediaModel.find(fields)
      .populate("attributes.languageIds")
      .populate("attributes.themeIds")
      .populate("attributes.gameDetails.platformIds")
      .populate("attributes.gameDetails.genreIds")
      .populate("attributes.gameDetails.gameplayIds")
      .populate("attributes.gameDetails.modeIds")
      .populate({
        path: "gameExpansions.baseMediaId",
        select: "identifiers info assets progress",
      })
      .populate({
        path: "sequel.previousMediaId",
        select: "identifiers info assets progress",
      })
      .lean<MediaPopulatedDoc[]>();

    const medias = await Promise.all(
      mediaDocs.map(async (doc) => {
        const [franchises, nextMediaDoc] = await Promise.all([
          franchiseRepository.findAncestors(doc.attributes.franchiseId),

          MediaModel.findOne({
            "sequel.previousMediaId": doc._id,
          })
            .select("identifiers info assets progress")
            .lean<RelatedMediaDoc | null>(),
        ]);

        const [dlcs, expansions] = await Promise.all([
          MediaModel.find({
            "gameExpansions.baseMediaId": doc._id,
            "gameExpansions.type": "dlc",
          })
            .select("identifiers info assets progress")
            .lean<RelatedMediaDoc[]>(),

          MediaModel.find({
            "gameExpansions.baseMediaId": doc._id,
            "gameExpansions.type": "expansion",
          })
            .select("identifiers info assets progress")
            .lean<RelatedMediaDoc[]>(),
        ]);

        const gameExpansions = { dlcs, expansions };

        return mapMediaDocToMediaView(
          doc,
          franchises,
          nextMediaDoc,
          gameExpansions,
        );
      }),
    );

    return medias;
  } catch (error) {
    console.error("Erro ao consultar mídias", error);
    return [];
  }
}
