"use server";

/**
 * O que este arquivo faz:
 * - Define Server Actions da página de criação de atributos.
 * - Faz a ponte entre FormData do Next.js e os casos de uso da aplicação.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco de dados.
 * - Não conhece Models.
 * - Não contém regras de negócio.
 * - Não substitui Services.
 */

import { createGenre } from "@/modules/attributes/genre";
import { redirect } from "next/navigation";

export async function createGenreAction(formData: FormData) {
  const label = formData.get("label");

  if (typeof label !== "string") {
    throw new Error("Dados inválidos");
  }

  if (!label.trim()) {
    throw new Error("Label obrigatório");
  }

  await createGenre(label);

  redirect("/admin/atributos/generos");
}
