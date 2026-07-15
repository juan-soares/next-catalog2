import { listAnimes } from "../services";
import { createAnime } from "./create-anime.repository";
import { findAllAnimes } from "./find-all-animes.repository";

export const animeRepository = {
  create: createAnime,
  findAll: findAllAnimes,
  //findByValue: findGenreByValue,
  //update: updateGenre,
  //delete: deleteGenre,
};
