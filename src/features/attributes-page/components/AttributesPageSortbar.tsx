import { CATALOG_SORT_TYPE } from "@/features/catalog";

export function AttributesPageSortbar() {
  return (
    <form method="GET">
      <button type="submit" name="sort" value={CATALOG_SORT_TYPE.ALPH}>
        A-Z
      </button>
    </form>
  );
}
