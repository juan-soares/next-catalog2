import { createAnime } from "./create-anime.repository";
import { deleteAnimeBySlug } from "./delete-anime.repository";
import { findAllAnimes } from "./find-all-animes.repository";
import { findAnimeBySlug } from "./find-anime-by-slug.repository";
import { updateAnimeBySlug } from "./updade-anime-by-slug.reposity";

export const animeRepository = {
  findAll: findAllAnimes,
  findItemBySlug: findAnimeBySlug,

  create: createAnime,
  update: updateAnimeBySlug,
  delete: deleteAnimeBySlug,
};
