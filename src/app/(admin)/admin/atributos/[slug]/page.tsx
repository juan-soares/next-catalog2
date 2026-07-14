/**
 * O que este arquivo faz:
 * - Renderiza a lista de valores de um atributo.
 * - Resolve o atributo através do slug da URL.
 * - Busca as opções através do provider registrado.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece entidades específicas.
 * - Não acessa repositories diretamente.
 * - Não conhece banco de dados.
 * - Não possui regras de Genre ou Language.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { getAttributeBySlug } from "@/modules/attributes";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AttributeValuesPage({ params }: Props) {
  const { slug } = await params;

  const attribute = getAttributeBySlug(slug);

  if (!attribute) {
    notFound();
  }

  const options = await attribute.optionsProvider.findAll();

  return (
    <main>
      <h1>{attribute.label}</h1>

      <Link href={`/admin/atributos/${attribute.slug}/novo`}>Novo</Link>

      <ul>
        {options.map((option) => (
          <li key={option.value}>{option.label}</li>
        ))}
      </ul>
    </main>
  );
}
