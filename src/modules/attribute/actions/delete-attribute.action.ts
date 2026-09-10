"use server";

import { redirect } from "next/navigation";
import type { ActionState } from "@/shared/types";
import { ATTRIBUTES_CATALOG_PATH, ACTION_MESSAGES } from "@/shared/consts";
import { requireAdmin } from "@/modules/auth";
import { deleteAttributeSchema } from "@/modules/attribute/schemas";
import { deleteAttribute } from "@/modules/attribute/services";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/consts";

export async function deleteAttributeAction(
  _previousState: ActionState,
  formData: FormData,
) {
  const result = deleteAttributeSchema.safeParse({
    id: formData.get("id"),
    type: formData.get("typeCode"),
  });

  if (!result.success) {
    return {
      success: false,
      message: ACTION_MESSAGES.delete.failure,
    };
  }

  await requireAdmin();

  let deletedAttribute;

  try {
    deletedAttribute = await deleteAttribute(result.data.id);
  } catch {
    return {
      success: false,
      message: ACTION_MESSAGES.delete.failure,
    };
  }

  if (!deletedAttribute) {
    return {
      success: false,
      message: ACTION_MESSAGES.delete.failure,
    };
  }

  const attributeTypeSlug = ATTRIBUTE_TYPES[deletedAttribute.type].slug;

  redirect(ATTRIBUTES_CATALOG_PATH + attributeTypeSlug);
}
