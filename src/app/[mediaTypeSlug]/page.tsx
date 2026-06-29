/**
 * Página responsável por exibir o catálogo de um MediaType.
 *
 * Fluxo:
 * URL
 *   ↓
 * MediaType
 *   ↓
 * Catalog Parser
 *   ↓
 * Catalog Engine
 *   ↓
 * UI
 */

import { notFound } from "next/navigation";

import {
  CatalogSidebar,
  catalogEngine,
  parseCatalogQuery,
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

  const mediaType = findMediaTypeBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const query = parseCatalogQuery(await searchParams, mediaType.filters);

  const catalog = await catalogEngine({
    mediaType,
    query,
  });

  return (
    <main>
      <h1>{mediaType.label}</h1>

      <CatalogSidebar mediaType={mediaType} query={query} />

      {/* Em breve */}
      {/* <CatalogGrid items={catalog.items} /> */}
    </main>
  );
}
