import Link from "next/link";
import { Search } from "lucide-react";

type Props = {
  term: string;
  onChange: (newTerm: string) => void;
  searchHref: string;
};

export function GlobalSearchInput({ term, onChange, searchHref }: Props) {
  return (
    <div>
      <input
        type="search"
        placeholder="Pesquisar..."
        name="search"
        value={term}
        onChange={(e) => onChange(e.target.value)}
      />
      <Link href={searchHref}>
        <Search />
      </Link>
    </div>
  );
}
