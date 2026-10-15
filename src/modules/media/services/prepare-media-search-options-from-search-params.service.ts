import { MediaSearchOptions } from "@/modules/media/types";
import { getValidMediaSortOptionFromSearchParams } from "@/modules/media/services";
import { isAttributeTypeFieldCode } from "@/modules/attribute";

export function prepareMediaSearchOptionsFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>,
): MediaSearchOptions {
  const { term, sort, ...rawFilters } = searchParams;

  const filters: MediaSearchOptions["filters"] = {};

  for (const [key, value] of Object.entries(rawFilters)) {
    if (!isAttributeTypeFieldCode(key)) {
      continue;
    }

    if (value === undefined) {
      continue;
    }

    filters[key] = Array.isArray(value) ? value : [value];
  }

  return {
    term: typeof term === "string" ? term.trim() || undefined : undefined,
    sort: getValidMediaSortOptionFromSearchParams(sort),
    filters,
  };
}
