"use server";

import { redirect } from "next/navigation";
import { editAttributeSchema } from "@/modules/attribute/schemas";

export async function editAttributeAction(formData: FormData) {
  const result = editAttributeSchema.safeParse({
    id: formData.get("id"),
    label: formData.get("label"),
    type: formData.get("type"),
  });

  if (!result.success) {
    return;
  }

  const updatedAttribute = await editAttribute(result.data);

  if (!updatedAttribute) {
    return;
  }

  const attributeTypeSlug = ATTRIBUTE_TYPES[updatedAttribute.type].slug;

  redirect(CATALOG_ATTRIBUTES_PATH + attributeTypeSlug);
}
