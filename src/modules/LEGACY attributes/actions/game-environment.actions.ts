"use server";

import {
  listGameEnvironments,
  findGameEnvironmentById,
  addGameEnvironment,
  editGameEnvironment,
} from "../services";

/**
 * Interface entre Next.js e o domínio GameEnvironment.
 */

/**
 * Lista ambientes de jogo.
 */
export async function getGameEnvironmentsAction() {
  return listGameEnvironments();
}

/**
 * Busca ambiente por ID.
 */
export async function getGameEnvironmentByIdAction(id: string) {
  return findGameEnvironmentById(id);
}

/**
 * Cria ambiente de jogo.
 */
export async function createGameEnvironmentAction(data: { label: string }) {
  return addGameEnvironment(data);
}

/**
 * Atualiza ambiente de jogo.
 */
export async function updateGameEnvironmentAction(
  id: string,
  data: {
    label?: string;
  },
) {
  return editGameEnvironment(id, data);
}
