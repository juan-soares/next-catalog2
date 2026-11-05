import type {
  FindMediaDataParams,
  MediaDoc,
  MediaView,
} from "@/modules/media/types";
import { MediaModel } from "@/modules/media/models";
import { mapMediaDocToMediaView } from "@/modules/media/mappers";

export async function findMedia({
  fields = {},
}: FindMediaDataParams = {}): Promise<MediaView | null> {
  try {
    const mediaDoc = await MediaModel.findOne(fields)
      .populate("attributes.languageIds")
      .populate("attributes.themeIds")
      .lean<MediaDoc>();

    if (!mediaDoc) return null;

    return mapMediaDocToMediaView(mediaDoc);
  } catch (error) {
    console.error("Ocorreu um erro ao buscar midia", error);
    return null;
  }
}
