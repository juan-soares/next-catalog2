import { useEffect, useState } from "react";

export function useGlobalSearch() {
  const [term, setTerm] = useState("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [results, setResults] = useState<[]>([]);

  useEffect(() => {
    if (!term.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
  }, [term]);

  return { term, setTerm, isSearching, results };
}
