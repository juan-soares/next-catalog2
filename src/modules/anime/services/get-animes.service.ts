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

export async function getAnimes() {
  return (await mediaItemRepository.find("anime")).map(mapMediaItemToAnime);
}
