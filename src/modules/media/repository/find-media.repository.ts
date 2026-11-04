import type { MediaView } from "@/modules/media/types";
import { MediaModel } from "@/modules/media/models";
import { mapMediaDataToMediaView } from "@/modules/media/mappers";

export async function findMedia({
  slug,
}: {
  slug: string;
}): Promise<MediaView | null> {
  try {
    const mediaData = await MediaModel.findOne({
      "identifiers.slug": slug,
    }).lean();

    if (!mediaData) return null;

    return mapMediaDataToMediaView(mediaData._id.toString(), mediaData);
  } catch (error) {
    console.error("Ocorreu um erro ao buscar midia", error);
    return null;
  }
}
