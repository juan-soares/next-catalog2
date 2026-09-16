"use server";

import { redirect } from "next/navigation";
import type { ActionState } from "@/shared/types";
import { ACTION_MESSAGES, CATALOG_FRANCHISES_PATH } from "@/shared/consts";
import { requireAdmin } from "@/modules/auth";
import { deleteFranchiseSchema } from "@/modules/franchise/schemas";
import { deleteFranchise } from "@/modules/franchise/services";

export async function deleteFranchiseAction(
  _previousState: ActionState,
  formData: FormData,
) {
  const result = deleteFranchiseSchema.safeParse({
    id: formData.get("id"),
  });

  if (!result.success) {
    return {
      success: false,
      message: ACTION_MESSAGES.delete.failure,
    };
  }

  await requireAdmin();

  let deletedFranchise;

  try {
    deletedFranchise = await deleteFranchise(result.data.id);
  } catch {
    return {
      success: false,
      message: ACTION_MESSAGES.delete.failure,
    };
  }

  if (!deletedFranchise) {
    return {
      success: false,
      message: ACTION_MESSAGES.delete.failure,
    };
  }

  redirect(CATALOG_FRANCHISES_PATH);
}
