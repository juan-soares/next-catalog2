import { PlusCircleIcon, PlusIcon, PlusSquare, Search } from "lucide-react";
import Link from "next/link";

type Props = {
  hasUser: boolean;
  newPath: string;
};

export async function CatalogSearch({ hasUser, newPath }: Props) {
  return (
    <form>
      <input type="search" placeholder="Pesquisar..." name="q" />
      {hasUser && (
        <Link href={newPath}>
          <PlusSquare />
        </Link>
      )}
      <button type="submit">
        <Search size={10} />
      </button>
    </form>
  );
}
