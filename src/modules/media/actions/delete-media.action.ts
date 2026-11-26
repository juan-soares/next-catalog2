"use server";

import z from "zod";
import type { ActionResponse } from "@/shared/types";
import { deleteMediaSchema } from "@/modules/media/schemas";
import { deleteMedia } from "@/modules/media/services";
import { MEDIA_CATEGORIES_CONFIG } from "@/modules/media-category/consts";

export async function deleteMediaAction(
  _prevState: ActionResponse,
  formData: FormData,
): Promise<ActionResponse> {
  const result = deleteMediaSchema.safeParse({
    id: formData.get("id"),
  });

  if (!result.success) {
    console.error("Erro ao validar a exclusão:", z.treeifyError(result.error));

    return {
      status: "error",
      message: "Erro ao validar o formuário.",
    };
  }

  const categoryCode = await deleteMedia(result.data.id);

  if (!categoryCode) {
    return {
      status: "error",
      message: "Não foi possível remover a mídia. Tente novamente.",
    };
  }

  return {
    status: "success",
    message: "Mídia removida com sucesso!",
    redirectTo: `/${MEDIA_CATEGORIES_CONFIG[categoryCode].slug}`,
  };
}
