/**
 * O que este arquivo faz:
 * - Renderiza a página de edição de um valor de atributo.
 * - Resolve o atributo através do slug.
 * - Busca a entidade através do provider registrado.
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

  const attributeEntity = await attribute.admin.provider.findByValue(value);

  if (!attributeEntity) {
    notFound();
  }

  const AttributeEditForm = attribute.admin.edit;

  return (
    <main>
      <h1>Editar {attribute.label}</h1>

      <AttributeEditForm attribute={attributeEntity} />
    </main>
  );
}
