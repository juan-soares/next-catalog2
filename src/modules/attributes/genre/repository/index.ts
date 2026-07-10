import { findAllGenres } from "./find-all-genres.repository";
import { findGenreByValue } from "./find-genre-by-value.repository";

export const genreRepository = {
  findAll: findAllGenres,
  findByValue: findGenreByValue,
};
