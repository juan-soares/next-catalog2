"use server";

import {
  listPlatforms,
  findPlatformById,
  addPlatform,
  editPlatform,
} from "../services";

/**
 * Camada de integração entre Next.js e o domínio Platform.
 */

/**
 * Busca todas as plataformas.
 */
export async function getPlatformsAction() {
  return listPlatforms();
}

/**
 * Busca plataforma por ID.
 */
export async function getPlatformByIdAction(id: string) {
  return findPlatformById(id);
}

/**
 * Cria uma nova plataforma.
 */
export async function createPlatformAction(data: {
  label: string;
  code: string;
}) {
  return addPlatform(data);
}

/**
 * Atualiza uma plataforma existente.
 */
export async function updatePlatformAction(
  id: string,
  data: {
    label?: string;
    code?: string;
  },
) {
  return editPlatform(id, data);
}
