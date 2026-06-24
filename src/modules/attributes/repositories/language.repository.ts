import { connectToDatabase } from "@/lib/mongoose";
import { LanguageModel } from "../models";

/**
 * Responsável por acessar e persistir os dados de idiomas no banco de dados.
 *
 * Esta camada não contém regras de negócio.
 * Sua única responsabilidade é realizar operações de leitura e escrita.
 *
 * Qualquer validação, regra ou comportamento deve ser implementado na camada de Service.
 */

/**
 * Busca todos os idiomas cadastrados.
 */
export async function getLanguages() {
  await connectToDatabase();

  return LanguageModel.find().sort({ label: 1 }).lean();
}

/**
 * Busca um idioma pelo ID.
 */
export async function getLanguageById(id: string) {
  await connectToDatabase();

  return LanguageModel.findById(id).lean();
}

/**
 * Busca um idioma pelo código.
 */
export async function getLanguageByCode(code: string) {
  await connectToDatabase();

  return LanguageModel.findOne({
    code: code.toUpperCase(),
  }).lean();
}

/**
 * Cria um novo idioma.
 */
export async function createLanguage(data: { label: string; code: string }) {
  await connectToDatabase();

  return LanguageModel.create(data);
}

/**
 * Atualiza um idioma existente.
 */
export async function updateLanguage(
  id: string,
  data: {
    label?: string;
    code?: string;
  },
) {
  await connectToDatabase();

  return LanguageModel.findByIdAndUpdate(id, data, {
    new: true,
  });
}
