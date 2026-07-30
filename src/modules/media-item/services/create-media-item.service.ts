import { slugify } from "@/lib/helpers";
import { CreateMediaItemInput, MediaItem } from "../types";
import { mediaItemRepository } from "../repository";
import { ensureMediaItemDoesNotExist } from "./ensure-media-item-does-not-exist.service";

export async function createMediaItem(
  input: CreateMediaItemInput,
): Promise<MediaItem> {
  const newMediaItem = {
    mediaType: input.mediaType,
    title: input.title,
    translatedTitle: input.translatedTitle,
    slug: slugify(input.title),
    cover: input.cover,
    releaseDate: input.releaseDate,
  };

  await ensureMediaItemDoesNotExist(newMediaItem);

  return await mediaItemRepository.insert(newMediaItem);
}
