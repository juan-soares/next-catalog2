"use server";

import { redirect } from "next/navigation";
import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { AttributeTypeKey } from "@/modules/attribute-type";
import { createAttributeItem } from "../services";

export async function createAttributeItemAction(formData: FormData) {
  const label = formData.get("label")?.toString();
  const attributeType = formData
    .get("attributeType")
    ?.toString() as AttributeTypeKey;

  if (!label || !attributeType) return;

  const success = await createAttributeItem({ label, attributeType });

  if (!success) return;

  redirect(ATTRIBUTES_CATALOG_PATH);
}
