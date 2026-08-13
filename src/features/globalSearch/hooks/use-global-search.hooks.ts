import { useEffect, useState } from "react";
import { GlobalResults } from "../types";
import { searchByTerm } from "../services";

export function useGlobalSearch() {
  const [term, setTerm] = useState("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [results, setResults] = useState<GlobalResults>([]);

  useEffect(() => {
    const query = term.trim();

    if (!query) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    const timer = setTimeout(async () => {
      const response = await fetch(
        `/api/global-search?q=${encodeURIComponent(query)}`,
      );

      const results = await response.json();
      setResults(results);
      setIsSearching(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [term]);

  return {
    term,
    setTerm,
    results,
    isSearching,
  };
}
