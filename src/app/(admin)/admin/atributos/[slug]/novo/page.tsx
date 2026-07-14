/**
 * O que este arquivo faz:
 * - Renderiza a página inicial de criação de um atributo.
 * - Resolve o atributo através do slug da URL.
 *
 * O que este arquivo NÃO faz:
 * - Não cria atributos.
 * - Não acessa repositories.
 * - Não conhece MongoDB.
 * - Não possui regras específicas de Genre ou Language.
 */

import { notFound } from "next/navigation";
import { getAttributeBySlug } from "@/modules/attributes";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function NewAttributePage({ params }: Props) {
  const { slug } = await params;

  const attribute = getAttributeBySlug(slug);

  if (!attribute) {
    notFound();
  }

  const AttributeCreateForm = attribute.admin.create;

  return (
    <main>
      <h1>Adicionar {attribute.label}</h1>
      <AttributeCreateForm />
    </main>
  );
}
