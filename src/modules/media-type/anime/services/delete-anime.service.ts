/**
 * O que este arquivo faz:
 * - Executa o caso de uso de exclusão de um anime.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece UI.
 * - Não acessa MongoDB.
 * - Não conhece Server Actions.
 */

import { animeRepository } from "../repository";

export async function deleteAnime(slug: string): Promise<void> {
  const deleted = await animeRepository.delete(slug);

  if (!deleted) {
    throw new Error("Anime not found");
  }
}
