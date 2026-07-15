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
import { getMediaTypeBySlug } from "@/modules/media-type";

type Props = {
  params: Promise<{ mediaTypeSlug: string }>;
};

export default async function NewAttributePage({ params }: Props) {
  const { mediaTypeSlug } = await params;

  const mediaType = getMediaTypeBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const MediaTypeCreateForm = mediaType.admin.create;

  return (
    <main>
      <h1>Adicionar {mediaType.label}</h1>
      <MediaTypeCreateForm />
    </main>
  );
}
