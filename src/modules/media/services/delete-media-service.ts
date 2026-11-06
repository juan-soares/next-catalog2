"use server";

import { deleteAsset } from "@/modules/asset/services";
import { mediaRepository } from "@/modules/media/repository";

export async function deleteMedia(id: string) {
  try {
    const deletedMedia = await mediaRepository.deleteOne(id);

    if (!deletedMedia) throw new Error("Operação falhou no banco de dados");

    const { assets } = deletedMedia;

    console.log(assets);

    return {
      success: true,
      message: "Mídia removida com sucesso!",
    };
  } catch (error) {
    console.log("Ocorreu um erro ao remover mídia:", error);

    return {
      success: false,
      message: "Não foi possível remover a mídia.",
    };
  }
}
