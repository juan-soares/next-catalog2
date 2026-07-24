/**
 * O que este arquivo faz
 * ----------------------
 * Resolve uma página através do MediaType informado
 * na URL e delega a renderização para o módulo responsável.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não conhece domínios específicos.
 * - Não renderiza conteúdo de mídia.
 * - Não possui regras de negócio.
 * - Não acessa banco de dados.
 */

import {
  Catalog,
  CatalogSearchParams,
  buildCatalogQuery,
} from "@/modules/catalog";
import { getMediaTypeConfigBySlug } from "@/modules/media-type";

type Props = {
  params: Promise<{
    mediaTypeSlug: string;
  }>;
  searchParams: Promise<CatalogSearchParams>;
};

export default async function MediaTypePage({ params, searchParams }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaTypeConfig = getMediaTypeConfigBySlug(mediaTypeSlug);

  const pathName = `/catalogo/${mediaTypeConfig.slug}`;

  const searchParamsPromise = await searchParams;
  const query = buildCatalogQuery(searchParamsPromise);

  const filters = await mediaTypeConfig.catalog.getFilters();
  const results = await mediaTypeConfig.catalog.getResults(query);


  return (
    <Catalog
      pathName={pathName}
      query={query}
      title={mediaTypeConfig.label}
      filters={filters}
      results={results}
    />
  );
}
