import {
  getPlatforms,
  getPlatformById,
  getPlatformByCode,
  createPlatform,
  updatePlatform,
} from "../repositories";

/**
 * Contém as regras de negócio relacionadas às platforms.
 */

/**
 * Lista todas as plataformas.
 */
export async function listPlatforms() {
  return getPlatforms();
}

/**
 * Busca plataforma por ID.
 */
export async function findPlatformById(id: string) {
  return getPlatformById(id);
}

/**
 * Cria uma nova plataforma.
 */
export async function addPlatform(data: { label: string; code: string }) {
  const label = data.label.trim();
  const code = data.code.trim().toUpperCase();

  if (!label) {
    throw new Error("Platform label is required");
  }

  if (!code) {
    throw new Error("Platform code is required");
  }

  const existing = await getPlatformByCode(code);

  if (existing) {
    throw new Error("Platform already exists");
  }

  return createPlatform({
    label,
    code,
  });
}

/**
 * Atualiza uma plataforma existente.
 */
export async function editPlatform(
  id: string,
  data: {
    label?: string;
    code?: string;
  },
) {
  if (data.code) {
    data.code = data.code.trim().toUpperCase();
  }

  return updatePlatform(id, data);
}
