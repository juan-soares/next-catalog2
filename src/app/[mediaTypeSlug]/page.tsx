/**
 * O que este arquivo faz:
 * - Orquestra a página de catálogo baseada em MediaType.
 * - Resolve o MediaType a partir do slug da URL.
 * - Converte searchParams em CatalogQuery.
 * - Busca itens via MediaType.
 * - Entrega dados prontos para os componentes de UI.
 *
 * O que este arquivo NÃO faz:
 * - Não contém regra de negócio de catálogo.
 * - Não busca dados diretamente no banco.
 * - Não interpreta filtros ou lógica de domínio.
 * - Não renderiza lógica de estado.
 */

import { notFound } from "next/navigation";
import { CatalogItem, getMediaTypeBySlug } from "@/modules/media-type";
import {
  CatalogSidebar,
  CatalogList,
  CatalogSortbar,
  convertSearchParamsToCatalogQuery,
} from "@/modules/catalog";

type Props = {
  params: Promise<{
    mediaTypeSlug: string;
  }>;

  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function MediaTypePage({ params, searchParams }: Props) {
  const { mediaTypeSlug } = await params;
  const resolvedSearchParams = await searchParams;

  const mediaType = getMediaTypeBySlug(mediaTypeSlug);
  if (!mediaType) return notFound();

  const { label } = mediaType;

  const query = convertSearchParamsToCatalogQuery(resolvedSearchParams);

  const items = await mediaType.getItems(query);

  const filters = await mediaType.getFilters(query);

  return (
    <div>
      <main>
        <h1>{label}</h1>
        <CatalogSidebar slug={mediaType.slug} query={query} filters={filters} />
        <CatalogSortbar query={query} />
        <CatalogList items={items} />
      </main>
    </div>
  );
}
