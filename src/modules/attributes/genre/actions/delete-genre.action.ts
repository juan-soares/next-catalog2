/**
 * O que este arquivo faz:
 * - Define a Server Action responsável por excluir um gênero.
 * - Faz a ponte entre FormData e o service.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco de dados.
 * - Não conhece Models.
 * - Não contém regras de negócio.
 */

"use server";

import { redirect } from "next/navigation";
import { deleteGenre } from "../services";

export async function deleteGenreAction(formData: FormData) {
  const value = formData.get("value");

  if (typeof value !== "string") {
    throw new Error("Dados inválidos");
  }

  await deleteGenre(value);

  redirect("/admin/atributos/generos");
}
