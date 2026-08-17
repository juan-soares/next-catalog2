import { CatalogMainContent } from "../CatalogMainContent";
import { CatalogSidebar } from "../CatalogSidebar";
import { CatalogCardItem } from "../types";

type Props = {
  title: string;
  path: string;
  catalogCards: CatalogCardItem[];
};

export function Catalog({ title, path, catalogCards }: Props) {
  return (
    <div>
      <CatalogSidebar title={title} path={path} />
      <CatalogMainContent catalogCards={catalogCards} />

      <footer></footer>
    </div>
  );
}
