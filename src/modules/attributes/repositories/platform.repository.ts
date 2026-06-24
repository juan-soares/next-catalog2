import { connectToDatabase } from "@/lib/mongoose";
import { PlatformModel } from "../models/platform.model";

/**
 * Responsável por acessar e persistir os dados de platforms no banco de dados.
 *
 * Esta camada não contém regras de negócio.
 * Sua única responsabilidade é realizar operações de leitura e escrita.
 */

/**
 * Busca todas as plataformas cadastradas.
 */
export async function getPlatforms() {
  await connectToDatabase();

  return PlatformModel.find().sort({ label: 1 }).lean();
}

/**
 * Busca uma plataforma pelo ID.
 */
export async function getPlatformById(id: string) {
  await connectToDatabase();

  return PlatformModel.findById(id).lean();
}

/**
 * Busca uma plataforma pelo código.
 */
export async function getPlatformByCode(code: string) {
  await connectToDatabase();

  return PlatformModel.findOne({
    code: code.toUpperCase(),
  }).lean();
}

/**
 * Cria uma nova plataforma.
 */
export async function createPlatform(data: { label: string; code: string }) {
  await connectToDatabase();

  return PlatformModel.create({
    ...data,
    code: data.code.toUpperCase(),
  });
}

/**
 * Atualiza uma plataforma existente.
 */
export async function updatePlatform(
  id: string,
  data: {
    label?: string;
    code?: string;
  },
) {
  await connectToDatabase();

  return PlatformModel.findByIdAndUpdate(
    id,
    {
      ...data,
      ...(data.code ? { code: data.code.toUpperCase() } : {}),
    },
    {
      new: true,
    },
  );
}
