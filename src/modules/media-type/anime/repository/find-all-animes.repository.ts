/**
 * O que este arquivo faz:
 * - Busca todos os animes persistidos.
 * - Converte documentos do Model em entidades de domínio.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece UI.
 * - Não conhece CatalogItem.
 * - Não interpreta filtros do catálogo.
 * - Não contém regras de negócio.
 */

import { connectToDatabase } from "@/lib/mongoose";
import { AnimeModel } from "../anime.model";
import type { Anime } from "../anime.entity";
import { CatalogQuery } from "@/modules/catalog";

export async function findAllAnimes(query: CatalogQuery): Promise<Anime[]> {
  await connectToDatabase();

  const animes = await AnimeModel.find().lean();

  return animes.map((anime) => ({
    slug: anime.slug,
    title: anime.title,
    translatedTitle: anime.translatedTitle,
    releaseDate: anime.releaseDate,
    cover: anime.cover,
    trailer: anime.trailer,
  }));
}
