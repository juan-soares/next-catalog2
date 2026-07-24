import { CatalogFilter, CatalogQuery } from "../../types";
import { CatalogAddBtn } from "../CatalogAddBtn";
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
      <section>
        <CatalogSearch term={term} />
        <CatalogAddBtn pathName={pathName} />
      </section>

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
