/**
 * O que este arquivo faz:
 * - Recebe dados do formulário.
 * - Converte FormData para entrada da aplicação.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco.
 * - Não conhece Model.
 * - Não contém regra de negócio.
 */

"use server";

import { redirect } from "next/navigation";
import { createAnime } from "../services";

export async function createAnimeAction(formData: FormData) {
  const title = formData.get("title");
  const translatedTitle = formData.get("translatedTitle");
  const releaseDate = formData.get("releaseDate");

  if (typeof title !== "string" || typeof releaseDate !== "string") {
    throw new Error("Dados inválidos");
  }

  await createAnime({
    title,
    translatedTitle:
      typeof translatedTitle === "string" ? translatedTitle : undefined,

    releaseDate: new Date(releaseDate),

    cover: "/",
    trailer: "/",
  });

  redirect("/animes");
}
