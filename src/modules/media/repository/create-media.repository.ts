import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { MediaData, MediaDoc, MediaView } from "@/modules/media/types";
import { MediaModel } from "@/modules/media/models";
import { mapMediaDocToMediaView } from "@/modules/media/mappers";
import { franchiseRepository } from "@/modules/franchise/repository";
import { findMedia } from "./find-media.repository";
import { mediaRepository } from ".";

export async function createMedia(data: MediaData): Promise<MediaView | null> {
  try {
    await connectToMongoDB();

    const doc = await MediaModel.create(data);

    const populatedDoc = await doc.populate<MediaDoc>([
      { path: "attributes.languageIds" },
      { path: "attributes.themeIds" },
      { path: "attributes.gameDetails.platformIds" },
      { path: "attributes.gameDetails.genreIds" },
      { path: "attributes.gameDetails.gameplayIds" },
      { path: "attributes.gameDetails.modeIds" },
      { path: "sequel.previousMediaId" },
    ]);

    const franchises = await franchiseRepository.findAncestors(
      populatedDoc.attributes.franchiseId,
    );

    const next = await mediaRepository.findOne({
      fields: { "sequel.previousMediaId": populatedDoc._id.toString() },
    });

    return mapMediaDocToMediaView({ ...populatedDoc }, franchises, next);
  } catch (error) {
    console.error("Erro ao criar mídia.", error);
    return null;
  }
}
