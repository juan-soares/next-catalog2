import { ChangeEvent } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { SEARCH_PATH } from "@/shared/consts";

type Props = {
  term: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function GlobalSearchInput({ term, onChange }: Props) {
  return (
    <div>
      <input
        type="search"
        placeholder="Pesquisar..."
        name="search"
        value={term}
        onChange={onChange}
      />
      <Link href={SEARCH_PATH + term}>
        <Search />
      </Link>
    </div>
  );
}
