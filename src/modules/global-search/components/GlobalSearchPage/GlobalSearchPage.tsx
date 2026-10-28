import { MediaList } from "@/modules/media/components";
import type { GlobalSearchResult } from "@/modules/global-search/types";

type Props = {
  term: string;
  results: GlobalSearchResult[];
};

export function GlobalSearchPage({ term, results }: Props) {
  return (
    <div>
      <main>
        <h1>Pesquisar por: {term}</h1>

        <MediaList currentSort="title-asc" medias={results} />
      </main>
    </div>
  );
}
