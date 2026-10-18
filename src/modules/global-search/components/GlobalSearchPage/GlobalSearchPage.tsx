import { MediaList, MediaSidebar } from "@/modules/media/components";
import { GlobalSearchResult } from "@/modules/global-search/types";

type Props = {
  term: string;
  results: GlobalSearchResult[];
};

export function GlobalSearchPage({ term, results }: Props) {
  return (
    <div>
      <MediaSidebar typeTitle="Pesquisa" filters={[]} mediaTypePath="" />

      <main>
        <h1>Pesquisar por: {term}</h1>

        <MediaList currentSort="title-asc" medias={results} />
      </main>
    </div>
  );
}
