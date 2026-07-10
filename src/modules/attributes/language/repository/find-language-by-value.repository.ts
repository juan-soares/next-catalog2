/**
 * O que este arquivo faz:
 * - Busca um idioma pelo seu valor estável.
 * - Converte documento MongoDB em entidade Language.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece filtros.
 * - Não conhece UI.
 * - Não conhece MediaType.
 * - Não decide regras de catálogo.
 */

import type { Language } from "../language.entity";
import { LanguageModel } from "../language.model";

export async function findLanguageByValue(
  value: string,
): Promise<Language | null> {
  const language = await LanguageModel.findOne({
    value,
  }).lean();

  if (!language) {
    return null;
  }

  return {
    value: language.value,
    label: language.label,
  };
}
