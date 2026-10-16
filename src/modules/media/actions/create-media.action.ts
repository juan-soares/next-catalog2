"use server";

import z from "zod";
import { redirect } from "next/navigation";
import { createMediaSchema } from "@/modules/media/schemas";
import { createMedia } from "@/modules/media/services";

export async function createMediaAction(formData: FormData) {
  const result = createMediaSchema.safeParse({
    title: formData.get("title"),
    translatedTitle: formData.get("translatedTitle"),
    releaseDate: formData.get("releaseDate"),
    synopsis: formData.get("synopsis"),
    languages: formData.getAll("languages"),
    themes: formData.getAll("themes"),
    franchise: formData.get("franchise"),
    cover: formData.get("cover"),
    trailer: formData.get("trailer"),
    gallery: formData.getAll("gallery"),
    files: formData.getAll("files"),
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    console.error(errors);
    return;
  }

  await createMedia(result.data);

  redirect("/animes/1");
}
