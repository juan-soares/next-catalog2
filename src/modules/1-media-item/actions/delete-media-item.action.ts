"use server";

import { redirect } from "next/navigation";
import { deleteMediaItemSchema } from "../schemas";
import { deleteMediaItem } from "../services";

export async function deleteMediaItemAction(formData: FormData): Promise<void> {
  const input = deleteMediaItemSchema.parse({
    mediaType: formData.get("itemType"),
    slug: formData.get("slug"),
  });

  await deleteMediaItem(input.mediaType, input.slug);

  redirect(`/catalogo/midias/${input.mediaType}`);
}
