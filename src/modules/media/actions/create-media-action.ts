"use server";

import { redirect } from "next/navigation";
import { ACTION_MESSAGES, CATALOG_MEDIAS_PATH } from "@/shared/consts";
import type { ActionState } from "@/shared/types";
import { requireAdmin } from "@/modules/auth";
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
    typeCode: formData.get("typeCode"),
    synopsis: formData.get("synopsis"),
    themeIds: formData
      .getAll("themes")
      .filter((value): value is string => typeof value === "string"),
  });

  if (!result.success) {
    return {
      success: false,
      message: ACTION_MESSAGES.create.failure,
    };
  }

  let newMedia: MediaDetails;

  try {
    newMedia = await createMedia({
      title: result.data.title,
      translatedTitle: result.data.translatedTitle,
      releaseDate: result.data.releaseDate,
      typeCode: result.data.typeCode,
      synopsis: result.data.synopsis,
      themeIds: result.data.themeIds,
    });
  } catch {
    return {
      success: false,
      message: ACTION_MESSAGES.create.failure,
    };
  }

  redirect(`${CATALOG_MEDIAS_PATH}/${newMedia.type.slug}/${newMedia.slug}`);
}
