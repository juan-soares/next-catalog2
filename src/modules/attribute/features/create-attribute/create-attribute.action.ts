"use server";

import { redirect } from "next/navigation";
import { CATALOG_ATTRIBUTES_PATH } from "@/consts/paths";
import { ATTRIBUTE_TYPES } from "../../domain";
import { createAttributeSchema } from "./create-attribute.schema";
import { createAttribute } from "./create-attribute.service";

export async function createAttributeAction(formData: FormData) {
  const result = createAttributeSchema.safeParse({
    type: formData.get("type"),
    label: formData.get("label"),
  });

  if (!result.success) {
    return;
  }

  const newAttribute = await createAttribute(result.data);

  if (!newAttribute) {
    return;
  }

  const attributeTypeSlug = ATTRIBUTE_TYPES[newAttribute.type].slug;
  redirect(CATALOG_ATTRIBUTES_PATH + attributeTypeSlug);
}
