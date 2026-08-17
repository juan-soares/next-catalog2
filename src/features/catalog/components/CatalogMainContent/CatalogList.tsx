import Link from "next/link";
import { CatalogCardItem } from "../types";
import Image from "next/image";

type Props = {
  catalogCards: CatalogCardItem[];
};

export function CatalogList({ catalogCards }: Props) {
  if (!catalogCards.length)
    return (
      <div>
        <p>Sem resultados.</p>
      </div>
    );

  return (
    <ul>
      {catalogCards.map(({ id, href, cover, title, releaseYear }) => (
        <li key={id}>
          <Link href={href}>
            <Image
              src={cover}
              alt={`Capa do título ${title}.`}
              width={60}
              height={60}
            />
            <p>{title}</p>
            {releaseYear && <p>{releaseYear}</p>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
