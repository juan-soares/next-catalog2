import { createAnime } from "./create-anime.repository";
import { deleteAnime } from "./delete-anime.repository";

import { findAllAnimes } from "./find-all-animes.repository";

export const animeRepository = {
  create: createAnime,
  findAll: findAllAnimes,
  //findByValue: findGenreByValue,
  //update: updateGenre,
  delete: deleteAnime,
};
