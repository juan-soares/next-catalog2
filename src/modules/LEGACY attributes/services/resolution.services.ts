import {
  getResolutions,
  getResolutionById,
  getResolutionByCode,
  createResolution,
  updateResolution,
} from "../repositories";

/**
 * Regras de negócio das resoluções.
 */

/**
 * Lista todas as resoluções.
 */
export async function listResolutions() {
  return getResolutions();
}

/**
 * Busca resolução por ID.
 */
export async function findResolutionById(id: string) {
  return getResolutionById(id);
}

/**
 * Cria uma nova resolução.
 */
export async function addResolution(data: { label: string; code: string }) {
  const label = data.label.trim();
  const code = data.code.trim().toLowerCase();

  if (!label) {
    throw new Error("Resolution label is required");
  }

  if (!code) {
    throw new Error("Resolution code is required");
  }

  const existing = await getResolutionByCode(code);

  if (existing) {
    throw new Error("Resolution already exists");
  }

  return createResolution({
    label,
    code,
  });
}

/**
 * Atualiza uma resolução existente.
 */
export async function editResolution(
  id: string,
  data: {
    label?: string;
    code?: string;
  },
) {
  if (data.code) {
    data.code = data.code.trim().toLowerCase();
  }

  return updateResolution(id, data);
}
