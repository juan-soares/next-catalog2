import { useEffect, useState } from "react";
import { SEARCH_PATH } from "@/shared/consts";
import type { GlobalSearchResult } from "@/modules/global-search/types";
import { searchGlobalMediasFromClientSide } from "@/modules/global-search/services";

export function useGlobalSearch() {
  const [term, setTerm] = useState<string>("");
  const [results, setResults] = useState<GlobalSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState(false);

  const normalizedTerm = term.trim();
  const searchHref = `${SEARCH_PATH}?term=${encodeURIComponent(normalizedTerm)}`;

  const handleChange = (newTerm: string) => setTerm(newTerm);

  useEffect(() => {
    let active = true;

    if (!normalizedTerm) {
      setResults([]);
      setIsLoading(false);
      setHasError(false);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    const timeoutId = setTimeout(async () => {
      try {
        const medias = await searchGlobalMediasFromClientSide(normalizedTerm);

        if (active) {
          setResults(medias);
        }
      } catch (error) {
        if (active) {
          setResults([]);
          console.error("Erro ao fazer a pesquisa global: ", error);
          setHasError(true);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }, 400);

    return () => {
      active = false;
      clearTimeout(timeoutId);
    };
  }, [normalizedTerm]);

  return {
    term,
    handleChange,
    searchHref,
    normalizedTerm,
    isLoading,
    hasError,
    results,
  };
}
