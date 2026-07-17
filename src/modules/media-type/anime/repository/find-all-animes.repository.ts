/**
 * O que este arquivo faz:
 * - Centraliza o acesso ao MongoDB para Anime.
 * - Executa operações usando o Model do Mongoose.
 *
 * O que este arquivo NÃO faz:
 * - Não contém regra de negócio.
 * - Não gera slug.
 * - Não valida permissões.
 * - Não conhece Server Actions.
 */

import { connectToDatabase } from "@/lib/mongoose";
import { AnimeModel } from "../anime.model";

export async function findAllAnimes() {
  await connectToDatabase();

  return AnimeModel.find().lean();
}
