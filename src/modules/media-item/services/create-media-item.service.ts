import { slugify } from "@/lib/helpers";
import { CreateMediaItemInput, MediaItem } from "../types";
import { mediaItemRepository } from "../repository";
import { ensureMediaItemDoesNotExist } from "./ensure-media-item-does-not-exist.service";

export async function createMediaItem(
  input: CreateMediaItemInput,
): Promise<MediaItem> {
  const releaseDate = input.releaseDate;
  const slug = `${slugify(input.title)}-${releaseDate.getFullYear().toString()}`;

  const newMediaItem = {
    mediaType: input.mediaType,
    title: input.title,
    translatedTitle: input.translatedTitle,
    cover: input.cover,
    slug,
    releaseDate,
  };

  await ensureMediaItemDoesNotExist(newMediaItem);

  return await mediaItemRepository.insert(newMediaItem);
}
