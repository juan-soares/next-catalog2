"use server";

import { redirect } from "next/navigation";
import type { ActionState } from "@/shared/types";
import { ACTION_MESSAGES, CATALOG_FRANCHISES_PATH } from "@/shared/consts";
import { requireAdmin } from "@/modules/auth";
import { createFranchiseSchema } from "@/modules/franchise/schemas";
import { createFranchise } from "@/modules/franchise/services";
import type { Franchise } from "@/modules/franchise/types";

export async function createFranchiseAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const result = createFranchiseSchema.safeParse({
    title: formData.get("title"),
    translatedTitle: formData.get("translatedTitle"),
    logo: formData.get("logo"),
    parentFranchiseId: formData.get("parentFranchiseId"),
  });

  if (!result.success) {
    return {
      success: false,
      message: ACTION_MESSAGES.create.failure,
    };
  }

  let newFranchise: Franchise;

  try {
    newFranchise = await createFranchise({
      title: result.data.title,
      translatedTitle: result.data.translatedTitle,
      logo: result.data.logo,
      parentFranchiseId: result.data.parentFranchiseId,
    });
  } catch {
    return {
      success: false,
      message: ACTION_MESSAGES.create.failure,
    };
  }

  redirect(CATALOG_FRANCHISES_PATH + newFranchise.id);
}
