import {
  getLanguages,
  getLanguageById,
  createLanguage,
  updateLanguage,
} from "../repositories";

/**
 * Retorna todos os idiomas disponíveis
 */
export async function listLanguages() {
  return getLanguages();
}

/**
 * Busca idioma por ID
 */
export async function findLanguageById(id: string) {
  return getLanguageById(id);
}

/**
 * Cria novo idioma com validações básicas
 */
export async function addLanguage(data: { label: string; code: string }) {
  if (!data.label || !data.code) {
    throw new Error("label and code are required");
  }

  return createLanguage(data);
}

/**
 * Atualiza idioma existente
 */
export async function editLanguage(
  id: string,
  data: { label?: string; code?: string },
) {
  return updateLanguage(id, data);
}
