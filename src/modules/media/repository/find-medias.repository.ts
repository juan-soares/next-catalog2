import { connectToMongoDB } from "@/shared/libs/mongoose";
import { mapMediaDocToMediaView } from "@/modules/media/mappers";
import { MediaModel } from "@/modules/media/models";
import type {
  FindMediaDataParams,
  MediaDoc,
  MediaView,
} from "@/modules/media/types";

export async function findMedias({
  fields = {},
}: FindMediaDataParams = {}): Promise<MediaView[]> {
  try {
    await connectToMongoDB();

    const mediaDocs = await MediaModel.find(fields)
      .populate("attributes.languageIds")
      .populate("attributes.themeIds")
      .lean<MediaDoc[]>();

    return mediaDocs.map(mapMediaDocToMediaView);
  } catch (error) {
    console.error("Erro ao consultar mídia", error);
    return [];
  }
}
