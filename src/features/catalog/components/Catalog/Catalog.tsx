import { CatalogFilter, CatalogListItem } from "../../types";
import { CatalogMainContent } from "../CatalogMainContent";
import { CatalogSidebar } from "../CatalogSidebar";

type Props = {
  info: {
    title: string;
    filters: CatalogFilter[];
    results: CatalogListItem[];
  };
};

export function Catalog({ info }: Props) {
  const { title, filters, results } = info;

  return (
    <div>
      <h1>{title}</h1>
      <CatalogSidebar filters={filters} />
      <CatalogMainContent list={results} />
    </div>
  );
}
