/**
 * Página responsável por exibir o catálogo de um MediaType.
 *
 * O MediaType é resolvido a partir do slug da URL.
 * O estado do catálogo é derivado dos parâmetros da URL
 * por meio do Catalog Parser + Catalog Engine.
 */

import { notFound } from "next/navigation";

import {
  CatalogSidebar,
  parseCatalogQuery,
  catalogEngine,
  getAllowedFilters,
} from "@/modules/catalog";

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

  const resolvedSearchParams = await searchParams;
  const allowedFilters = getAllowedFilters(mediaTypeDefinition.type);
  const query = parseCatalogQuery(resolvedSearchParams, allowedFilters);

  /* const catalog = await catalogEngine({
    mediaType: mediaTypeDefinition,
    query,
  });
  */

  return (
    <main>
      <h1>{mediaTypeDefinition.label}</h1>

      <CatalogSidebar query={query} mediaType={mediaTypeDefinition} />

      {/* FUTURO */}
      {/* <CatalogList items={catalog.items} /> */}
    </main>
  );
}
