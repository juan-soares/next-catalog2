import type {
  FindMediaDataParams,
  MediaDataPopulated,
  MediaView,
} from "@/modules/media/types";
import { MediaModel } from "@/modules/media/models";
import { mapMediaDataToMediaView } from "@/modules/media/mappers";
import type { AttributeData } from "@/modules/attribute/types";

type MediaPopulate = {
  "attributes.languageIds": AttributeData[];
  "attributes.themeIds": AttributeData[];
};

export async function findMedia({
  fields = {},
}: FindMediaDataParams = {}): Promise<MediaView | null> {
  try {
    const mediaData = await MediaModel.findOne(fields)
      .populate<MediaPopulate>("attributes.languageIds")
      .populate<MediaPopulate>("attributes.themeIds")
      .lean<MediaDataPopulated>();

    if (!mediaData) return null;

    return mapMediaDataToMediaView(mediaData._id.toString(), mediaData);
  } catch (error) {
    console.error("Ocorreu um erro ao buscar midia", error);
    return null;
  }
}
