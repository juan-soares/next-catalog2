/**
 * O que este arquivo faz:
 * - Remove um anime do banco de dados.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece UI.
 * - Não contém regras de negócio.
 * - Não conhece Server Actions.
 */

import { connectToDatabase } from "@/lib/mongoose";
import { AnimeModel } from "../anime.model";

export async function deleteAnime(slug: string): Promise<boolean> {
  await connectToDatabase();

  const result = await AnimeModel.deleteOne({ slug });

  return result.deletedCount > 0;
}
