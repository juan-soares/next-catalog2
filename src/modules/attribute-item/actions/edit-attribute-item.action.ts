"use server";

import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { redirect } from "next/navigation";
import { updateAttributeItem } from "../services";
import { AttributeTypeKey } from "@/modules/attribute-type";

export async function editAttributeItemAction(formData: FormData) {
  const id = formData.get("id")?.toString();
  const attributeType = formData
    .get("attributeType")
    ?.toString() as AttributeTypeKey;
  const label = formData.get("label")?.toString();

  if (!id || !attributeType || !label) return;

  const success = await updateAttributeItem({ id, attributeType, label });

  if (!success) return;

  redirect(ATTRIBUTES_CATALOG_PATH);
}
