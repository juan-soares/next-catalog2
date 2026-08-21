import { CATALOG_SORT_TYPE } from "@/features/catalog";

type Props = {
  slug: string;
};

export function AttributesPageSortbar({ slug }: Props) {
  return (
    <form method="GET">
      <input type="hidden" name="type" value={slug} />

      <button type="submit" name="sort" value={CATALOG_SORT_TYPE.ALPH}>
        A-Z
      </button>
    </form>
  );
}
