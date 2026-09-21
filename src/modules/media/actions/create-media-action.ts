"use server";

import { redirect } from "next/navigation";
import { ACTION_MESSAGES, CATALOG_MEDIAS_PATH } from "@/shared/consts";
import type { ActionState } from "@/shared/types";
import { requireAdmin } from "@/modules/auth";
import { MEDIA_TYPES_REGISTRY, MediaTypeCode } from "@/modules/media-type";
import type { MediaDetails } from "@/modules/media/types";
import { createMediaSchema } from "@/modules/media/schemas";
import { createMedia } from "@/modules/media/services";

export async function createMediaAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const result = createMediaSchema.safeParse({
    title: formData.get("title"),
    translatedTitle: formData.get("translatedTitle"),
    releaseDate: formData.get("releaseDate"),
    cover: formData.get("cover"),
    type: formData.get("type"),
  });

  if (!result.success) {
    return {
      success: false,
      message: ACTION_MESSAGES.create.failure,
    };
  }

  let newMedia: MediaDetails;
  let typeSlug: string;

  try {
    newMedia = await createMedia({
      title: result.data.title,
      translatedTitle: result.data.translatedTitle ?? "",
      releaseDate: result.data.releaseDate,
      cover: result.data.cover,
      type: result.data.type,
    });

    typeSlug = MEDIA_TYPES_REGISTRY[newMedia.type as MediaTypeCode].slug;
  } catch {
    return {
      success: false,
      message: ACTION_MESSAGES.create.failure,
    };
  }

  redirect(`${CATALOG_MEDIAS_PATH}/${typeSlug}/${newMedia.id}`);
}
