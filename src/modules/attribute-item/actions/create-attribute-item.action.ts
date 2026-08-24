"use server";

import { redirect } from "next/navigation";
import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { AttributeTypeKey } from "@/modules/attribute-type";
import { createAttributeItem } from "../services";

export async function createAttributeItemAction(formData: FormData) {
  const value = formData.get("value")?.toString();
  const type = formData.get("type")?.toString();

  if (!value || !type) return;

  const success = await createAttributeItem(value, type as AttributeTypeKey);

  if (!success) return;

  redirect(ATTRIBUTES_CATALOG_PATH);
}
