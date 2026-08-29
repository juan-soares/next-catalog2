import { getMediaItemById } from "@/modules/media-item";
import { MediaItemPageInfo } from "../types";

export async function getMediaItemPageInfoById(
  id: string,
): Promise<MediaItemPageInfo | null> {
  const mediaItem = await getMediaItemById(id);

  if (!mediaItem) return null;

  return {
    trailer: mediaItem.trailer,
    cover: mediaItem.cover,
    title: mediaItem.title,
    releaseYear: Number(mediaItem.releaseDate.getFullYear().toString()),
    mediaType: mediaItem.mediaType.label,
    themes: mediaItem.themes.map(({ label }) => label),
    synopsis: mediaItem.synopsis,
    acquired: mediaItem.acquired,
    completed: mediaItem.completed,
  };
}
