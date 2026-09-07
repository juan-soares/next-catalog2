"use server";

import { redirect } from "next/navigation";
import { ATTRIBUTES_CATALOG_PATH } from "@/consts/paths";
import { deleteAttribute } from "./delete-attribute.services";
import { deleteAttributeSchema } from "./delete-attribute.schema";

export async function deleteAttributeAction(formData: FormData) {
  const result = deleteAttributeSchema.safeParse({
    slug: formData.get("slug"),
    type: formData.get("type"),
  });

  if (!result.success) {
    return {
      success: false,
      error: "Dados inválidos.",
    };
  }

  await deleteAttribute(result.data);

  redirect(ATTRIBUTES_CATALOG_PATH);
}
