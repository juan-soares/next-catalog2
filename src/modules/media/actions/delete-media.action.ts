"use server";

import z from "zod";
import { redirect } from "next/navigation";
import { deleteMediaSchema } from "@/modules/media/schemas";
import { deleteMedia } from "@/modules/media/services";

export async function deleteMediaAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const result = deleteMediaSchema.safeParse(data);

  if (!result.success) {
    console.log(z.treeifyError(result.error));
    return;
  }

  const { id, typeSlug } = result.data;

  await deleteMedia(id);

  redirect(`/${typeSlug}`);
}
