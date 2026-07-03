import { connectToDatabase } from "@/lib/mongoose";
import { GameModeModel } from "../models/game-mode.model";

/**
 * Responsável por acessar e persistir modos de jogo no banco de dados.
 */

/**
 * Lista todos os modos de jogo.
 */
export async function getGameModes() {
  await connectToDatabase();

  return GameModeModel.find().sort({ label: 1 }).lean();
}

/**
 * Busca um modo de jogo por ID.
 */
export async function getGameModeById(id: string) {
  await connectToDatabase();

  return GameModeModel.findById(id).lean();
}

/**
 * Busca um modo de jogo por label.
 */
export async function getGameModeByLabel(label: string) {
  await connectToDatabase();

  return GameModeModel.findOne({ label }).lean();
}

/**
 * Cria um novo modo de jogo.
 */
export async function createGameMode(data: { label: string }) {
  await connectToDatabase();

  return GameModeModel.create(data);
}

/**
 * Atualiza um modo de jogo existente.
 */
export async function updateGameMode(
  id: string,
  data: {
    label?: string;
  },
) {
  await connectToDatabase();

  return GameModeModel.findByIdAndUpdate(id, data, {
    new: true,
  });
}
