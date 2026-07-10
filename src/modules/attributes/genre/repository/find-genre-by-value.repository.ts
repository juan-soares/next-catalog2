/**
 * O que este arquivo faz:
 * - Busca um gênero através do seu value.
 *
 * O que este arquivo NÃO faz:
 * - Não valida regras de negócio.
 * - Não conhece URL.
 * - Não conhece UI.
 */

import { connectToDatabase } from "@/lib/mongoose";
import type { Genre } from "../genre.entity";
import { GenreModel } from "../genre.model";

export async function findGenreByValue(value: string): Promise<Genre | null> {
  await connectToDatabase();
  
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
