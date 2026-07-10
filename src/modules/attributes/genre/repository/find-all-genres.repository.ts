/**
 * O que este arquivo faz:
 * - Busca todos os gêneros no banco.
 * - Converte documentos MongoDB em entidades Genre.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece filtros.
 * - Não conhece UI.
 * - Não conhece MediaType.
 * - Não decide regras de catálogo.
 */

import { Genre } from "../entity";
import { GenreModel } from "../model";

export async function findAllGenres(): Promise<Genre[]> {
  const genres = await GenreModel.find()
    .sort({
      label: 1,
    })
    .lean();

  return genres.map((genre) => ({
    value: genre.value,
    label: genre.label,
  }));
}
