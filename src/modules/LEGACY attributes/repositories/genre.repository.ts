import { connectToDatabase } from "@/lib/mongoose";
import { GenreModel } from "../models";

/**
 * Responsável por acessar e persistir os dados de gêneros no banco de dados.
 *
 * Esta camada não contém regras de negócio.
 * Sua única responsabilidade é realizar operações de leitura e escrita.
 *
 * Qualquer validação, regra ou comportamento deve ser implementado na camada de Service.
 */

/**
 * Busca todos os gêneros cadastrados.
 */
export async function getGenres() {
  await connectToDatabase();

  return GenreModel.find().sort({ label: 1 }).lean();
}

/**
 * Busca um gênero pelo ID.
 */
export async function getGenreById(id: string) {
  await connectToDatabase();

  return GenreModel.findById(id).lean();
}

/**
 * Busca um gênero pelo nome.
 */
export async function getGenreByLabel(label: string) {
  await connectToDatabase();

  return GenreModel.findOne({ label }).lean();
}

/**
 * Cria um novo gênero.
 */
export async function createGenre(data: { label: string }) {
  await connectToDatabase();

  return GenreModel.create(data);
}

/**
 * Atualiza um gênero existente.
 */
export async function updateGenre(
  id: string,
  data: {
    label?: string;
  },
) {
  await connectToDatabase();

  return GenreModel.findByIdAndUpdate(id, data, {
    new: true,
  });
}
