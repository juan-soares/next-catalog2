import type { Dispatch, SetStateAction } from "react";
import { GLOBAL_SEARCH_PATH } from "@/consts/paths";
import { SearchIcon } from "lucide-react";

type Props = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

export function GlobalSearchInput({ query, setQuery }: Props) {
  return (
    <form action={GLOBAL_SEARCH_PATH}>
      <input
        type="search"
        name="q"
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
        placeholder="Pesquisar..."
        autoComplete="off"
      />

      <button type="submit" aria-label="Pesquisar">
        <SearchIcon />
      </button>
    </form>
  );
}
