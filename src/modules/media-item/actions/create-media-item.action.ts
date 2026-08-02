"use server";

import { redirect } from "next/navigation";
import { createMediaItemSchema } from "../schemas";
import { createMediaItem } from "../services";

export async function createMediaItemAction(formData: FormData): Promise<void> {
  const input = createMediaItemSchema.parse({
    mediaType: formData.get("mediaType"),

    title: formData.get("title"),

    translatedTitle: formData.get("translatedTitle"),

    releaseDate: formData.get("releaseDate"),

    synopsis: formData.get("synopsis"),

    cover: formData.get("cover"),

    trailer: formData.get("trailer"),

    themes: formData.getAll("themes"),

    franchises: formData.getAll("franchises"),

    acquired: formData.get("acquired") === "true",

    complete: formData.get("complete") === "true",

    characters: JSON.parse(String(formData.get("characters") ?? "[]")),
  });

  await createMediaItem(input);

  redirect(`/catalogo/midias/${input.mediaType}`);
}
