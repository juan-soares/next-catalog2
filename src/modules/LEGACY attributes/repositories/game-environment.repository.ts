import { connectToDatabase } from "@/lib/mongoose";
import { GameEnvironmentModel } from "../models/game-environment.model";

/**
 * Responsável por acessar e persistir ambientes de gameplay no banco de dados.
 */

/**
 * Lista todos os ambientes de jogo.
 */
export async function getGameEnvironments() {
  await connectToDatabase();

  return GameEnvironmentModel.find().sort({ label: 1 }).lean();
}

/**
 * Busca um ambiente por ID.
 */
export async function getGameEnvironmentById(id: string) {
  await connectToDatabase();

  return GameEnvironmentModel.findById(id).lean();
}

/**
 * Busca um ambiente por label.
 */
export async function getGameEnvironmentByLabel(label: string) {
  await connectToDatabase();

  return GameEnvironmentModel.findOne({ label }).lean();
}

/**
 * Cria um novo ambiente de jogo.
 */
export async function createGameEnvironment(data: { label: string }) {
  await connectToDatabase();

  return GameEnvironmentModel.create(data);
}

/**
 * Atualiza um ambiente de jogo existente.
 */
export async function updateGameEnvironment(
  id: string,
  data: {
    label?: string;
  },
) {
  await connectToDatabase();

  return GameEnvironmentModel.findByIdAndUpdate(id, data, {
    new: true,
  });
}
