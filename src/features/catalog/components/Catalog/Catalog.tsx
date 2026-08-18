import { CatalogFilter } from "../../types";
import { CatalogSidebar } from "../CatalogSidebar";

type Props = {
  info: {
    title: string;
    filters: CatalogFilter[];
  };
};

export function Catalog({ info }: Props) {
  const { title, filters } = info;

  return (
    <div>
      <h1>{title}</h1>
      <CatalogSidebar filters={filters} />
    </div>
  );
}
