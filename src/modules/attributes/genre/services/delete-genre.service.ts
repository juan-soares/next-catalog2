/**
 * O que este arquivo faz:
 * - Executa o caso de uso de exclusão de um gênero.
 * - Coordena a operação entre aplicação e repository.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece UI.
 * - Não conhece Server Actions.
 * - Não acessa MongoDB diretamente.
 */

import { genreRepository } from "../repository";

export async function deleteGenre(value: string): Promise<boolean> {
  return genreRepository.delete(value);
}
