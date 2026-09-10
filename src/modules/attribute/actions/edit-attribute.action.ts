"use server";

import { redirect } from "next/navigation";
import { CATALOG_ATTRIBUTES_PATH } from "@/consts/paths";
import { editAttributeSchema } from "@/modules/attribute/schemas";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/consts";
import { editAttribute } from "@/modules/attribute/services";
import { requireAdmin } from "@/modules/auth";

export async function editAttributeAction(formData: FormData) {
  const result = editAttributeSchema.safeParse({
    id: formData.get("id"),
    label: formData.get("label"),
  });

  if (!result.success) return;

  await requireAdmin();

  let updatedAttribute;

  try {
    updatedAttribute = await editAttribute(result.data);
  } catch {
    console.error("Deu erro ao editar");
    return;
  }

  if (!updatedAttribute) return;

  const attributeTypeSlug = ATTRIBUTE_TYPES[updatedAttribute.type].slug;

  redirect(CATALOG_ATTRIBUTES_PATH + attributeTypeSlug);
}
