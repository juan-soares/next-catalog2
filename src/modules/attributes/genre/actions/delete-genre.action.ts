/**
 * O que este arquivo faz:
 * - Define a Server Action responsável por excluir um gênero.
 * - Converte dados vindos da interface.
 * - Controla o fluxo de navegação após a operação.
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
  const value = formData.get("identifier");

  if (typeof value !== "string") {
    throw new Error("Dados inválidos");
  }

  await deleteGenre(value);

  redirect("/admin/atributos/generos");
}
