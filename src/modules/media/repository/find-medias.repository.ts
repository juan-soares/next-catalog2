import type { MediaTypeCode } from "@/modules/media-type/types";
import { mapMediaDataToMediaView } from "@/modules/media/mappers";
import { MediaModel } from "@/modules/media/models";
import type { MediaView } from "@/modules/media/types";
import { connectToMongoDB } from "@/shared/libs/mongoose";

type Props = {
  type: MediaTypeCode;
};

export async function findMedias({ type }: Props): Promise<MediaView[]> {
  try {
    await connectToMongoDB();

    const mediaData = await MediaModel.find({ "info.typeCode": type }).lean();

    return mediaData.map((media) => {
      const id = media._id.toString();
      return mapMediaDataToMediaView(id, media);
    });
  } catch (error) {
    console.error("Erro ao consultar mídia", error);
    return [];
  }
}
