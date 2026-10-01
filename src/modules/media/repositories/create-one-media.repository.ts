import { CreateMediaData, MediaDetails } from "@/modules/media/types";
import { MediaModel } from "@/modules/media/models";

export async function createOneMedia(
  data: CreateMediaData,
): Promise<MediaDetails> {
  return MediaModel.create({
    title: data.title,
    translatedTitle: data.translatedTitle,
    releaseDate: data.releaseDate,
    releaseYear: data.releaseYear,
    typeCode: data.typeCode,
    publicID: data.publicID,
    synopsis: data.synopsis,
    themeIds: data.themeIds,
  });
}
