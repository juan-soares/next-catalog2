import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { MediaData, MediaView } from "@/modules/media/types";
import { MediaModel } from "@/modules/media/models";
import { mapMediaDataToMediaView } from "@/modules/media/mappers";

export async function createMedia(data: MediaData): Promise<MediaView | null> {
  try {
    await connectToMongoDB();

    const mediaData = await MediaModel.create(data);

    if (!mediaData) return null;

    const id = mediaData._id.toString();

    return mapMediaDataToMediaView(id, mediaData);
  } catch (error) {
    console.error("Erro ao criar mídia.", error);
    return null;
  }
}
