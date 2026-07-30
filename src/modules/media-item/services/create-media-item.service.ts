import { slugify } from "@/lib/helpers";
import { CreateMediaItemInput } from "../types";
import { mediaItemRepository } from "../repository";
import { Anime } from "@/modules/anime";
import { ensureMediaItemDoesNotExist } from "./ensure-media-item-does-not-exist.service";

export async function createMediaItem(
  input: CreateMediaItemInput,
): Promise<Anime> {
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
