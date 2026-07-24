/**
 * O que este arquivo faz
 * ----------------------
 * Renderiza a página principal de animes.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não resolve rotas.
 * - Não conhece MediaType Registry.
 * - Não acessa banco diretamente.
 * - Não contém regras de navegação.
 */

import { MediaTypePageProps } from "@/modules/media-type";
import {
  getAnimeFilters,
  getAnimes,
  listAnimeCatalogResults,
} from "../../services";
import { Catalog } from "@/modules/catalog";

export async function AnimePage({ query }: MediaTypePageProps) {
  const pathName = "/catalogo/animes";

  const filters = await getAnimeFilters();
  const results = await listAnimeCatalogResults(query);

  return (
    <div>
      <Catalog
        title="Animes"
        pathName={pathName}
        query={query}
        filters={filters}
        results={results}
      />
    </div>
  );
}
