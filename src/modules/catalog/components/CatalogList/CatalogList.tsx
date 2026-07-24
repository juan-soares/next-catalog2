import Image from "next/image";
import Link from "next/link";
import type { CatalogListItem, CatalogSortOptions } from "../../types";
import { CatalogSortbar } from "../CatalogSortbar";

type Props = {
  currentSort: CatalogSortOptions;
  results: CatalogListItem[];
};

export function CatalogList({ currentSort, results }: Props) {
  if (!results.length) return <p>Sem resultados.</p>;

  return (
    <main>
      <CatalogSortbar currentSort={currentSort} />
      <ul>
        {results.map(({ href, cover, label, releaseYear }) => (
          <li key={href}>
            <Link href={href}>
              <Image
                src={cover}
                alt={`Capa do título ${label}.`}
                width={60}
                height={60}
              />
              <div>
                <span>{label}</span>
                <span>{releaseYear}</span>
              </div>
              <footer>
                <button>Editar</button>
                <button>Excluir</button>
              </footer>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
