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

import { CatalogSortbar } from "@/modules/catalog";
import { MediaTypePageProps } from "@/modules/media-type";
import { AnimesCatalogList } from "../AnimesCatalogList";
import { CatalogSearch } from "@/modules/catalog/components/CatalogSearch";

export function AnimePage({ query }: MediaTypePageProps) {
  const pathName = "/catalogo/animes";

  return (
    <main>
      <h1>Animes</h1>
      <CatalogSearch pathname={pathName} query={query} />
      <CatalogSortbar pathname={pathName} query={query} />
      <AnimesCatalogList />
    </main>
  );
}
