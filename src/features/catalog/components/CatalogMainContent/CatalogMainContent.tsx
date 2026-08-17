import { CatalogCardItem } from "../types";
import { CatalogList } from "./CatalogList";
import { CatalogSortbar } from "./CatalogSortbar";

type Props = {
  catalogCards: CatalogCardItem[];
};

export function CatalogMainContent({ catalogCards }: Props) {
  return (
    <main>
      <CatalogSortbar />
      <CatalogList catalogCards={catalogCards} />
    </main>
  );
}
