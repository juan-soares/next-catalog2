"use server";

import {
  listThemes,
  findThemeById,
  addTheme,
  editTheme,
} from "../services";

/**
 * Camada de integração entre Next.js e o domínio Theme.
 */

/**
 * Busca todos os themes.
 */
export async function getThemesAction() {
  return listThemes();
}

/**
 * Busca theme por ID.
 */
export async function getThemeByIdAction(id: string) {
  return findThemeById(id);
}

/**
 * Cria um novo theme.
 */
export async function createThemeAction(data: { label: string }) {
  return addTheme(data);
}

/**
 * Atualiza um theme existente.
 */
export async function updateThemeAction(
  id: string,
  data: {
    label?: string;
  },
) {
  return editTheme(id, data);
}
