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

import { CatalogFilters, CatalogSortbar } from "@/modules/catalog";
import { MediaTypePageProps } from "@/modules/media-type";
import { AnimesCatalogList } from "../AnimesCatalogList";
import { CatalogSearch } from "@/modules/catalog";
import { getAnimeFilters } from "../../services";

export async function AnimePage({ query }: MediaTypePageProps) {
  const pathName = "/catalogo/animes";
  const filters = await getAnimeFilters();

  return (
    <main>
      <h1>Animes</h1>
      <aside>
        <CatalogSearch pathname={pathName} query={query} />
        <CatalogFilters pathName={pathName} filters={filters} />
      </aside>
      <main>
        <CatalogSortbar pathname={pathName} query={query} />
        <AnimesCatalogList query={query} />
      </main>
    </main>
  );
}
