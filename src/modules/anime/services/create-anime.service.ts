import { createMediaItem } from "@/modules/media-item";
import { Anime, CreateAnimeInput } from "../types";

export async function createAnime(input: CreateAnimeInput): Promise<Anime> {
  return await createMediaItem({
    mediaType: "animes",

    title: input.title,
    translatedTitle: input.translatedTitle,

    cover: input.cover,
    trailer: input.trailer,

    releaseDate: input.releaseDate,

    synopsis: input.synopsis,

    themes: input.themes,

    acquired: input.acquired,
    complete: input.complete,

    characters: input.characters,
  });
}
