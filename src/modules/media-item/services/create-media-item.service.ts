import { slugify } from "@/lib/helpers";
import { CreateMediaItemInput, MediaItem } from "../types";
import { mediaItemRepository } from "../repository";
import { ensureMediaItemDoesNotExist } from "./ensure-media-item-does-not-exist.service";

export async function createMediaItem(
  input: CreateMediaItemInput,
): Promise<MediaItem> {
  const releaseYear = input.releaseDate.getFullYear();

  const slug = `${slugify(input.title)}-${releaseYear}`;

  const newMediaItem: MediaItem = {
    mediaType: input.mediaType,

    title: input.title,
    translatedTitle: input.translatedTitle,

    slug,
    releaseDate: input.releaseDate,

    synopsis: input.synopsis,

    cover: input.cover,
    trailer: input.trailer,

    themes: input.themes,
    franchises: input.franchises,

    acquired: input.acquired,
    complete: input.complete,

    characters: input.characters,
  };

  await ensureMediaItemDoesNotExist({
    mediaType: input.mediaType,
    slug,
  });

  return mediaItemRepository.insert(newMediaItem);
}
