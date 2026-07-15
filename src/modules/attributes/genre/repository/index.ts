import { createGenre } from "./create-genre.repository";
import { findAllGenres } from "./find-all-genres.repository";
import { findGenreByValue } from "./find-genre-by-value.repository";
import { updateGenre } from "./update-genre.repository";

export const genreRepository = {
  create: createGenre,
  findAll: findAllGenres,
  findByValue: findGenreByValue,
  update: updateGenre,
};
