"use client";

import {
  GlobalSearchInput,
  GlobalSearchResults,
} from "@/modules/global-search/components";
import { ChangeEvent, useEffect, useState } from "react";
import { GlobalSearchResult } from "@/modules/global-search/types";
import { searchGlobalMediasFromClientSide } from "@/modules/global-search/services";

export function GlobalSearch() {
  const [term, setTerm] = useState<string>("");
  const [results, setResults] = useState<GlobalSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTerm(e.target.value);

  useEffect(() => {
    const normalizedTerm = term.trim();

    if (!normalizedTerm) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        const medias = await searchGlobalMediasFromClientSide(normalizedTerm);
        setResults(medias);
      } catch {
        console.error("Ops! Erro ao consultar a pesquisa global.");
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  return (
    <div>
      <GlobalSearchInput term={term} onChange={handleChange} />

      {term.trim() && (
        <GlobalSearchResults
          isLoading={isLoading}
          results={results}
          term={term}
        />
      )}
    </div>
  );
}
