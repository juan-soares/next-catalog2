import { MediaTypeFilter, MediaTypeFilters } from "@/modules/media-type";

type Props = {
  typeTitle: string;
  filters: MediaTypeFilter[];
};

export function MediaSidebar({ typeTitle, filters }: Props) {
  return (
    <aside>
      <h1>{typeTitle}</h1>

      <form method="GET" id="search">
        <input type="search" name="term" placeholder="Pesquisar..." />

        <MediaTypeFilters filters={filters} />

        <button form="search" type="submit">
          OK
        </button>
      </form>
    </aside>
  );
}
