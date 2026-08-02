"use server";

import { redirect } from "next/navigation";
import { createAnimeSchema } from "../schemas";
import { createAnime } from "../services";

export async function createAnimeAction(formData: FormData): Promise<void> {
  const input = createAnimeSchema.parse({
    title: formData.get("title"),
    translatedTitle: formData.get("translatedTitle"),
    releaseDate: formData.get("releaseDate"),

    sinopsys: formData.get("sinopsys"),

    cover: formData.get("cover"),
    trailer: formData.get("trailer"),

    themes: formData.getAll("themes"),

    acquired: formData.get("acquired"),
    complete: formData.get("complete"),

    characters: JSON.parse(formData.get("characters") as string),
  });

  await createAnime(input);

  redirect("/catalogo/midias/animes");
}
