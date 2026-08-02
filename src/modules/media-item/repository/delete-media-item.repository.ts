import { connectToDatabase } from "@/lib/mongoose";
import { MediaItemModel } from "../model";
import { MediaTypeKey } from "@/modules/media-type";

export async function deleteMediaItem(
  mediaType: MediaTypeKey,
  slug: string,
): Promise<boolean> {
  await connectToDatabase();

  const result = await MediaItemModel.deleteOne({
    mediaType,
    slug,
  });

  return result.deletedCount > 0;
}
