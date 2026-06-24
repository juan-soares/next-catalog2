"use server";

import { listGenres, findGenreById, addGenre, editGenre } from "../services";

/**
 * Camada de integração entre Next.js e o domínio Genre.
 *
 * Recebe chamadas da interface e delega o trabalho para os Services.
 */

/**
 * Busca todos os gêneros.
 */
export async function getGenresAction() {
  return listGenres();
}

/**
 * Busca um gênero pelo ID.
 */
export async function getGenreByIdAction(id: string) {
  return findGenreById(id);
}

/**
 * Cria um novo gênero.
 */
export async function createGenreAction(data: { label: string }) {
  return addGenre(data);
}

/**
 * Atualiza um gênero existente.
 */
export async function updateGenreAction(
  id: string,
  data: {
    label?: string;
  },
) {
  return editGenre(id, data);
}
