"use server";

import { redirect } from "next/navigation";

export async function deleteAnimeAction(formData: FormData): Promise<void> {
  const input = deleteAnimeSchema.parse({
    key: formData.get("fieldName"),
    value: formData.get("fieldName"),
  });

  await deleteAnime({[input.key]:input.value});

  redirect("/catalogo/midias/animes");
}
