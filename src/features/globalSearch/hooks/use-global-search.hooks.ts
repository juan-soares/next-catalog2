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
      const searchResults = await searchByTerm(query);
      setResults(searchResults);
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
