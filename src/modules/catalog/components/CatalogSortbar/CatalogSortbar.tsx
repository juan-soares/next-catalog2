"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { CatalogSort } from "@/modules/catalog/types/catalog-sort.type";

type Props = {
  options: {
    default: CatalogSort;
    options: CatalogSort[];
  };
};

export function CatalogSortbar({ options }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setSort(sort: CatalogSort) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", sort);

    router.push(`${pathname}?${params.toString()}`);
  }

  const currentSort =
    (searchParams.get("sort") as CatalogSort) ?? options.default;

  return (
    <div>
      {options.options.map((sort) => (
        <button
          key={sort}
          onClick={() => setSort(sort)}
          style={{
            fontWeight: currentSort === sort ? "bold" : "normal",
          }}
        >
          {sort}
        </button>
      ))}
    </div>
  );
}
