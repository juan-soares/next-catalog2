import { CatalogFilters } from "./CatalogFilters";
import { CatalogSearch } from "./CatalogSearch";

type Props = {
  title: string;
  path: string;
};

export function CatalogSidebar({ title, path }: Props) {
  return (
    <aside>
      <h1>{title}</h1>

      <form>
        <section>
          <CatalogSearch path={path} />
        </section>

        <section>
          <CatalogFilters />
        </section>

        <footer>
          <button>Filtrar</button>
        </footer>
      </form>
    </aside>
  );
}
