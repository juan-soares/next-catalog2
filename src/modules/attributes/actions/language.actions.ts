"use server";

import {
  listLanguages,
  findLanguageById,
  addLanguage,
  editLanguage,
} from "../services";

/**
 * Busca todos os idiomas
 * Usado por páginas e componentes do Next.js
 */
export async function getLanguagesAction() {
  return listLanguages();
}

/**
 * Busca idioma por ID
 */
export async function getLanguageByIdAction(id: string) {
  return findLanguageById(id);
}

/**
 * Cria novo idioma
 */
export async function createLanguageAction(data: {
  label: string;
  code: string;
}) {
  return addLanguage(data);
}

/**
 * Atualiza idioma existente
 */
export async function updateLanguageAction(
  id: string,
  data: { label?: string; code?: string },
) {
  return editLanguage(id, data);
}
