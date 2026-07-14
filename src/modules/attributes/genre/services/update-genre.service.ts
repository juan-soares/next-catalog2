/**
 * O que este arquivo faz:
 * - Atualiza um gênero existente.
 * - Coordena a atualização entre domínio e repository.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece UI.
 * - Não conhece Server Actions.
 * - Não acessa MongoDB diretamente.
 */

import { genreRepository } from "../repository";

type UpdateGenreInput = {
  value: string;
  label: string;
};

export async function updateGenre({
  value,
  label,
}: UpdateGenreInput): Promise<void> {
  await genreRepository.updateOne(value, {
    label,
  });
}
