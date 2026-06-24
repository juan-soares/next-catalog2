import {
  getLanguages,
  getLanguageById,
  getLanguageByCode,
  createLanguage,
  updateLanguage,
} from "../repositories";

/**
 * Contém as regras de negócio relacionadas aos idiomas.
 *
 * Esta camada coordena validações e comportamentos do domínio,
 * sem conhecer detalhes do banco de dados ou da interface.
 */

/**
 * Lista todos os idiomas.
 */
export async function listLanguages() {
  return getLanguages();
}

/**
 * Busca um idioma pelo ID.
 */
export async function findLanguageById(id: string) {
  return getLanguageById(id);
}

/**
 * Cria um novo idioma.
 */
export async function addLanguage(data: { label: string; code: string }) {
  const label = data.label.trim();
  const code = data.code.trim().toUpperCase();

  if (!label) {
    throw new Error("Language label is required");
  }

  if (!code) {
    throw new Error("Language code is required");
  }

  const existingLanguage = await getLanguageByCode(code);

  if (existingLanguage) {
    throw new Error("Language already exists");
  }

  return createLanguage({
    label,
    code,
  });
}

/**
 * Atualiza um idioma existente.
 */
export async function editLanguage(
  id: string,
  data: {
    label?: string;
    code?: string;
  },
) {
  return updateLanguage(id, data);
}
