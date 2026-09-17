import { Search } from "lucide-react";
import Link from "next/link";
import { CATALOG_MEDIAS_NEW_PATH, CATALOG_MEDIAS_PATH } from "@/shared/consts";
import type { MediaType } from "@/modules/media-type/types";
import { MediaTypeFilters } from "@/modules/media-type/components";

type Props = {
  isAdmin: boolean;
  typeInfo: MediaType;
};

export async function MediaTypeSidebar({ isAdmin = false, typeInfo }: Props) {
  return (
    <aside>
      <form id="media-type-filters" method="GET">
        <section>
          <input type="search" placeholder="Pesquisar..." name="q" />
          <button type="submit">
            <Search />
          </button>

          {isAdmin && (
            <Link href={`${CATALOG_MEDIAS_PATH}/${typeInfo.slug}/novo`}>
              Adicionar
            </Link>
          )}
        </section>

        <section>
          <MediaTypeFilters isAdmin={isAdmin} />
        </section>

        <button type="submit">Filtrar</button>
      </form>
    </aside>
  );
}
