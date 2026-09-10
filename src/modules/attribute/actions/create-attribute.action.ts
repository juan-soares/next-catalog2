"use server";

import { redirect } from "next/navigation";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/consts";
import { createAttributeSchema } from "@/modules/attribute/schemas";
import { createAttribute } from "@/modules/attribute/services";
import { CATALOG_ATTRIBUTES_PATH } from "@/consts/paths";
import { requireAdmin } from "@/modules/auth";

export async function createAttributeAction(formData: FormData) {
  const result = createAttributeSchema.safeParse({
    type: formData.get("type"),
    label: formData.get("label"),
  });

  if (!result.success) return;

  await requireAdmin();

  let newAttribute;

  try {
    newAttribute = await createAttribute({
      label: result.data.label,
      type: result.data.type,
    });
  } catch {
    console.error("Deu erro ao criar");
    return;
  }

  const attributeTypeSlug = ATTRIBUTE_TYPES[newAttribute.type].slug;

  redirect(CATALOG_ATTRIBUTES_PATH + attributeTypeSlug);
}
