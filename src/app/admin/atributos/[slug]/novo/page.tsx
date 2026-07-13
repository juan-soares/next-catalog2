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

  return (
    <main>
      <h1>Novo atributo</h1>

      <p>
        Criando: <strong>{attribute.label}</strong>
      </p>

      <dl>
        <div>
          <dt>Key</dt>
          <dd>{attribute.key}</dd>
        </div>

        <div>
          <dt>Slug</dt>
          <dd>{attribute.slug}</dd>
        </div>
      </dl>
    </main>
  );
}
