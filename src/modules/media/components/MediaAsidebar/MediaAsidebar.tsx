import { MediaTypeCode, MediaTypeFilters } from "@/modules/media-type";

type Props = {
  typeTitle: string;
  typeCode: MediaTypeCode;
};

export function MediaSidebar({ typeTitle, typeCode }: Props) {
  return (
    <aside>
      <h1>{typeTitle}</h1>

      <form method="GET" id="search">
        <input type="search" name="term" placeholder="Pesquisar..." />

        <MediaTypeFilters typeCode={typeCode} />

        <button form="search" type="submit">
          OK
        </button>
      </form>
    </aside>
  );
}
