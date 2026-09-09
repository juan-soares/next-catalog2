"use server";

import { redirect } from "next/navigation";
import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { deleteAttributeSchema } from "@/modules/attribute/schemas";
import { deleteAttribute } from "@/modules/attribute/services";
import { ATTRIBUTE_TYPES } from "@/modules/attribute/consts";

export async function deleteAttributeAction(formData: FormData) {
  const result = deleteAttributeSchema.safeParse({
    id: formData.get("id"),
    type: formData.get("typeCode"),
  });

  if (!result.success) {
    return;
  }

  const deletedAttribute = await deleteAttribute(result.data.id);

  if (!deletedAttribute) return;

  const attributeTypeSlug = ATTRIBUTE_TYPES[deletedAttribute.type].slug;
  redirect(ATTRIBUTES_CATALOG_PATH + attributeTypeSlug);
}
