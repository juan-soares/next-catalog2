/**
 * Página responsável por exibir o catálogo de um MediaType.
 *
 * O MediaType é resolvido a partir do slug da URL.
 * Todas as demais informações da página derivam desse MediaType.
 */

import { notFound } from "next/navigation";
import { findMediaTypeBySlug, getMediaTypeMeta } from "@/modules/media-types";
import { CatalogSidebar } from "@/modules/catalog";

type Props = {
  params: Promise<{
    mediaTypeSlug: string;
  }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { mediaTypeSlug } = await params;

  const mediaType = findMediaTypeBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const { label } = getMediaTypeMeta(mediaType);

  return (
    <main>
      <h1>{label}</h1>
      <CatalogSidebar />
    </main>
  );
}
