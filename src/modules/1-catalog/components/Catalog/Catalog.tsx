import { CatalogFilter, CatalogListItem, CatalogQuery } from "../../types";
import { CatalogList } from "../CatalogList";
import { CatalogSidebar } from "../CatalogSidebar";

type Props = {
  pathName: string;
  query: CatalogQuery;
  title: string;
  filters: CatalogFilter[];
  results: CatalogListItem[];
};

export function Catalog({ pathName, query, title, filters, results }: Props) {
  return (
    <div>
      <form id="catalog-query" action={pathName} method="GET"></form>

      <h1>{title}</h1>
      <CatalogSidebar pathName={pathName} term={query.q} filters={filters} />
      <CatalogList currentSort={query.sort} results={results} />
    </div>
  );
}
