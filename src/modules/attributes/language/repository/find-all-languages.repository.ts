/**
 * O que este arquivo faz:
 * - Busca todos os idiomas no banco.
 * - Converte documentos MongoDB em entidades Language.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece filtros.
 * - Não conhece UI.
 * - Não conhece MediaType.
 * - Não decide regras de catálogo.
 */

import { connectToDatabase } from "@/lib/mongoose";
import type { Language } from "../language.entity";
import { LanguageModel } from "../language.model";

export async function findAllLanguages(): Promise<Language[]> {
  await connectToDatabase();
  const languages = await LanguageModel.find()
    .sort({
      label: 1,
    })
    .lean();

  return languages.map((language) => ({
    value: language.value,
    label: language.label,
  }));
}
