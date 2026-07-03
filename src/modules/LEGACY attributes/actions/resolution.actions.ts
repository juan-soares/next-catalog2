"use server";

import {
  listResolutions,
  findResolutionById,
  addResolution,
  editResolution,
} from "../services";

/**
 * Interface entre Next.js e o domínio Resolution.
 */

/**
 * Lista resoluções.
 */
export async function getResolutionsAction() {
  return listResolutions();
}

/**
 * Busca resolução por ID.
 */
export async function getResolutionByIdAction(id: string) {
  return findResolutionById(id);
}

/**
 * Cria resolução.
 */
export async function createResolutionAction(data: {
  label: string;
  code: string;
}) {
  return addResolution(data);
}

/**
 * Atualiza resolução.
 */
export async function updateResolutionAction(
  id: string,
  data: {
    label?: string;
    code?: string;
  },
) {
  return editResolution(id, data);
}
