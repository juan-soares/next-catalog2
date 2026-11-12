import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { MediaData, MediaDoc, MediaView } from "@/modules/media/types";
import { MediaModel } from "@/modules/media/models";
import { mapMediaDocToMediaView } from "@/modules/media/mappers";
import { franchiseRepository } from "@/modules/franchise/repository";

export async function createMedia(data: MediaData): Promise<MediaView | null> {
  try {
    await connectToMongoDB();

    const doc = await MediaModel.create(data);

    const populatedDoc = await doc.populate<MediaDoc>([
      { path: "attributes.languageIds" },
      { path: "attributes.themeIds" },
    ]);

    const franchises = await franchiseRepository.findAncestors(
      populatedDoc.attributes.franchiseId,
    );

    return mapMediaDocToMediaView(populatedDoc, franchises);
  } catch (error) {
    console.error("Erro ao criar mídia.", error);
    return null;
  }
}
