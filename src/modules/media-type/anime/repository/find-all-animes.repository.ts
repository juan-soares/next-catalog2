/**
 * O que este arquivo faz:
 * - Busca animes persistidos.
 * - Converte documentos do Model em entidades de domínio.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece UI.
 * - Não conhece CatalogItem.
 * - Não interpreta URL.
 * - Não define regras de apresentação.
 */

import { connectToDatabase } from "@/lib/mongoose";
import type { CatalogQuery } from "@/modules/catalog";
import { AnimeModel } from "../anime.model";
import type { Anime } from "../anime.entity";
import { animeSortMap } from "../anime.const";

export async function findAllAnimes(query: CatalogQuery): Promise<Anime[]> {
  await connectToDatabase();

  const filter: Record<string, unknown> = {};
  const sort = animeSortMap[query.sort ?? "updated"];

  if (query.q) {
    filter.$or = [
      {
        title: {
          $regex: query.q,
          $options: "i",
        },
      },
      {
        translatedTitle: {
          $regex: query.q,
          $options: "i",
        },
      },
    ];
  }

  const animes = await AnimeModel.find(filter).sort(sort).lean();

  return animes.map((anime) => ({
    slug: anime.slug,
    title: anime.title,
    translatedTitle: anime.translatedTitle,
    releaseDate: anime.releaseDate,
    cover: anime.cover,
    trailer: anime.trailer,
  }));
}
