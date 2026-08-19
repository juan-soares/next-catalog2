import { CATALOG_SORT_OPTIONS } from "../../consts";

export function CatalogSortbar() {
  return (
    <form method="GET">
      {CATALOG_SORT_OPTIONS.map(({ sortType, label }) => (
        <button key={sortType} type="submit" name="sort" value={sortType}>
          {label}
        </button>
      ))}
    </form>
  );
}
