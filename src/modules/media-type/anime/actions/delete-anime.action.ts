/**
 * O que este arquivo faz:
 * - Define a Server Action responsável por excluir um anime.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco de dados.
 * - Não conhece Models.
 * - Não contém regras de negócio.
 */

"use server";

import { redirect } from "next/navigation";
import { deleteAnime } from "../services";

export async function deleteAnimeAction(formData: FormData) {
  const identifier = formData.get("identifier");

  if (typeof identifier !== "string") {
    throw new Error("Dados inválidos.");
  }

  await deleteAnime(identifier);

  redirect("/animes");
}
