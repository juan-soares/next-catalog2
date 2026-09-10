"use server";

import { redirect } from "next/navigation";
import type { ActionState } from "@/shared/types";
import { ACTION_MESSAGES, CATALOG_ATTRIBUTES_PATH } from "@/shared/consts";
import { requireAdmin } from "@/modules/auth";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/consts";
import { createAttributeSchema } from "@/modules/attribute/schemas";
import { createAttribute } from "@/modules/attribute/services";

export async function createAttributeAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const result = createAttributeSchema.safeParse({
    type: formData.get("type"),
    label: formData.get("label"),
  });

  if (!result.success) {
    return {
      success: false,
      message: ACTION_MESSAGES.create.failure,
    };
  }

  await requireAdmin();

  let newAttribute;

  try {
    newAttribute = await createAttribute({
      label: result.data.label,
      type: result.data.type,
    });
  } catch {
    return {
      success: false,
      message: ACTION_MESSAGES.create.failure,
    };
  }

  const attributeTypeSlug = ATTRIBUTE_TYPES[newAttribute.type].slug;

  redirect(CATALOG_ATTRIBUTES_PATH + attributeTypeSlug);
}
