import { Search } from "lucide-react";
import Link from "next/link";
import { CATALOG_MEDIAS_NEW_PATH } from "@/shared/consts";
import type { MediaType } from "@/modules/media-type/types";

type Props = {
  isAdmin: boolean;
  typeInfo: MediaType;
};

export function MediaTypeSidebar({ isAdmin = false, typeInfo }: Props) {
  return (
    <aside>
      <form method="GET">
        <section>
          <input type="search" placeholder="Pesquisar..." name="q" />
          <button type="submit">
            <Search />
          </button>

          {isAdmin && (
            <Link href={`${CATALOG_MEDIAS_NEW_PATH}?q=${typeInfo.slug}`}>
              Adicionar
            </Link>
          )}
        </section>

        <section>
          <h2>Filtros</h2>

          <div>
            <h3>A</h3>
            <label>
              <input type="checkbox" name="A" value="AA" />
            </label>
          </div>
        </section>

        <button type="submit">Filtrar</button>
      </form>
    </aside>
  );
}
