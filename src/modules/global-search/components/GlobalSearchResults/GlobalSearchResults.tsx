import Link from "next/link";
import Image from "next/image";
import { GlobalSearchResult } from "@/modules/global-search/types";

type Props = {
  isLoading: boolean;
  hasError: boolean;
  results: GlobalSearchResult[];
  searchHref: string;
};

export function GlobalSearchResults({
  isLoading,
  hasError,
  results,
  searchHref,
}: Props) {
  if (isLoading) return <p>Carregando...</p>;

  if (hasError)
    return (
      <p>Ops! Aconteceu algum erro na pesquisa, por favor, tente novamente.</p>
    );

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
      <Link href={searchHref}>Ver todos resultados...</Link>
    </div>
  );
}
