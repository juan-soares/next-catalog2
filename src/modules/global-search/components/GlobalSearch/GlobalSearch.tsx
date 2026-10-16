"use client";

import { useGlobalSearch } from "@/modules/global-search/hooks";
import {
  GlobalSearchInput,
  GlobalSearchResults,
} from "@/modules/global-search/components";

export function GlobalSearch() {
  const {
    term,
    handleChange,
    searchHref,
    normalizedTerm,
    isLoading,
    hasError,
    results,
  } = useGlobalSearch();

  return (
    <div>
      <GlobalSearchInput
        term={term}
        onChange={handleChange}
        searchHref={searchHref}
      />

      {normalizedTerm && (
        <GlobalSearchResults
          isLoading={isLoading}
          hasError={hasError}
          results={results}
          searchHref={searchHref}
        />
      )}
    </div>
  );
}
