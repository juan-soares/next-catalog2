import Image from "next/image";
import Link from "next/link";
import { CatalogListItem } from "../../types";

type Props = {
  list: CatalogListItem[];
};

export function CatalogList({ list }: Props) {
  if (!list.length) {
    return (
      <div>
        <p>Sem resultados.</p>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {list.map(({ id, href, cover, title, mediaType, releaseYear }) => (
          <li key={id}>
            <Link href={href}>
              <div>
                <Image
                  src={cover}
                  alt={`Capa do título ${title}.`}
                  width={60}
                  height={60}
                />
                <span>{mediaType}</span>
              </div>
              <h2>{title}</h2>
              <span>{releaseYear}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
