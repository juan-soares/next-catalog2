"use server";

import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { redirect } from "next/navigation";
import { deleteAttributeItem } from "../services";

export async function deleteAttributeItemAction(formData: FormData) {
  const id = formData.get("id")?.toString();

  if (!id) return;

  await deleteAttributeItem(id);

  redirect(ATTRIBUTES_CATALOG_PATH);
}
