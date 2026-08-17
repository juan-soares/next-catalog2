import { CATALOG_SORT_OPTIONS } from "../../consts";

export function CatalogSortbar() {
  return (
    <form method="GET">
      {CATALOG_SORT_OPTIONS.map(({ value, label }) => (
        <button key={value} type="submit" name="sort" value={value}>
          {label}
        </button>
      ))}
    </form>
  );
}
