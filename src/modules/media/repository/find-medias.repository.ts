import { connectToMongoDB } from "@/shared/libs/mongoose";
import { mapMediaDocToMediaView } from "@/modules/media/mappers";
import { MediaModel } from "@/modules/media/models";
import type {
  FindMediaDataParams,
  MediaDoc,
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
      .lean<MediaDoc[]>();

    const medias = await Promise.all(
      mediaDocs.map(async (doc) => {
        const franchises = await franchiseRepository.findAncestors(
          doc.attributes.franchiseId,
        );

        return mapMediaDocToMediaView(doc, franchises);
      }),
    );

    return medias;
  } catch (error) {
    console.error("Erro ao consultar mídia", error);
    return [];
  }
}
