import { CatalogList } from "./CatalogList";
import { CatalogSortbar } from "./CatalogSortbar";

export function CatalogMainContent() {
  return (
    <main>
      <CatalogSortbar />
      <CatalogList results={[]} />
    </main>
  );
}
