/**
 * O que este arquivo faz:
 * - Define a Server Action responsável por atualizar um gênero.
 * - Converte dados vindos do formulário.
 * - Controla o fluxo de navegação após a operação.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco de dados.
 * - Não conhece Models.
 * - Não contém regras de negócio.
 */

"use server";

import { redirect } from "next/navigation";
import { updateGenre } from "@/modules/attributes/genre";

export async function updateGenreAction(formData: FormData) {
  const value = formData.get("value");
  const label = formData.get("label");

  if (typeof value !== "string" || typeof label !== "string") {
    throw new Error("Dados inválidos");
  }

  await updateGenre({
    value,
    label,
  });

  redirect(`/admin/atributos/generos`);
}
