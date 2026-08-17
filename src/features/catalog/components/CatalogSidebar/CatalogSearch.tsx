import Link from "next/link";
import { Plus, SearchIcon } from "lucide-react";
import { auth } from "@/features/auth/next-auth/auth";

type Props = {
  path: string;
};

export async function CatalogSearch({ path }: Props) {
  const session = await auth();
  return (
    <div>
      <input type="search" placeholder="Pesquisar..." />
      <button type="submit">
        <SearchIcon />
      </button>

      {session && (
        <Link href={path + "/novo"}>
          <Plus />
        </Link>
      )}
    </div>
  );
}
