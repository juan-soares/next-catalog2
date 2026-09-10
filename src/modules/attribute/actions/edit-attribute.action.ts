"use server";

import { redirect } from "next/navigation";
import type { ActionState } from "@/shared/types";
import { ACTION_MESSAGES, CATALOG_ATTRIBUTES_PATH } from "@/shared/consts";
import { requireAdmin } from "@/modules/auth";
import { editAttributeSchema } from "@/modules/attribute/schemas";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/consts";
import { editAttribute } from "@/modules/attribute/services";

export async function editAttributeAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const result = editAttributeSchema.safeParse({
    id: formData.get("id"),
    label: formData.get("label"),
  });

  if (!result.success)
    return {
      success: false,
      message: ACTION_MESSAGES.edit.failure,
    };

  await requireAdmin();

  let updatedAttribute;

  try {
    updatedAttribute = await editAttribute(result.data);
  } catch {
    console.error("Deu erro ao editar");
    return {
      success: false,
      message: ACTION_MESSAGES.edit.failure,
    };
  }

  if (!updatedAttribute)
    return {
      success: false,
      message: ACTION_MESSAGES.edit.failure,
    };

  const attributeTypeSlug = ATTRIBUTE_TYPES[updatedAttribute.type].slug;

  redirect(CATALOG_ATTRIBUTES_PATH + attributeTypeSlug);
}
