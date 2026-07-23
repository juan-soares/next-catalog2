/**
 * O que este arquivo faz
 * ----------------------
 * Obtém os animes disponíveis na aplicação.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não acessa banco diretamente.
 * - Não conhece Mongoose.
 * - Não renderiza UI.
 */

import { mediaItemRepository } from "@/modules/media-item";
import { mapMediaItemToAnime } from "../mappers";
import { CatalogQuery } from "@/modules/catalog";

export async function getAnimes(query: CatalogQuery) {
  const mediaItems = await mediaItemRepository.find("animes", query);
  return mediaItems.map(mapMediaItemToAnime);
}
