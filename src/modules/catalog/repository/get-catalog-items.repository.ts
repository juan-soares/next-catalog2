/**
 * Repository responsável por buscar itens do catálogo no MongoDB.
 *
 * Ele recebe uma consulta já normalizada pelo Catalog Engine.
 * Não conhece URL, MediaTypeRegistry ou regras de UI.
 */

import { MediaItemModel } from "@/modules/media-item/models/media-item.model";
import type { CatalogSort } from "../types";

type Params = {
  mediaType: string;
  q?: string;
  sort?: CatalogSort;
  page?: number;
  filters?: Record<string, string[]>;
};

const PAGE_SIZE = 20;

export async function getCatalogItems({
  mediaType,
  q,
  sort,
  page = 1,
  filters,
}: Params) {
  const filterQuery: any = {
    mediaType,
  };

  /**
   * Busca textual simples (base inicial)
   */
  if (q) {
    filterQuery.title = { $regex: q, $options: "i" };
  }

  /**
   * Aplicação de filtros dinâmicos
   */
  if (filters) {
    for (const key in filters) {
      filterQuery[key] = { $in: filters[key] };
    }
  }

  /**
   * Ordenação
   */
  let sortQuery: any = {};

  switch (sort) {
    case "alph":
      sortQuery = { title: 1 };
      break;

    case "updated":
      sortQuery = { updatedAt: -1 };
      break;

    case "released":
      sortQuery = { releaseYear: -1 };
      break;

    default:
      sortQuery = { updatedAt: -1 };
  }

  const skip = (page - 1) * PAGE_SIZE;

  const items = await MediaItemModel.find(filterQuery)
    .sort(sortQuery)
    .skip(skip)
    .limit(PAGE_SIZE)
    .lean();

  return items;
}
