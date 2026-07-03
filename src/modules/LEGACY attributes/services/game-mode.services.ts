import {
  getGameModes,
  getGameModeById,
  getGameModeByLabel,
  createGameMode,
  updateGameMode,
} from "../repositories";

/**
 * Regras de negócio dos modos de jogo.
 */

/**
 * Lista todos os modos.
 */
export async function listGameModes() {
  return getGameModes();
}

/**
 * Busca modo por ID.
 */
export async function findGameModeById(id: string) {
  return getGameModeById(id);
}

/**
 * Cria um novo modo de jogo.
 */
export async function addGameMode(data: { label: string }) {
  const label = data.label.trim();

  if (!label) {
    throw new Error("Game mode label is required");
  }

  const existing = await getGameModeByLabel(label);

  if (existing) {
    throw new Error("Game mode already exists");
  }

  return createGameMode({ label });
}

/**
 * Atualiza um modo de jogo existente.
 */
export async function editGameMode(
  id: string,
  data: {
    label?: string;
  },
) {
  return updateGameMode(id, data);
}
