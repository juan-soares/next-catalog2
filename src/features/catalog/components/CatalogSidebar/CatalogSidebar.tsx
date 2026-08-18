import { CatalogFilter } from "../../types";
import { CatalogFilters } from "./CatalogFilters";
import { CatalogSearch } from "./CatalogSearch";

type Props = {
  filters: CatalogFilter[]
}

export function CatalogSidebar({filters}:Props) {
  return (
    <aside>
      <section>
        <CatalogSearch />
      </section>

      <section>
        <CatalogFilters filters={filters} />
      </section>
    </aside>
  );
}
