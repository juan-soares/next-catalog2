import { connectToDatabase } from "@/lib/mongoose";
import { ResolutionModel } from "../models/resolution.model";

/**
 * Responsável por acessar e persistir resoluções no banco de dados.
 */

/**
 * Lista todas as resoluções.
 */
export async function getResolutions() {
  await connectToDatabase();

  return ResolutionModel.find().sort({ code: -1 }).lean();
}

/**
 * Busca uma resolução por ID.
 */
export async function getResolutionById(id: string) {
  await connectToDatabase();

  return ResolutionModel.findById(id).lean();
}

/**
 * Busca uma resolução pelo código.
 */
export async function getResolutionByCode(code: string) {
  await connectToDatabase();

  return ResolutionModel.findOne({
    code: code.toLowerCase(),
  }).lean();
}

/**
 * Cria uma nova resolução.
 */
export async function createResolution(data: { label: string; code: string }) {
  await connectToDatabase();

  return ResolutionModel.create({
    ...data,
    code: data.code.toLowerCase(),
  });
}

/**
 * Atualiza uma resolução existente.
 */
export async function updateResolution(
  id: string,
  data: {
    label?: string;
    code?: string;
  },
) {
  return ResolutionModel.findByIdAndUpdate(
    id,
    {
      ...data,
      ...(data.code ? { code: data.code.toLowerCase() } : {}),
    },
    { new: true },
  );
}
