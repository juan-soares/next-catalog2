/**
 * O que este arquivo faz:
 * - Executa o caso de uso de criação de um gênero.
 * - Coordena a criação através do repository.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco diretamente.
 * - Não conhece Mongoose.
 * - Não conhece UI.
 * - Não manipula formulários.
 */

import { genreRepository } from "../";

type CreateGenreInput = {
  value: string;
  label: string;
};

export async function createGenre(input: CreateGenreInput) {
  return genreRepository.create(input);
}
