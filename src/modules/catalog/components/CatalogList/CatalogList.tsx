import Image from "next/image";
import Link from "next/link";
import type { CatalogList } from "../../types";

type Props = {
  results: CatalogList;
};

export function CatalogList({ results }: Props) {
  if (!results.length) return <p>Sem resultados.</p>;
  return (
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
  );
}
