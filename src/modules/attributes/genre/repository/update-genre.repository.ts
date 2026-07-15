/**
 * O que este arquivo faz:
 * - Atualiza um gênero existente no banco.
 * - Mantém o value original como identificador estável.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece UI.
 * - Não gera slug.
 * - Não decide regras de negócio.
 * - Não conhece Server Actions.
 */

import { connectToDatabase } from "@/lib/mongoose";
import { GenreModel } from "../genre.model";
import { Genre } from "../genre.entity";

type UpdateGenreData = {
  label: string;
};

export async function updateGenre(
  value: string,
  data: UpdateGenreData,
): Promise<Genre | null> {
  await connectToDatabase();

  const genre = await GenreModel.findOneAndUpdate(
    {
      value,
    },
    {
      $set: {
        label: data.label,
      },
    },
    {
      new: true,
    },
  ).lean();

  if (!genre) {
    return null;
  }

  return {
    value: genre.value,
    label: genre.label,
  };
}
