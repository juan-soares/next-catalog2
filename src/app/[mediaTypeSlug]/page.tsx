import { notFound } from "next/navigation";

import { getMediaTypeDefinition } from "@/modules/media-types/helpers/get-media-type-definition.helper";
import { parseCatalogQuery } from "@/modules/catalog/parser/parse-catalog-query";
import { CatalogSidebar } from "@/modules/catalog/components/CatalogSidebar";

type Props = {
  params: Promise<{
    mediaTypeSlug: string;
  }>;

  searchParams: Record<string, string | string[] | undefined>;
};

export default async function MediaTypePage({ params, searchParams }: Props) {
  /**
   * 1. Resolver params (Next moderno)
   */
  const { mediaTypeSlug } = await params;

  /**
   * 2. Resolver MediaTypeDefinition
   */
  const definition = getMediaTypeDefinition(mediaTypeSlug);

  if (!definition) {
    notFound();
  }

  /**
   * 3. Parse da query baseado no MediaType
   */
  const query = parseCatalogQuery(searchParams, definition);

  /**
   * 4. Buscar catálogo via definition
   */
  const catalog = await definition.catalog.getItems(query);

  return (
    <main>
      <section>
        <h1>{definition.label}</h1>
        <CatalogSidebar filters={definition.catalog.filters} />

        {catalog.items.map((item: any) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </section>
    </main>
  );
}
