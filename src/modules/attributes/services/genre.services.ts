import {
  getGenres,
  getGenreById,
  getGenreByLabel,
  createGenre,
  updateGenre,
} from "../repositories";

/**
 * Contém as regras de negócio relacionadas aos gêneros.
 *
 * Esta camada coordena validações e comportamentos do domínio,
 * sem conhecer detalhes do banco de dados ou da interface.
 */

/**
 * Lista todos os gêneros.
 */
export async function listGenres() {
  return getGenres();
}

/**
 * Busca um gênero pelo ID.
 */
export async function findGenreById(id: string) {
  return getGenreById(id);
}

/**
 * Cria um novo gênero.
 */
export async function addGenre(data: { label: string }) {
  const label = data.label.trim();

  if (!label) {
    throw new Error("Genre label is required");
  }

  const existingGenre = await getGenreByLabel(label);

  if (existingGenre) {
    throw new Error("Genre already exists");
  }

  return createGenre({
    label,
  });
}

/**
 * Atualiza um gênero existente.
 */
export async function editGenre(
  id: string,
  data: {
    label?: string;
  },
) {
  return updateGenre(id, data);
}
