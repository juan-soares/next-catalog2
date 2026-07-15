/**
 * O que este arquivo faz:
 * - Remove um gênero existente do banco.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece UI.
 * - Não conhece Server Actions.
 * - Não decide regras de negócio.
 */

import { connectToDatabase } from "@/lib/mongoose";
import { GenreModel } from "../genre.model";

export async function deleteGenre(value: string): Promise<boolean> {
  await connectToDatabase();

  const result = await GenreModel.deleteOne({
    value,
  });

  return result.deletedCount > 0;
}
