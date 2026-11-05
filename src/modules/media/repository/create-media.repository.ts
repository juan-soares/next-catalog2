import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { MediaData, MediaDoc, MediaView } from "@/modules/media/types";
import { MediaModel } from "@/modules/media/models";
import { mapMediaDocToMediaView } from "@/modules/media/mappers";

export async function createMedia(data: MediaData): Promise<MediaView | null> {
  try {
    await connectToMongoDB();

    const doc = await MediaModel.create(data);

    const populatedDoc = await doc.populate<MediaDoc>([
      { path: "attributes.languageIds" },
      { path: "attributes.themeIds" },
    ]);

    return mapMediaDocToMediaView(populatedDoc);
  } catch (error) {
    console.error("Erro ao criar mídia.", error);
    return null;
  }
}
