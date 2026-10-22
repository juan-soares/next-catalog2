"use server";

import z from "zod";
import { redirect } from "next/navigation";
import { createMedia } from "@/modules/media/services";
import { createMediaSchema } from "@/modules/media/schemas";

export async function createMediaAction(formData: FormData) {
  const result = createMediaSchema.safeParse({
    title: formData.get("title"),
    translatedTitle: formData.get("translatedTitle"),
    releaseDate: formData.get("releaseDate"),
    synopsis: formData.get("synopsis"),
    languages: formData.getAll("languages"),
    characters: formData.getAll("characters"),
    themes: formData.getAll("themes"),
    franchise: formData.get("franchise"),
    sequel: formData.get("sequel"),
    cover: formData.get("cover"),
    trailer: formData.get("trailer"),
    gallery: formData.getAll("gallery"),
  });

  if (!result.success) {
    console.error(z.treeifyError(result.error));
    return;
  }

  await createMedia(result.data);

  redirect("/animes/1");
}
