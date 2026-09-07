"use server";

import { redirect } from "next/navigation";
import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { deleteAttribute } from "./delete-attribute.services";
import { deleteAttributeSchema } from "./delete-attribute.schema";
import { ATTRIBUTE_TYPES } from "../../domain";

export async function deleteAttributeAction(formData: FormData) {
  const result = deleteAttributeSchema.safeParse({
    slug: formData.get("slug"),
    type: formData.get("type"),
  });

  if (!result.success) {
    return;
  }

  const success = await deleteAttribute(result.data);

  if (!success) {
    return;
  }
  const attributeTypeSlug = ATTRIBUTE_TYPES[result.data.type].slug;
  redirect(ATTRIBUTES_CATALOG_PATH + attributeTypeSlug);
}
