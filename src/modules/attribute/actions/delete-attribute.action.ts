"use server";

import { redirect } from "next/navigation";
import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { deleteAttributeSchema } from "@/modules/attribute/schemas";
import { deleteAttribute } from "@/modules/attribute/services";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/consts";

export async function deleteAttributeAction(formData: FormData) {
  const result = deleteAttributeSchema.safeParse({
    id: formData.get("id"),
    typeCode: formData.get("type"),
  });

  if (!result.success) {
    return;
  }

  const success = await deleteAttribute(result.data.id);

  if (!success) {
    return;
  }

  const attributeTypeSlug = ATTRIBUTE_TYPES[result.data.typeCode].slug;
  redirect(ATTRIBUTES_CATALOG_PATH + attributeTypeSlug);
}
