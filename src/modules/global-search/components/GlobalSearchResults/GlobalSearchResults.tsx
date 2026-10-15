import Link from "next/link";
import Image from "next/image";
import { GlobalSearchResult } from "@/modules/global-search/types";
import { SEARCH_PATH } from "@/shared/consts";

type Props = {
  isLoading: boolean;
  results: GlobalSearchResult[];
  term: string;
};

export function GlobalSearchResults({ isLoading, results, term }: Props) {
  if (isLoading) return <p>Carregando...</p>;

  if (results.length === 0) return <p>Sem resultados.</p>;

  return (
    <div>
      <ul>
        {results.map(
          ({ slug, path, cover, type, releaseYear, title, synopsis }) => (
            <li key={slug}>
              <Link href={path}>
                <article>
                  <aside>
                    <Image
                      src={cover.url}
                      alt={cover.alt}
                      width={60}
                      height={60}
                    />
                  </aside>

                  <main>
                    <header>{`${type.label} • ${releaseYear}`}</header>

                    <h2>{title}</h2>
                    {synopsis}
                  </main>
                </article>
              </Link>
            </li>
          ),
        )}
      </ul>
      <Link href={SEARCH_PATH + term}>Ver todos resultados...</Link>
    </div>
  );
}
