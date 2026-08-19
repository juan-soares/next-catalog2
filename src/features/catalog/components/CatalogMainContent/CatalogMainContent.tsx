import { CatalogListItem } from "../../types";
import { CatalogList } from "./CatalogList";
import { CatalogSortbar } from "./CatalogSortbar";

type Props = {
    list: CatalogListItem[]
}

export function CatalogMainContent({list}:Props) {
  return (
    <main>
      <CatalogSortbar />
      <CatalogList list={list}/>
    </main>
  );
}
