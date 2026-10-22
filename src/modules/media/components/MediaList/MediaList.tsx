import Image from "next/image";
import Link from "next/link";
import type { MediaView, MediaSortOptionKey } from "@/modules/media/types";

type Props = {
  currentSort: MediaSortOptionKey;
  medias: Pick<
    MediaView,
    "slug" | "path" | "cover" | "title" | "releaseYear"
  >[];
};

export function MediaList({ currentSort, medias }: Props) {
  if (medias.length === 0)
    return (
      <div>
        <p>Sem registros.</p>
      </div>
    );

  return (
    <div>
      <ul>
        {medias.map(({ slug, path, cover, title, releaseYear }) => (
          <li key={slug}>
            <Link href={path}>
              <Image src={cover.url} alt={cover.alt} width={60} height={60} />
              <h2>{title}</h2>
              <p>{releaseYear}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
