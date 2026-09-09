"use server";

import { redirect } from "next/navigation";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/consts";
import { createAttributeSchema } from "@/modules/attribute/schemas";
import { createAttribute } from "@/modules/attribute/services";
import { CATALOG_ATTRIBUTES_PATH } from "@/consts/paths";

export async function createAttributeAction(formData: FormData) {
  const result = createAttributeSchema.safeParse({
    type: formData.get("type"),
    label: formData.get("label"),
  });

  if (!result.success) return;

  try {
    const newAttribute = await createAttribute({
      label: result.data.label,
      type: result.data.type,
    });

    const attributeTypeSlug = ATTRIBUTE_TYPES[newAttribute.type].slug;
    redirect(CATALOG_ATTRIBUTES_PATH + attributeTypeSlug);
  } catch {
    console.error("Deu erro ao criar;");
  }
}
