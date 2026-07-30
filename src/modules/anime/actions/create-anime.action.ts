"use server";

import { redirect } from "next/navigation";
import { createAnimeSchema } from "../schemas";
import { createAnime } from "../services";

export async function createAnimeAction(formData: FormData): Promise<void> {
  const input = createAnimeSchema.parse({
    title: formData.get("title"),
    translatedTitle: formData.get("translatedTitle"),
    //cover: formData.get("cover"),
    cover: "/",
    releaseDate: formData.get("releaseDate"),
  });

  await createAnime(input);

  redirect("/catalogo/midias/animes");
}
