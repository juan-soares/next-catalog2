import { connectToMongoDB } from "@/shared/libs/mongoose";
import { MediaModel } from "@/modules/media/models";
import type { MediaDoc, MediaView } from "@/modules/media/types";
import { mapMediaDocToMediaView } from "@/modules/media/mappers";

export async function deleteMedia(id: string): Promise<MediaView | null> {
  try {
    await connectToMongoDB();

    const deletedMediaDoc = await MediaModel.findByIdAndDelete(id)
      .populate([
        { path: "attributes.languageIds" },
        { path: "attributes.themeIds" },
      ])
      .lean<MediaDoc>()
      .exec();

    if (!deletedMediaDoc) return null;

    return mapMediaDocToMediaView(deletedMediaDoc);
  } catch (error) {
    console.error("Erro ao remover midia", error);

    return null;
  }
}
