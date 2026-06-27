/**
 * Página responsável por exibir o catálogo de um MediaType.
 *
 * O MediaType é resolvido a partir do slug da URL.
 * O estado do catálogo é derivado dos parâmetros da URL
 * por meio do Catalog Parser.
 */

import { notFound } from "next/navigation";

import { CatalogSidebar, parseCatalogQuery } from "@/modules/catalog";

import { findMediaTypeBySlug } from "@/modules/media-types";

type Props = {
  params: Promise<{
    mediaTypeSlug: string;
  }>;

  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function MediaTypePage({ params, searchParams }: Props) {
  const { mediaTypeSlug } = await params;

  const mediaTypeDefinition = findMediaTypeBySlug(mediaTypeSlug);

  if (!mediaTypeDefinition) {
    notFound();
  }

  const query = parseCatalogQuery(await searchParams);

  return (
    <main>
      <h1>{mediaTypeDefinition.label}</h1>

      <CatalogSidebar query={query} />
    </main>
  );
}
