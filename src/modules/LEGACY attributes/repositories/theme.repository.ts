import { connectToDatabase } from "@/lib/mongoose";
import { ThemeModel } from "../models/theme.model";

/**
 * Responsável por acessar e persistir os dados de themes no banco de dados.
 *
 * Esta camada não contém regras de negócio.
 * Sua única responsabilidade é realizar operações de leitura e escrita.
 *
 * Qualquer validação ou regra deve ficar na camada de Service.
 */

/**
 * Busca todos os themes cadastrados.
 */
export async function getThemes() {
  await connectToDatabase();

  return ThemeModel.find().sort({ label: 1 }).lean();
}

/**
 * Busca um theme pelo ID.
 */
export async function getThemeById(id: string) {
  await connectToDatabase();

  return ThemeModel.findById(id).lean();
}

/**
 * Busca um theme pelo label.
 */
export async function getThemeByLabel(label: string) {
  await connectToDatabase();

  return ThemeModel.findOne({ label }).lean();
}

/**
 * Cria um novo theme.
 */
export async function createTheme(data: { label: string }) {
  await connectToDatabase();

  return ThemeModel.create(data);
}

/**
 * Atualiza um theme existente.
 */
export async function updateTheme(
  id: string,
  data: {
    label?: string;
  },
) {
  await connectToDatabase();

  return ThemeModel.findByIdAndUpdate(id, data, {
    new: true,
  });
}
