import { franchiseRepository } from "@/modules/franchise/repository";
import { connectToMongoDB } from "@/shared/libs/mongoose";
import { mapMediaDocToMediaView } from "@/modules/media/mappers";
import { MediaModel } from "@/modules/media/models";
import type {
  MediaData,
  MediaView,
  MediaPopulatedDoc,
  RelatedMediaDoc,
} from "@/modules/media/types";

export async function createMedia(data: MediaData): Promise<MediaView | null> {
  try {
    await connectToMongoDB();

    const doc = await MediaModel.create(data);

    const populatedDoc = await doc.populate<MediaPopulatedDoc>([
      { path: "attributes.languageIds" },
      { path: "attributes.themeIds" },
      { path: "attributes.gameDetails.platformIds" },
      { path: "attributes.gameDetails.genreIds" },
      { path: "attributes.gameDetails.gameplayIds" },
      { path: "attributes.gameDetails.modeIds" },
      {
        path: "gameExpansions.baseMediaId",
        select: "identifiers info assets progress",
      },
      {
        path: "sequel.previousMediaId",
        select: "identifiers info assets progress",
      },
    ]);

    const [franchises, nextDoc] = await Promise.all([
      franchiseRepository.findAncestors(populatedDoc.attributes.franchiseId),

      MediaModel.findOne({
        "sequel.previousMediaId": populatedDoc._id,
      })
        .select("identifiers info assets progress")
        .lean<RelatedMediaDoc>(),
    ]);

    const [dlcs, expansions] = await Promise.all([
      MediaModel.find({
        "gameExpansions.baseMediaId": populatedDoc._id,
        "gameExpansions.type": "dlc",
      })
        .select("identifiers info assets progress")
        .lean<RelatedMediaDoc[]>(),

      MediaModel.find({
        "gameExpansions.baseMediaId": populatedDoc._id,
        "gameExpansions.type": "expansion",
      })
        .select("identifiers info assets progress")
        .lean<RelatedMediaDoc[]>(),
    ]);

    const gameExpansions = { dlcs, expansions };

    return mapMediaDocToMediaView(
      populatedDoc,
      franchises,
      nextDoc,
      gameExpansions,
    );
  } catch (error) {
    console.error("Erro ao criar mídia.", error);
    return null;
  }
}
