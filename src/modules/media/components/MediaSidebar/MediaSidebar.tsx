import Link from "next/link";
import { Plus } from "lucide-react";
import type { MediaTypeFilter } from "@/modules/media-type/types";
import { MediaTypeFilters } from "@/modules/media-type/components/";

type Props = {
  mediaTypePath: string;
  typeTitle: string;
  filters: MediaTypeFilter[];
};

export function MediaSidebar({ mediaTypePath, typeTitle, filters }: Props) {
  return (
    <aside>
      <h1>{typeTitle}</h1>

      <form method="GET" id="search">
        <input type="search" name="term" placeholder="Pesquisar..." />
        <Link href={`${mediaTypePath}/adicionar`}>
          <Plus />
        </Link>

        <MediaTypeFilters filters={filters} />

        <button form="search" type="submit">
          OK
        </button>
      </form>
    </aside>
  );
}
