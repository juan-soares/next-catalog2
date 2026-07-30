import { createMediaItem } from "@/modules/media-item";
import { Anime, CreateAnimeInput } from "../types";

export async function createAnime(input: CreateAnimeInput): Promise<Anime> {
  return await createMediaItem({
    mediaType: "animes",
    title: input.title,
    translatedTitle: input.translatedTitle,
    cover: input.cover,
    releaseDate: input.releaseDate,
  });
}
