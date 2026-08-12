"use client";

import { useGlobalSearch } from "../../hooks";
import { GlobalSearchInput } from "../GlobalSearchInput";
import { GlobalSearchResults } from "../GlobalSearchResults";

export function GlobalSearch() {
  const { term, setTerm, results, isSearching } = useGlobalSearch();

  return (
    <div>
      <GlobalSearchInput query={term} setQuery={setTerm} />

      <GlobalSearchResults
        term={term}
        isSearching={isSearching}
        results={results}
      />
    </div>
  );
}
