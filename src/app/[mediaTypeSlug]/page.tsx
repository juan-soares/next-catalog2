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
import { getMediaTypeBySlug } from "@/modules/media-type";
import {
  CatalogSidebar,
  CatalogList,
  CatalogSortbar,
  parseCatalogQuery,
} from "@/modules/catalog";

type Props = {
  params: Promise<{
    mediaTypeSlug: string;
  }>;

  searchParams: Record<string, string | string[] | undefined>;
};

export default async function MediaTypePage({ params, searchParams }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaType = getMediaTypeBySlug(mediaTypeSlug);

  if (!mediaType) return notFound();

  const { label } = mediaType;

  const query = parseCatalogQuery(searchParams);
  const items = await mediaType.getItems(query);

  return (
    <div>
      <main>
        <h1>{label}</h1>
        <CatalogSidebar />
        <CatalogSortbar />
        <CatalogList items={items} />
      </main>
    </div>
  );
}
