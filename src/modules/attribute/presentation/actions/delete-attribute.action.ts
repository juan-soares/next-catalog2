"use server";

import { redirect } from "next/navigation";

import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { deleteAttribute } from "@/modules/attribute/application";

export async function deleteAttributeAction(formData: FormData) {
  const id = formData.get("id")?.toString();
  if (!id) return;
  await deleteAttribute(id);

  redirect(ATTRIBUTES_CATALOG_PATH);
}
