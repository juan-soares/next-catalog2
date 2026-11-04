import { connectToMongoDB } from "@/shared/libs/mongoose";
import { mapMediaDataToMediaView } from "@/modules/media/mappers";
import { MediaModel } from "@/modules/media/models";
import type { FindMediaDataParams, MediaView } from "@/modules/media/types";

export async function findMedias({
  fields = {},
}: FindMediaDataParams = {}): Promise<MediaView[]> {
  try {
    await connectToMongoDB();

    const mediaData = await MediaModel.find(fields).lean();

    return mediaData.map((media) => {
      const id = media._id.toString();
      return mapMediaDataToMediaView(id, media);
    });
  } catch (error) {
    console.error("Erro ao consultar mídia", error);
    return [];
  }
}
