import {
  getGameEnvironments,
  getGameEnvironmentById,
  getGameEnvironmentByLabel,
  createGameEnvironment,
  updateGameEnvironment,
} from "../repositories";

/**
 * Regras de negócio dos ambientes de gameplay.
 */

/**
 * Lista todos os ambientes.
 */
export async function listGameEnvironments() {
  return getGameEnvironments();
}

/**
 * Busca ambiente por ID.
 */
export async function findGameEnvironmentById(id: string) {
  return getGameEnvironmentById(id);
}

/**
 * Cria um novo ambiente.
 */
export async function addGameEnvironment(data: { label: string }) {
  const label = data.label.trim();

  if (!label) {
    throw new Error("Game environment label is required");
  }

  const existing = await getGameEnvironmentByLabel(label);

  if (existing) {
    throw new Error("Game environment already exists");
  }

  return createGameEnvironment({ label });
}

/**
 * Atualiza um ambiente existente.
 */
export async function editGameEnvironment(
  id: string,
  data: {
    label?: string;
  },
) {
  return updateGameEnvironment(id, data);
}
