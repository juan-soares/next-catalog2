/**
 * O que este arquivo faz:
 * - Renderiza a página de edição de um valor de atributo.
 * - Resolve o atributo através do slug.
 * - Busca o valor através do provider registrado.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece Genre.
 * - Não conhece Language.
 * - Não acessa repositories diretamente.
 * - Não contém regras de negócio.
 */

import { notFound } from "next/navigation";
import { getAttributeBySlug } from "@/modules/attributes";

type Props = {
  params: Promise<{
    slug: string;
    value: string;
  }>;
};

export default async function EditAttributePage({ params }: Props) {
  const { slug, value } = await params;

  const attribute = getAttributeBySlug(slug);

  if (!attribute) {
    notFound();
  }

  const option = await attribute.optionsProvider.findByValue(value);

  if (!option) {
    notFound();
  }

  const AttributeEditForm = attribute.admin.edit;

  return (
    <main>
      <h1>Editar {attribute.label}</h1>

      <AttributeEditForm value={option.value} label={option.label} />
    </main>
  );
}
