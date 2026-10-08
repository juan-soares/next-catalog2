import Link from "next/link";
import { Search } from "lucide-react";
import { CATALOG_FRANCHISES_NEW_PATH } from "@/shared/consts";
import { isAdminUser } from "@/modules/auth";

export async function FranchiseAsideNav() {
  const isAdmin = await isAdminUser();

  return (
    <aside>
      <header>
        <h1>Franquias</h1>

        <form method="GET">
          <input type="search" placeholder="Pesquisar..." name="q" />
          <button type="submit">
            <Search />
          </button>
        </form>

        {isAdmin && <Link href={CATALOG_FRANCHISES_NEW_PATH}>Adicionar</Link>}
      </header>
    </aside>
  );
}
