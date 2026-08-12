import Link from "next/link";
import { GlobalResults } from "../../types";
import Image from "next/image";
import { GLOBAL_SEARCH_PATH } from "@/consts/paths";

type Props = {
  term: string;
  isSearching: boolean;
  results: GlobalResults;
};

export function GlobalSearchResults({ term, isSearching, results }: Props) {
  if (!term.trim()) {
    return null;
  }

  if (isSearching) {
    return (
      <div>
        <p>Pesquisando...</p>
      </div>
    );
  }

  if (!results.length) {
    return (
      <div>
        <p>Sem resultados.</p>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {results.map(
          ({ id, href, coverPath, title, releaseYear, mediaType }) => (
            <li key={id}>
              <Link href={href}>
                <div>
                  <Image
                    src={coverPath}
                    alt={`Capa do título ${title}.`}
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <h1>{`${title} (${releaseYear})`}</h1>
                  <span>{mediaType}</span>
                </div>
              </Link>
            </li>
          ),
        )}
      </ul>
      <Link href={GLOBAL_SEARCH_PATH + term}>Mostrar todos...</Link>
    </div>
  );
}
