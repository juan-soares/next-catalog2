/**
 * O que este arquivo faz:
 * - Persiste um novo Anime no MongoDB.
 *
 * O que este arquivo NÃO faz:
 * - Não valida regras de negócio.
 * - Não conhece formulário.
 * - Não conhece Server Actions.
 */

import { connectToDatabase } from "@/lib/mongoose";
import { AnimeModel } from "../anime.model";
import type { Anime } from "../anime.entity";

export async function createAnime(anime: Anime): Promise<Anime> {
  await connectToDatabase();

  const created = await AnimeModel.create(anime);

  return {
    title: created.title,
    slug: created.slug,
    translatedTitle: created.translatedTitle,
    releaseDate: created.releaseDate,
    cover: created.cover,
    trailer: created.trailer,
  };
}
