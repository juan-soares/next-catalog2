"use server";

import {
  listLanguages,
  findLanguageById,
  addLanguage,
  editLanguage,
} from "../services";

/**
 * Camada de integração entre Next.js e o domínio Language.
 *
 * Recebe chamadas da interface e delega o trabalho para os Services.
 */

/**
 * Busca todos os idiomas.
 */
export async function getLanguagesAction() {
  return listLanguages();
}

/**
 * Busca um idioma pelo ID.
 */
export async function getLanguageByIdAction(id: string) {
  return findLanguageById(id);
}

/**
 * Cria um novo idioma.
 */
export async function createLanguageAction(data: {
  label: string;
  code: string;
}) {
  return addLanguage(data);
}

/**
 * Atualiza um idioma existente.
 */
export async function updateLanguageAction(
  id: string,
  data: {
    label?: string;
    code?: string;
  },
) {
  return editLanguage(id, data);
}
