/**
 * O que este arquivo faz:
 * - Cria um gênero no banco.
 * - Converte o documento MongoDB criado em uma entidade Genre.
 *
 * O que este arquivo NÃO faz:
 * - Não valida regras de negócio.
 * - Não conhece UI.
 * - Não conhece formulários.
 * - Não decide permissões.
 */

import { connectToDatabase } from "@/lib/mongoose";
import type { Genre } from "../genre.entity";
import { GenreModel } from "../genre.model";

type CreateGenreInput = {
  value: string;
  label: string;
};

export async function createGenre(input: CreateGenreInput): Promise<Genre> {
  await connectToDatabase();

  const genre = await GenreModel.create(input);

  return {
    value: genre.value,
    label: genre.label,
  };
}
