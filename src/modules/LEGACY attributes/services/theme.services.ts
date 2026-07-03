import {
  getThemes,
  getThemeById,
  getThemeByLabel,
  createTheme,
  updateTheme,
} from "../repositories";

/**
 * Contém as regras de negócio relacionadas aos themes.
 */

/**
 * Lista todos os themes.
 */
export async function listThemes() {
  return getThemes();
}

/**
 * Busca theme por ID.
 */
export async function findThemeById(id: string) {
  return getThemeById(id);
}

/**
 * Cria um novo theme.
 */
export async function addTheme(data: { label: string }) {
  const label = data.label.trim();

  if (!label) {
    throw new Error("Theme label is required");
  }

  const existing = await getThemeByLabel(label);

  if (existing) {
    throw new Error("Theme already exists");
  }

  return createTheme({ label });
}

/**
 * Atualiza um theme existente.
 */
export async function editTheme(
  id: string,
  data: {
    label?: string;
  },
) {
  return updateTheme(id, data);
}
