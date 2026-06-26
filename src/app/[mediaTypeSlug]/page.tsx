/**
 * Página responsável por exibir o catálogo de um MediaType.
 *
 * O MediaType é resolvido a partir do slug da URL.
 * Todas as demais informações da página derivam desse MediaType.
 */

import { notFound } from "next/navigation";
import { findMediaTypeBySlug, getMediaTypeMeta } from "@/modules/media-types";
import { CatalogSidebar } from "@/modules/catalog";
import { CatalogQuery, CatalogSort } from "@/modules/catalog/types";

type Props = {
  params: Promise<{
    mediaTypeSlug: string;
  }>;
  searchParams: Promise<{
    q?: string;
    sort?: CatalogSort;
  }>;
};

export default async function MediaTypePage({ params, searchParams }: Props) {
  const { mediaTypeSlug } = await params;
  const query: CatalogQuery = await searchParams;

  const mediaType = findMediaTypeBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const { label } = getMediaTypeMeta(mediaType);

  return (
    <main>
      <h1>{label}</h1>
      <CatalogSidebar query={query} />
    </main>
  );
}
