/**
 * O que este arquivo faz:
 * - Busca um gênero através do seu value.
 *
 * O que este arquivo NÃO faz:
 * - Não valida regras de negócio.
 * - Não conhece URL.
 * - Não conhece UI.
 */

import { Genre } from "../entity";
import { GenreModel } from "../model";

export async function findGenreByValue(value: string): Promise<Genre | null> {
  const genre = await GenreModel.findOne({
    value,
  }).lean();

  if (!genre) {
    return null;
  }

  return {
    value: genre.value,
    label: genre.label,
  };
}
