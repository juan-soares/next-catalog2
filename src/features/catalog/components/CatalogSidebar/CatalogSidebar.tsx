import { CatalogFilter } from "../../types";
import { CatalogFilters } from "./CatalogFilters";
import { CatalogSearch } from "./CatalogSearch";

type Props = {
  hasUser: boolean;
  newPath: string;
  filters: CatalogFilter[];
};

export function CatalogSidebar({ hasUser, newPath, filters }: Props) {
  return (
    <aside>
      <section>
        <CatalogSearch hasUser={hasUser} newPath={newPath} />
      </section>

      <section>
        <CatalogFilters filters={filters} />
      </section>
    </aside>
  );
}
