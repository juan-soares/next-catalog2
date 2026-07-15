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

type UpdateGenreData = {
  label: string;
};

export async function updateGenre(
  value: string,
  data: UpdateGenreData,
): Promise<boolean> {
  await connectToDatabase();

  const result = await GenreModel.updateOne(
    {
      value,
    },
    {
      $set: {
        label: data.label,
      },
    },
  );

  return result.matchedCount > 0;
}
