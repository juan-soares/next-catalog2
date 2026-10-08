import "server-only";

import { CreateMediaData, MediaDetails } from "@/entities/media/types";
import { MediaModel } from "@/entities/media/models";
import { connectToDatabase } from "@/shared/libs/mongoose";

export async function createOneMedia(
  data: CreateMediaData,
): Promise<MediaDetails> {
  await connectToDatabase();

  return MediaModel.create({
    title: data.title,
    translatedTitle: data.translatedTitle,
    releaseDate: data.releaseDate,
    releaseYear: data.releaseYear,
    typeCode: data.typeCode,
    publicID: data.publicID,
    coverAssetId: data.coverAssetId,
    trailerAssetId: data.trailerAssetId,
    synopsis: data.synopsis,
    continuity: {
      nextId: data.nextId,
    },
    themeIds: data.themeIds,
    franchiseId: data.franchiseId,
  });
}
