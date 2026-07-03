"use server";

import {
  listGameModes,
  findGameModeById,
  addGameMode,
  editGameMode,
} from "../services";

/**
 * Interface entre Next.js e o domínio GameMode.
 */

/**
 * Lista modos de jogo.
 */
export async function getGameModesAction() {
  return listGameModes();
}

/**
 * Busca modo por ID.
 */
export async function getGameModeByIdAction(id: string) {
  return findGameModeById(id);
}

/**
 * Cria modo de jogo.
 */
export async function createGameModeAction(data: { label: string }) {
  return addGameMode(data);
}

/**
 * Atualiza modo de jogo.
 */
export async function updateGameModeAction(
  id: string,
  data: {
    label?: string;
  },
) {
  return editGameMode(id, data);
}
