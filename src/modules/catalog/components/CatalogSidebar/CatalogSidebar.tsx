import { CatalogFilter, CatalogQuery } from "../../types";
import { CatalogFilters } from "../CatalogFilters";
import { CatalogSearch } from "../CatalogSearch";

type Props = {
  pathName: string;
  term?: string;
  filters: CatalogFilter[];
};

export function CatalogSidebar({ pathName, term, filters }: Props) {
  return (
    <aside>
      <h2>Filtros</h2>
      <CatalogSearch term={term} />
      <CatalogFilters filters={filters} />

      <footer>
        <button type="submit" form="catalog-query">
          Filtrar
        </button>
      </footer>

      <form action={pathName}>
        <button type="submit">Limpar filtros</button>
      </form>
    </aside>
  );
}
