"use server";

import { redirect } from "next/navigation";
import { ATTRIBUTE_TYPES } from "../../domain";
import { CATALOG_ATTRIBUTES_PATH } from "@/consts/paths";
import { editAttributeSchema } from "./edit-attribute.schema";
import { editAttribute } from "./edit-attribute.service";

export async function editAttributeAction(formData: FormData) {
  const result = editAttributeSchema.safeParse({
    slug: formData.get("slug"),
    type: formData.get("type"),
    label: formData.get("label"),
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
