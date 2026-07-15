import { slugify } from "@/lib/helpers";
import type { Anime } from "../anime.entity";
import { animeRepository } from "../repository";
import { createIdentifierWithTitleAndDate } from "../../helpers";

type CreateAnimeInput = {
  title: string;
  translatedTitle?: string;
  releaseDate: Date;
  cover: string;
  trailer: string;
};

export async function createAnime(input: CreateAnimeInput): Promise<Anime> {
  const slug = createIdentifierWithTitleAndDate(input.title, input.releaseDate);

  const anime: Anime = {
    ...input,
    slug,
  };

  return animeRepository.create(anime);
}
