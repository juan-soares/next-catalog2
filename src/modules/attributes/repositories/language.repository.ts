import { connectToDatabase } from "@/lib/mongoose";
import { LanguageModel } from "../models/language.model";

/**
 * Busca todos os idiomas cadastrados
 */
export async function getLanguages() {
  await connectToDatabase();

  return LanguageModel.find().lean();
}

/**
 * Busca um idioma pelo ID
 */
export async function getLanguageById(id: string) {
  await connectToDatabase();

  return LanguageModel.findById(id).lean();
}

/**
 * Cria um novo idioma
 */
export async function createLanguage(data: { label: string; code: string }) {
  await connectToDatabase();

  return LanguageModel.create(data);
}

/**
 * Atualiza o label de um idioma
 */
export async function updateLanguage(
  id: string,
  data: { label?: string; code?: string },
) {
  await connectToDatabase();

  return LanguageModel.findByIdAndUpdate(id, data, {
    new: true,
  });
}
