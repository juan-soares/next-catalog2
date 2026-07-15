/**
 * O que este arquivo faz:
 * - Executa o caso de uso de criação de um gênero.
 * - Coordena a criação através do repository.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco diretamente.
 * - Não conhece Mongoose.
 * - Não conhece UI.
 * - Não manipula formulários.
 */

import { slugify } from "@/lib/helpers";
import { Genre, genreRepository } from "../";

export async function createGenre(label: string): Promise<Genre> {
  const value = slugify(label);

  return genreRepository.create({ value, label });
}
